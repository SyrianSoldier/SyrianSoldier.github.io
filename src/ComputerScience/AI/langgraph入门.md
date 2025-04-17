# langgraph入门

> 先说句暴论: langgraph就是redux.  langgraph =======  redux

## Redux版langgraph

> 定义state, initial_state,和reducer的过程和redux完全一样

```python
from langchain_community.llms.tongyi import Tongyi
from typing_extensions import TypedDict, Any
from langgraph.graph import StateGraph

# 需要注意的是, 这个key在阿里百炼平台上申请
llm = Tongyi(api_key="填自己的api_key", model="qwen-max")


# 定义State类型
class State(TypedDict):
    input: str
    result: dict[str, Any] # 约定result的格式为: { 节点名称: 节点输出的结果  }

# 定义初始State, 作为图遍历时候的初始状态
initial_state:State = {
    "input": "长沙天气怎么样",
    "result": {}
}

# 定义节点. 其实就是
def chat_node(state: State) -> State:
    input = state.get("input")

    """
    相当于前端
    return {
        ...state,
        result: {
            ...state.result,
            chat_node: llm.invoke(input)
        }
    }
    """
    return {
        **state,
        "result": {
            **state.get("result"),
            "chat_node": llm.invoke(input)
        }
    }

# 初始化状态流程图
graph_builder = StateGraph(State)
graph_builder.add_node("chat_node", chat_node)
# 设置入口和出口节点
graph_builder.set_entry_point("chat_node")
graph_builder.set_finish_point("chat_node")

# 编译可执行图
compile_graph = graph_builder.compile()

# 执行流程图
res = compile_graph.invoke(initial_state)

print(res)  # 输出最终状态
```


## 带action和payload版本的langgraph

> 上面的demo有点问题, input是"长沙天气怎么样",用户输入的问题写死在state是不是很蠢? input应该是传进来的吧, 用payload
> chat_node节点返回的数据 {"chat_node": llm.invoke(input)}, chat_node是写死的吧, 这应该也是用变量传进来的吧

```python
from langchain_community.llms.tongyi import Tongyi
from typing_extensions import TypedDict, Any
from langgraph.graph import StateGraph
from langchain_core.runnables import RunnableConfig

# 初始化通义千问大模型
llm = Tongyi(api_key="sk-d349b80d80bf4e77a2de968c868947bc", model="qwen-max")

# ------------------------------------------
# 核心类型定义
# ------------------------------------------
class State(TypedDict):
    """流程状态容器，记录每个节点的执行结果"""
    result: dict[str, Any]  # 格式: {节点名称: 该节点的大模型输出}

class Action(TypedDict):
    """运行时配置的类型定义，用于动态控制节点行为"""
    type: str  # 目标节点名称（对应 add_node 时注册的名称）
    payload: Any  # 传递给节点的载荷数据（如用户输入）

# 初始状态（空结果）
initial_state: State = {
    "result": {}
}

# ------------------------------------------
# 节点函数与 RuntimeConfig 交互逻辑
# ------------------------------------------
def chat_node(state: State, config: RunnableConfig) -> State:
    """聊天节点：根据运行时配置调用大模型
    
    参数说明：
    - state: 当前流程状态（自动注入）
    - config: 运行时配置（需通过 invoke 方法显式传入）
    
    RuntimeConfig 结构要求：
    {
        "configurable": {
            "type": "节点名称",       # 对应 Action.type
            "payload": {            # 对应 Action.payload
                "input": "用户输入"  
            }
        }
    }
    """
    # 从运行时配置中提取关键参数
    action = config["configurable"]  # 获取 Action 字典
    node_name = action["type"]       # 当前要处理的节点名称
    user_input = action["payload"]["input"]  # 用户输入内容
    
    # 调用大模型并更新状态
    return {
        **state,  # 保留历史状态
        "result": {
            **state.get("result", {}),  # 合并历史结果
            node_name: llm.invoke(user_input)  # 记录当前节点输出
        }
    }

# ------------------------------------------
# 流程构建与执行
# ------------------------------------------
# 定义运行时 Action 示例
action = {
    "type": "chat_bot",  # 对应节点名称
    "payload": {
        "input": "长沙在哪里"  # 节点处理时需要的输入
    }
}

# 初始化状态流程图（绑定状态类型和配置校验模式）
graph_builder = StateGraph(
    State,  # 状态类型
    config_schema=Action  # 强制校验传入的配置是否符合 Action 类型定义
)

# 注册节点（名称需与 Action.type 匹配）
graph_builder.add_node("chat_node", chat_node)

# 设置单节点流程（入口即出口）
graph_builder.set_entry_point("chat_node")
graph_builder.set_finish_point("chat_node")

# 编译可执行图
compile_graph = graph_builder.compile()

# 执行流程图（传入初始状态和运行时配置）
res = compile_graph.invoke(
    initial_state,  # 初始状态
    {"configurable": action}  # 关键：将 Action 包装为 LangGraph 要求的配置格式
)

print(res)  # 输出：{'result': {'chat_bot': '长沙是湖南省的省会城市，位于...'}}
```


## 字段reducer版本的langgraph

```python
class State(TypedDict):
    a: str
    result: Annotated[list[str], custom_reducer]

def custom_reducer(a, b):
  # a的类型就是 Annotated[list[str], custom_reducer] 上面指定的list , 且不需要显式的指定, 自动生成空 [] 作为初始值
  # b的类型list里的str

  pass

def node(state):
  return {
    "a": state["a"], # 这里也可以不用返回a, 他会自动和之前的state浅合并 
    "result": "1111" # 这里也不再用返回list了, 应该返回字符串会自动合并
  }
```



```python
from langchain_community.llms.tongyi import Tongyi
from typing_extensions import TypedDict, Annotated
from langgraph.graph import StateGraph

# 初始化通义千问大模型
llm = Tongyi(api_key="sk-d349b80d80bf4e77a2de968c868947bc", model="qwen-max")


# --------------------------
# 核心概念：Reducer 函数
# --------------------------
def result_reducer(result_list: list[str], node_result: str | None):
    """Reducer 函数：用于合并节点的输出到状态中的 `result` 字段
    
    参数：
    - result_list: 当前累积的结果列表（历史数据）
    - node_result: 当前节点返回的新结果
    
    逻辑：
    - 如果节点返回有效值（非 None），则追加到结果列表
    - 如果返回 None，则保持原列表不变
    """
    if node_result is None:
        return result_list
    
    return result_list + [node_result]


# --------------------------
# 状态（State）定义
# --------------------------
class State(TypedDict):
    """状态容器：定义整个流程图的状态结构
    
    字段注解说明：
    - `Annotated[list[str], result_reducer]` 表示：
      1. 字段类型为字符串列表 (`list[str]`)
      2. 使用 `result_reducer` 函数合并多个节点对该字段的修改
    """
    input: str
    result: Annotated[list[str], result_reducer]


# 初始化状态流程图
graph_builder = StateGraph(State)


# --------------------------
# 节点（Node）定义
# --------------------------
def chat_node(state: State):
    """聊天节点：调用大模型生成回复
    
    返回值规则：
    - 必须返回与 `State` 字段匹配的字典
    - 这里的 `result` 字段类型必须与 `State` 定义的 `list[str]` 兼容
    - 实际返回单个字符串，通过 reducer 自动转换为列表追加操作
    """
    input = state.get("input")

    return {
        "result": llm.invoke(input)  # ⚡ 关键点：返回的字符串会被 reducer 处理为列表追加
    }


# --------------------------
# 图构建与执行
# --------------------------
# 添加节点到流程图
graph_builder.add_node("chat_node", chat_node)

# 设置入口和出口节点
graph_builder.set_entry_point("chat_node")
graph_builder.set_finish_point("chat_node")

# 编译可执行图
compile_graph = graph_builder.compile()

# 执行流程图
res = compile_graph.invoke({
    "input": "长沙天气怎么样"
})

print(res)  # 输出最终状态


```