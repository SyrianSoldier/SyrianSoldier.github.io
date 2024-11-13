# React代码小抄

## 初始化数据

### useInitialStateLoader

```tsx
import { useEffect, useState } from 'react'

export type InitializersType<T extends Record<string, any>> = {
  [K in keyof T]: () => Promise<T[K]>
}

function useInitialStateLoader<T extends Record<string, any>>(
  initialState: T,
  initializers: InitializersType<T>
) {
  const [state, setState] = useState<T>(initialState)
  const [loading, setLoading] = useState(true)

  const initializeStates = async () => {
    setLoading(true)
    const newState: Partial<T> = {}

    try {
      await Promise.all(
        Object.entries(initializers).map(async ([key, initializer]) => {
          try {
            newState[key as keyof T] = await initializer()
          } catch (error) {
            console.error(`初始化 ${key} 时出错:`, error)
          }
        })
      )

      setState(prevState => ({ ...prevState, ...newState }))
    } catch (error) {
      console.error('初始化状态时出错:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    initializeStates()
  }, [])

  return [state, setState, loading] as const
}
export default useInitialStateLoader

```

### 使用初始化数据
```tsx
import useInitialStateLoader, {
  InitializersType,
} from '@/hooks/useInitialStateLoader'

// 初始化页面时, 需要从后端拉取的数据
type InitialState = {
  userStatusOptions: SelectProps['options']
}

const useUserInitialStateLoader = () => {
  const initialState: InitialState = {
    userStatusOptions: [],
  }

  const initializers: InitializersType<InitialState> = {
    userStatusOptions: async () => {
      const { data } = await get_user_status_dict()
      return data.map((item: any) => ({
        label: item.dictLabel,
        value: item.dictValue,
      }))
    },
  }

  return useInitialStateLoader<InitialState>(initialState, initializers)


  // state
  // 初始化页面需要从后端拉取的状态
  const [loaderData] = useUserInitialStateLoader()
}
```

## JSON Form

### 源代码

```tsx
import {
  FormItemProps,
  FormProps,
  InputProps,
  SelectProps,
  TimePickerProps,
  DatePickerProps,
  TimePicker,
  DatePicker,
  Input,
  Select,
  Form,
  InputNumberProps,
  InputNumber,
  Radio,
  Checkbox,
} from 'antd'
import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { TreeSelect, TreeSelectProps } from 'antd'

type RenderFunction = (...args: any[]) => ReactNode

type TimeRangeProps = ComponentPropsWithoutRef<typeof TimePicker.RangePicker>
type DateRangeProps = ComponentPropsWithoutRef<typeof DatePicker.RangePicker>
type RadioGroupProps = ComponentPropsWithoutRef<typeof Radio.Group>
type CheckboxGroupProps = ComponentPropsWithoutRef<typeof Checkbox.Group>
type PasswordProps = ComponentPropsWithoutRef<typeof Input.Password>
type TextAreaProps = ComponentPropsWithoutRef<typeof Input.TextArea>

export type FormItemType =
  | 'text' // 文本框
  | 'select' // 下拉框
  | 'time' // 时间选择框
  | 'timeRange' // 时间范围选择框
  | 'date' // 日期选择框
  | 'dateRange' // 日期范围选择框
  | 'number' // 数字输入框
  | 'radioGroup' // 互斥单选框
  | 'checkboxGroup' // 多选框组
  | 'textarea' // 文本域
  | 'treeSelect' // 树选择
  | 'password' //密码框

// type字段和FormItem的映射表
export const FormItemMap: Record<FormItemType, FC> = {
  text: (props: InputProps) => <Input {...props} />,
  select: (props: SelectProps) => <Select {...props} />,
  time: (props: TimePickerProps) => <TimePicker {...props} />,
  timeRange: (props: TimeRangeProps) => <TimePicker.RangePicker {...props} />,
  date: (props: DatePickerProps) => <DatePicker {...props} />,
  dateRange: (props: DateRangeProps) => <DatePicker.RangePicker {...props} />,
  number: (props: InputNumberProps) => <InputNumber {...props} />,
  radioGroup: (props: RadioGroupProps) => <Radio.Group {...props} />,
  checkboxGroup: (props: CheckboxGroupProps) => <Checkbox.Group {...props} />,
  textarea: (props: TextAreaProps) => <Input.TextArea {...props} />,
  treeSelect: (props: TreeSelectProps) => <TreeSelect {...props} />,
  password: (props: PasswordProps) => <Input.Password {...props} />,
}

export interface JsonFormItem extends FormItemProps {
  type?: FormItemType
  render?: RenderFunction
  inputProps?:
    | InputProps
    | SelectProps
    | TimePickerProps
    | TimeRangeProps
    | DatePickerProps
    | DateRangeProps
    | InputNumberProps
    | RadioGroupProps
    | CheckboxGroupProps
    | TextAreaProps
    | TreeSelectProps
    | PasswordProps
}

export type JsonFormColumnsType<T> = ({
  name?: keyof T
  visible?: boolean
} & Omit<JsonFormItem, 'name'>)[]

export interface JsonFormProps<T> extends Omit<FormProps, 'children'> {
  columns: JsonFormColumnsType<T>
  children?: ReactNode
}

const JsonForm = <T = Record<string, any>,>({
  columns,
  children, //children定义的FormItem默认插入到Form最后
  ...AntdFormProps
}: JsonFormProps<T>) => {
  return (
    <Form size={'small'} {...AntdFormProps}>
      {/* JSON渲染的FormItem */}
      {columns.map((item, index) => {
        const {
          type = 'text',
          render,
          inputProps,
          visible = true,
          ...AntdFormItemProps
        } = item
        let component: RenderFunction | ReactNode

        if (!visible) return null

        if (render) {
          // [antd: Form.Item]  `Form.Item` with a render function must have either `shouldUpdate` or `dependencies`.
          if (
            AntdFormItemProps.dependencies ||
            AntdFormItemProps.shouldUpdate
          ) {
            component = render
          } else {
            component = render()
          }
        } else if (type) {
          component = FormItemMap[type](inputProps || {})
        }

        return (
          // @ts-ignore TODO: 待解决类型冲突
          <Form.Item key={item.name || index} {...AntdFormItemProps}>
            {component}
          </Form.Item>
        )
      })}

      {/* 额外的FromItem */}
      {children}
    </Form>
  )
}

export default JsonForm

```

### JSON Form支持的表单项类型

`FormItemType` 用于定义表单项类型，不同类型会渲染不同的 Ant Design 组件。以下是可用的表单项类型及其描述：

| 类型      | 值                 | 描述      | 对应的组件                    |
| ------- | ----------------- | ------- | ------------------------ |
| 文本框     | `'text'`          | 普通文本输入框 | `Input`                  |
| 下拉框     | `'select'`        | 下拉选择框   | `Select`                 |
| 时间选择框   | `'time'`          | 时间选择框   | `TimePicker`             |
| 时间范围选择框 | `'timeRange'`     | 时间范围选择框 | `TimePicker.RangePicker` |
| 日期选择框   | `'date'`          | 日期选择框   | `DatePicker`             |
| 日期范围选择框 | `'dateRange'`     | 日期范围选择框 | `DatePicker.RangePicker` |
| 数字输入框   | `'number'`        | 数字输入框   | `InputNumber`            |
| 单选框组    | `'radioGroup'`    | 互斥单选框   | `Radio.Group`            |
| 多选框组    | `'checkboxGroup'` | 多选框组    | `Checkbox.Group`         |
| 文本域     | `'textarea'`      | 多行文本输入  | `Input.TextArea`         |
| 树选择     | `'treeSelect'`    | 树形结构选择  | `TreeSelect`             |
| 密码框     | `'password'`      | 密码输入框   | `Input.Password`         |

### JSON Form基础示例

```jsx
import { Form } from "antd";
import JsonForm, { JsonFormColumnsType } from '@/components/JsonForm'

type JSONFormFields = {
  username: string
  password: string

  [other_fileds: string]: any
}

const formColumns:JsonFormColumnsType<JSONFormFields> = [
  {
    name: "username",
    type: "text",
    label: "用户名",
    rules: [{ required: true, message: '' }],
    inputProps: { placeholder: "请输入用户名" },
  },
  {
    name: "password",
    type: "password",
    label: "密码",
    rules: [{ required: true, message: '' }], 
    inputProps: { placeholder: "请输入密码" },
  },
  {
    name: "birthdate",
    type: "date",
    rules: [{ required: true, message: '' }],
    label: "出生日期",
  },
  {
    name: "appointment",
    type: "time",
    rules: [{ required: true, message: '' }],
    label: "预约时间",
  },
  {
    name: "meetingRange",
    type: "timeRange",
    rules: [{ required: true, message: '' }],
    label: "会议时间范围",
  },
  {
    name: "eventDateRange",
    type: "dateRange",
    rules: [{ required: true, message: '' }],
    label: "事件日期范围",
  },
  {
    name: "age",
    type: "number",
    rules: [{ required: true, message: '' }],
    label: "年龄",
  },
  {
    name: "gender",
    type: "radioGroup",
    label: "性别",
    rules: [{ required: true, message: '' }],
    inputProps: {
      options: [
        { label: "男", value: "M" },
        { label: "女", value: "F" },
      ],
    },
  },
  {
    name: "hobbies",
    type: "checkboxGroup",
    label: "爱好",
    rules: [{ required: true, message: '' }],
    inputProps: {
      options: [
        { label: "阅读", value: "reading" },
        { label: "运动", value: "sports" },
        { label: "音乐", value: "music" },
      ],
    },
  },
  {
    name: "description",
    type: "textarea",
    label: "自我描述",
    rules: [{ required: true, message: '' }],
    inputProps: { placeholder: "请输入自我描述" },
  },
  {
    name: "city",
    type: "select",
    label: "城市",
    rules: [{ required: true, message: '' }],
    inputProps: {
      options: [
        { label: "北京", value: "beijing" },
        { label: "上海", value: "shanghai" },
      ],
    },
  },
  
  {
    name: "category",
    type: "treeSelect",
    label: "分类",
    rules: [{ required: true, message: '' }],
    inputProps: {
      treeData: [
        {
          title: "分类 1",
          value: "cat1",
          children: [
            {
              title: "子分类 1-1",
              value: "cat1-1",
            },
          ],
        },
        {
          title: "分类 2",
          value: "cat2",
        },
      ],
    },
  },
]


const DemoForm = () => (
  <JsonForm columns={formColumns} onFinish={(values) => console.log(values)}>
    <Form.Item label="附加内容">
      <Input placeholder="额外的表单项" />
    </Form.Item>
  </JsonForm>
);
```

## 搜索表单

```tsx
import SearchForm, { SearchFormColumnsType } from '@/components/SearchForm'

// 搜索表单字段
export type SearchFields = {}

// 搜索表单相关状态
const [searchForm] = Form.useForm()
const [total, setTotal] = useState(0)
const [pagination, setPagination] = useState<PaginationObj>({
    pageNum: 1,
    pageSize: 10,
})



// 搜索表单配置字段
const searchColumns: SearchFormColumnsType<SearchFields> = [
  // 文本框 + placeholder
  {
    type: 'text',
    name: 'userName',
    label: '用户名称',
    inputProps: {
      placeholder: '请输入用户名称',
    },
  },
  // 下拉框
  {
    type: 'select',
    name: 'status',
    label: '状态',
    inputProps: {
      options: loaderData.userStatusOptions,
      placeholder: '请选择用户状态',
    },
  },
  // 日期范围选择器
  {
    type: 'dateRange',
    name: 'createTime',
    label: '创建时间',
    inputProps: {
      format: 'YYYY-MM-DD',
      placeholder: ['开始日期', '结束日期'],
    },
  },
]
  // 搜索
  const onSearch = () => {
    setPagination(prevState => ({ ...prevState, pageNum: 1 }))
  }

  // 重置
  const onReset = () => {
    searchForm.resetFields()
    onSearch()
  }
  
{/* 搜索表单 */}
  <SearchForm
    layout={'inline'}
    form={searchForm}
    onSearch={onSearch}
    onResetSearch={onReset}
    columns={searchColumns}
  />
```

## 表格

```tsx
// 表格字段
type TableFields = API.模块.get_list['result']["data"]

// 表格相关状态
const [listLoading, setListLoading] = useState(false)
const [list, setList] = useState<TableFields>([])
const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]) // 表格选中行的id数组
const [pagination, setPagination] = useState<PaginationObj>({
    pageNum: 1,
    pageSize: 10,
})
const [total, setTotal] = useState(0)

// Effects
useEffect(() => {
  getList()
}, [pagination])

// 表格配置字段
const tableColumns: TableColumnsType<TableFields> = [
  // 正常字段
  {
    title: '用户昵称',
    dataIndex: 'nickName',
    key: 'nickName',
  },
  // 自定义render
  {
    title: '部门',
    dataIndex: 'deptName',
    key: 'deptName',
    render: (_, record) => record?.dept?.deptName,
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: (_, record) => {
      if (record.userId !== 1) {
        return (
          <Space size={2}>
            <AdminButton
              name={'edit'}
              type={'link'}
              onClick={() => {
                // 1. 根据编辑的id, 查询详情接口, 并设置到编辑表单中
                // TODO...
                // 2. 设置edit状态
                setIsEdit(true)
                // 3. 设置编辑默认值
                setEditModalFormInitialValues({})
              }}
            />
            <AdminButton
              name={'delete'}
              type={'link'}
              onClick={() => {
                Modal.confirm({
                  title: '系统确认',
                  icon: <ExclamationCircleOutlined />,
                  content: `是否删除数据编号为${{/* TODO: id */}}的数据项`,
                  okText: '确认',
                  cancelText: '取消',
                  onOk: () => onDelete({/* TODO: 传入id */}),
                })
              }}
            />
            <AdminButton name={'more'} type={'link'} />
          </Space>
        )
      }
    },
  },
]

// 获取列表数据
  const getList = async () => {
    try {
      setListLoading(true)
      const searchParams = transformSearchParams(searchForm.getFieldsValue())
      const { rows, total } = await get_list({
        ...searchParams,
        ...pagination,
      })

      setList(
        rows.map(item => ({
          ...item,
          key: user.userId,
        }))
      )
      setTotal(total)
    } catch (e) {
      console.log(e)
    } finally {
      setListLoading(false)
    }
  }

  // 将搜索表单数据转换为列表查询接口的数据(如果搜索表单需要数据转换, 在这里转换)
  const transformSearchParams = (values: SearchFields): SearchParams => {
    const queryParams = {} as SearchParams

    Object.entries(values).forEach(([key, value]) => {
    if (typeof value === 'string') {
      value = value.trim()
    }
  
    queryParams[key as keyof SearchParams] = value as any

  })
  
    return queryParams
  }



  // 删除
  const onDelete = async (id: string | number) => {
  try {
    await del(id)
    await getList()
    message.success('删除成功')
  } catch (e) {
    console.log(e)
  }
  }

  {/* 表格 */}
  <Table
    size={'small'}
    columns={tableColumns}
    dataSource={list}
    loading={listLoading}
    pagination={{
      total,
      current: pagination.pageNum,
      pageSize: pagination.pageSize,
      onChange: (pageNum, pageSize) => {
        setPagination({ pageNum, pageSize })
      },
    }}
    rowSelection={{
      selectedRowKeys,
      onChange: newSelectedRowKeys => {
        setSelectedRowKeys(newSelectedRowKeys)
      },
    }}
  />

```

## 弹框

```tsx
// 新增和编辑弹窗表单字段
export type ModalFormFields = Partial<API.模块.get_模块_by_id["result"]["data"]>


// 新增/编辑弹框表单相关状态
const [isEdit, setIsEdit] = useState(false)
const [addModalForm] = Form.useForm()
const [editModalForm] = Form.useForm()
const [addModalFormInitialValues, setAddModalFormInitialValues] =
  useState<ModalFormFields>({})

const [editModalFormInitialValues, setEditModalFormInitialValues] =
  useState<ModalFormFields>({})

useUpdateEffect(() => {
    if (isEdit) {
      editModalForm.setFieldsValue(editModalFormInitialValues)
      NiceModal.show('模块-edit-modal')
    } else {
      addModalForm.setFieldsValue(addModalFormInitialValues)
      NiceModal.show('模块-add-modal')
    }
  }, [isEdit, addModalFormInitialValues, editModalFormInitialValues])

  // 弹框表单配置字段
  const modalFormColumns: ModalFormColumns<ModalFormFields> = [
    // 文本框 + rules + placeholder + style
    {
      type: 'text',
      name: 'nickName',
      label: '用户昵称',
      style: { width: '45%', marginRight: '5%', display: 'inline-block' },
      rules: [{ required: true, message: '请输入用户昵称' }],
      inputProps: {
        placeholder: '请输入用户昵称',
      },
    },
    // 树选择器 + placeholder + style + treeData + fieldNames
    {
      type: 'treeSelect',
      name: 'deptId',
      label: '归属部门',
      style: { width: '45%', display: 'inline-block' },
      inputProps: {
        placeholder: '请输入归属部门',
        treeData: loaderData.deptTree,
        fieldNames: { label: 'label', value: 'id' },
      },
    },
    // visible + 多个rules
    {
      type: 'text',
      name: 'userName',
      label: '用户名称',
      visible: !isEdit,
      rules: [
        { required: true, message: '请输入用户名称' },
        {
          min: 3,
          max: 20,
          message: '用户名长度应在 3 到 20 个字符之间',
        },
        {
          pattern: /^[a-zA-Z0-9_]+$/,
          message: '用户名只能包含字母、数字和下划线',
        },
      ],
    },
    // 一个字段依赖另一个字段显示和隐藏(被依赖的字段完全受控)
    {
      type: 'text',
      name: 'userName',
      label: '用户名称',
      visible: !currentData, // currentData是完全受控的被依赖的字段
    },
    // 当前表单项的rules依赖另一个字段rules生成
    {
      type: "text",
      name: "password2",
      label: "确认密码",
      dependencies: ["password1"],
      rules: [
        {
          required: true,
        },
        {
          validator(_, value) {
            if (form.getFieldValue("password1") === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("密码不匹配"));
          },
        },
      ],
    },
    // 表单联动: 当前表单项依赖另一个表单项的值动态生成
    {
      noStyle: true,
      dependencies: ["password1", "password2"],
      render: () => {
        if (
          form.getFieldValue("password1") === form.getFieldValue("password2")
        ) {
          return (
            <Form.Item label="用户信息">
              <Input />
            </Form.Item>
          );
        }
      },
    },
  ]

  

  // 新增表单保存
  async function onEditModalFormSave(values: ModalFormFields) {
    // try {
    //   await add({ ...values })
    //   await getList()
    // } catch (e) {
    //   console.log(e)
    // }
  }

  async function onAddModalFormSave(values: ModalFormFields) {
    // try {
    //   await edit({
    //     ...values,
    //   })
    //   await getList()
    // } catch (e) {
    //   console.log(e)
    // }
  }

  
  {/* 弹窗表单 */}
  <ModalForm
    id="add-modal"
    title="新增用户"
    form={addModalForm}
    columns={modalFormColumns}
    initialValues={addModalFormInitialValues}
    onSave={onAddModalFormSave}
  />

  <ModalForm
    id="edit-modal"
    title="编辑用户"
    form={editModalForm}
    columns={modalFormColumns}
    initialValues={editModalFormInitialValues}
    onSave={onEditModalFormSave}
  />
```

## 按钮栏

```tsx

  // 搜索按钮栏配置字段
  const buttonColumns: ButtonColumnsType = [
    {
      name: 'add',
      onClick: () => {
        setIsEdit(false)
        setAddModalFormInitialValues(prevState => ({...prevState}))
      },
    },
    {
      name: 'delete',
      disabled: selectedRowKeys.length === 0,
      onClick: () => {
        Modal.confirm({
          title: '系统确认',
          icon: <ExclamationCircleOutlined />,
          content: `是否删除数据编号为${/* TODO: id */}的数据项`,
          okText: '确认',
          cancelText: '取消',
          onOk: async () => {
            onDelete(/* TODO: id */).then(() =>
              setSelectedRowKeys([]) // 重置选择的行
            )
          },
        })
      },
    },
    {
      name: 'import',
      onClick: () => {},
    },
    {
      name: 'export',
      onClick: () => {},
    },
  ]
      

{/* 按钮栏 */}
<ButtonList columns={buttonColumns} />
```