import { get } from "../util/axios";

// 用户基本信息
export const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        let mockData = {
            name: 'tuean',
            position: '无岗位信息'
        }
        resolve(mockData);
    })
}


// 用户额外信息
export const getUserAdditionalInfo = () => {
    return new Promise((resolve, reject) => {
        let mockData = [
            {
                label: '工号',
                value: '5008'
              },{
                label: '分机号',
                value: '200'
              }
        ]
        resolve(mockData)
    })
}
