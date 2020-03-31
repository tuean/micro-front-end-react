// 获取人员附加信息
export const getAdditionalUserInfo = (list, menuId) => {
    if (list == null || list.length < 1 || menuId == null) return [];
    for (let i = 0; list.length > i; i++) {
        // activeKey必须用string 而目前指定的key为number
        if (list[i].menuId + '' === menuId + '') {
            return list[i].additional == null ? [] : list[i].additional;
        }
    }
    return [];
}


// 获取第一个字符
export const getFirstChar = (source) => {
    if (source == null || source.length < 1) return '';
    return (source + ' ').substring(0, 1);
}