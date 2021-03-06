import { SAVE_MENU, DELE_MENU, CHANGE_MENU, COLLAPSE_SIDER } from './type';

function makeActionCreator(type, ...argNames) {
  return function(payload) {
    const action = { type, payload };
    return action;
  };
}

export const saveMenu = makeActionCreator(SAVE_MENU);
export const deleMenu = makeActionCreator(DELE_MENU);
export const changeMenu = makeActionCreator(CHANGE_MENU);


export const collapseSider = makeActionCreator(COLLAPSE_SIDER);
