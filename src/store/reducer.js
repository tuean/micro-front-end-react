import { combineReducers } from "redux";
import { SAVE_MENU, DELE_MENU, CHANGE_MENU } from "./type";
import { getAdditionalUserInfo } from '../util/menuUtil';

const initState = {
  menuInfo: [],
  activeKey: "",
  additional_user_info: []
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
      let addInfo = getAdditionalUserInfo(result, activeKey)

      return { ...state, menuInfo: result, activeKey: activeKey, additional_user_info: addInfo };
    case DELE_MENU:
      let newMenuInfo = state.menuInfo.filter(
        item => +item.menuId !== +action.payload
      )
      let nextActiveKey = newMenuInfo == null || newMenuInfo.length < 1 ? '' : newMenuInfo[newMenuInfo.length - 1].menuId;
      return {
        ...state,
        menuInfo : newMenuInfo,
        activeKey: nextActiveKey
      };
    case CHANGE_MENU:
      let newActiveKey = action.payload;
      let addInfo2 = getAdditionalUserInfo(state.menuInfo, newActiveKey)
      return {
        ...state,
        activeKey: newActiveKey,
        additional_user_info: addInfo2,
      };
    default:
      return state;
  }
};

export default combineReducers({
  mainReducer
});
