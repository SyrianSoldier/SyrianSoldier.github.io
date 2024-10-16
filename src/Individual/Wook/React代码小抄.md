# React代码小抄


## 初始化数据

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
export type ModalFormFields = {}

// 弹窗表单的查询参数(可能需要对搜索表单的字段进行额外的转换和处理)
export type AddModalFormQueryParams = ModalFormFields
export type EditModalFormQueryParams = API.模块.edit_模块['data']

// 新增/编辑弹框表单相关状态
const [isEdit, setIsEdit] = useState(false)
const [addModalForm] = Form.useForm()
const [editModalForm] = Form.useForm()
const [addModalFormInitialValues, setAddModalFormInitialValues] =
  useState<AddModalFormQueryParams>({})

const [editModalFormInitialValues, setEditModalFormInitialValues] =
  useState<EditModalFormQueryParams>({})

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
  async function onEditModalFormSave(values: any) {
    // try {
    //   await add({ ...values })
    //   await getList()
    // } catch (e) {
    //   console.log(e)
    // }
  }

  async function onAddModalFormSave(values: any) {
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