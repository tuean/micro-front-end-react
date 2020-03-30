// 获取人员附加信息
export const getAdditionalUserInfo = (list, menuId) => {
    if (list == null || list.length < 1 || menuId == null) return [];
    for (let i = 0; list.length > i; i++) {
        if (list[i].menuId === menuId) {
            return list[i].additional == null ? [] : list[i].additional;
        }
    }
    return [];
}