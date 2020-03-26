import { ycasToken } from "../config/index";

// 从sessionStorage中取token
export const getTokenInSessionStorage = () => {
   return sessionStorage.getItem(ycasToken);
};

// 存token
export const setTokenToSessionStorage = (token) => {
    sessionStorage.setItem(ycasToken, token)
}

