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
          iconUrl:
            "https://iconfont.alicdn.com/t/1578362294349.png@200h_200w.jpg",
          children: [
            {
              menuId: 2,
              menuName: "附加信息",
              menuType: 2,
              pageTypeCode: 2,
              url: "http://www.baidu.com",
              additional: [
                {
                  label: "工号",
                  value: "5008"
                },
                {
                  label: "分机号",
                  value: "200"
                }
              ]
            },
            {
              menuId: 3,
              menuName: "销户3",
              menuType: 2,
              pageTypeCode: 2,
              url: "http://www.baidu.com"
            },
            {
              menuId: 4,
              menuName: "销户4",
              menuType: 2,
              pageTypeCode: 2,
              url: "http://www.baidu.com"
            },
            {
              menuId: 5,
              menuName: "销户5",
              menuType: 2,
              pageTypeCode: 2,
              url: "http://www.baidu.com"
            },
            {
              menuId: 6,
              menuName: "销户6",
              menuType: 2,
              pageTypeCode: 2,
              url: "http://www.baidu.com"
            },
            {
              menuId: 7,
              menuName: "销户7",
              menuType: 2,
              pageTypeCode: 2,
              url: "http://www.baidu.com"
            },
            {
              menuId: 8,
              menuName: "销户8",
              menuType: 2,
              pageTypeCode: 2,
              url: "http://www.baidu.com"
            },
            {
              menuId: 9,
              menuName: "销户9",
              menuType: 2,
              pageTypeCode: 2,
              url: "http://www.baidu.com"
            }
          ]
        }
      ]
    };
    resolve(mockData);
  });
};
