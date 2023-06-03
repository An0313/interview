const setId = (dataArr, baseId) => {
    return dataArr.map((item, index) => {
        const _item = {
            id: (baseId ? baseId * 100: 0) + index + 1,
            ...item
        }
        
        if (_item.children) {
            _item.children = setId(_item.children, _item.id)
        }
        return _item
    })
}

module.exports.setId = setId