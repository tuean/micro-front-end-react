import { get } from "../util/axios";

// 获取当前用户的菜单信息
// export const getMenuInfo = () => get("/")
export const getMenuInfo = () => {
    return new Promise((resolve, reject) => {
        let mockData = {
            code: 0,
            data: [
                {
                    menuId: 1,
                    menuName: "运营平台",
                    menuType: 1,
                    pageTypeCode: 2,
                    iconUrl: "https://iconfont.alicdn.com/t/1578362294349.png@200h_200w.jpg",
                    children: [
                        {
                            menuId: 2,
                            menuName: "开户",
                            menuType: 2,
                            pageTypeCode: 2,
                            url: "http://www.baidu.com",
                        },
                        {
                            menuId: 3,
                            menuName: "销户",
                            menuType: 2,
                            pageTypeCode: 2,
                            url: "http://www.baidu.com",
                        },
                        {
                            menuId: 4,
                            menuName: "销户2",
                            menuType: 2,
                            pageTypeCode: 2,
                            url: "http://www.baidu.com",
                        },
                        {
                            menuId: 5,
                            menuName: "销户",
                            menuType: 2,
                            pageTypeCode: 2,
                            url: "http://www.baidu.com",
                        }
                    ]
                }
            ]
        }
        resolve(mockData)
    })
}