// action类型
import { EnthusiasmAction } from '../actions'; 
// StoreState 数据接口规定
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
const state = {
  languageName: 'TypeScript',
  enthusiasmLevel: 1,
}
export function enthusiasm(state : StoreState, action: EnthusiasmAction) : StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
    return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
  case DECREMENT_ENTHUSIASM:
    return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}