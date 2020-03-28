import { combineReducers } from 'redux';
import { SAVE_MENU, DELE_MENU } from './type';

const initState = {
  menuInfo: []
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
      if (!isAdd) {
        result.push(curMenuInfo);
      }
      return { ...state, menuInfo: result };
    case DELE_MENU:
      return {
        ...state,
        menuInfo: state.menuInfo.filter(
          item => +item.menuId !== +action.payload
        )
      };
    default:
      return state;
  }
};

export default combineReducers({
  mainReducer
});
