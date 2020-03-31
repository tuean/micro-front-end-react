import { combineReducers } from "redux";
import { SAVE_MENU, DELE_MENU, CHANGE_MENU, COLLAPSE_SIDER } from "./type";
import { getAdditionalUserInfo } from "../util/menuUtil";

const initState = {
  menuInfo: [],
  activeKey: "",
  additional_user_info: [],
  sider_collapesed: false
};

const mainReducer = function(state = initState, action) {
  switch (action.type) {
    case SAVE_MENU:
      const preMenuInfo = state.menuInfo;
      const curMenuInfo = action.payload;
      const isAdd = preMenuInfo.find(
        item => item.menuId === curMenuInfo.menuId
      );
      const result = preMenuInfo;
      let activeKey = curMenuInfo.menuId;
      if (!isAdd) {
        result.push(curMenuInfo);
      }
      // console.log(activeKey);
      let addInfo = getAdditionalUserInfo(result, activeKey);

      let saveResult = {
        ...state,
        menuInfo: result,
        activeKey: activeKey,
        additional_user_info: addInfo
      };

      console.log("add menu: " + saveResult.sider_collapesed)

      return saveResult;
    case DELE_MENU:
      let newMenuInfo = state.menuInfo.filter(
        item => +item.menuId !== +action.payload
      );
      let nextActiveKey =
        newMenuInfo == null || newMenuInfo.length < 1
          ? ""
          : newMenuInfo[newMenuInfo.length - 1].menuId;
      return {
        ...state,
        menuInfo: newMenuInfo,
        activeKey: nextActiveKey
      };
    case CHANGE_MENU:
      let newActiveKey = action.payload;
      let addInfo2 = getAdditionalUserInfo(state.menuInfo, newActiveKey);

      let changeResult = {
        ...state,
        activeKey: newActiveKey,
        additional_user_info: addInfo2
      };

      console.log("change menu: " + changeResult.sider_collapesed)

      return changeResult;
    default:
      return state;
  }
};

const siderReducer = function(state = initState, action) {
  // debugger
  switch (action.type) {
    case COLLAPSE_SIDER:
      return {
        ...state,
        sider_collapesed: !state.sider_collapesed
      };
    default:
      return {
        ...state,
        sider_collapesed: state.sider_collapesed
      };
  }
};

export default combineReducers({
  mainReducer,
  siderReducer
});
