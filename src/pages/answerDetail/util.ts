// 错题记录 storage key
const RECORD_WRONG_KEY = 'record_wrong'
// 练习记录 storage key
const RECORD_PRACTICE_KEY = 'record_practice'

// 获取记录
const getRecord = (key: string): number[] => uni.getStorageSync(key) || []
// 查询是否有记录
const inclusion = (key: string, id: number) => getRecord(key).includes(id)
// 添加记录
const addRecord = (key: string, id: number): void => {
  if (!inclusion(key, id)) {
    const r = getRecord(key)
    r.push(id)
    uni.setStorage({ key, data: r })
  }
}
// 删除某条记录
const delRecord = (key: string, id: number) => {
  const r = getRecord(key)
  const i = r.indexOf(id)

  if (i != -1) {
    r.splice(i, 1)
    uni.setStorage({ key, data: r })
  }
}

export { RECORD_WRONG_KEY, RECORD_PRACTICE_KEY, getRecord, addRecord, delRecord, inclusion }