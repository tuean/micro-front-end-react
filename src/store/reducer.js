import { combineReducers } from "redux";
import { SAVE_MENU, DELE_MENU, CHANGE_MENU } from "./type";

const initState = {
  menuInfo: [],
  activeKey: ""
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
      console.log(activeKey);
      return { ...state, menuInfo: result, activeKey: activeKey };
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
      return {
        ...state,
        activeKey: newActiveKey
      };
    default:
      return state;
  }
};

export default combineReducers({
  mainReducer
});
