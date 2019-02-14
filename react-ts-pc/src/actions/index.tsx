import * as constants from '../constants'
console.log("constants", constants)
// 两个接口
export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}
export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}
// 两个接口中的一个  这个是用来规定action的类型的  好像可以将这两个定义的接口合成起来。
// 步骤：
// 1、在reducers/index.tsx中import IncrementEnthusiasm
// 2、action: IncrementEnthusiasm | DecrementEnthusiasm;
// 3、这个type应该是一个关键字
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;
// 统一管理，当然也可以在用actions.INCREMENT_ENTHUSIASM
// 返回值是IncrementEnthusiasm类型
export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
      type: constants.INCREMENT_ENTHUSIASM
  }
}

// 返回值是DecrementEnthusiasm类型
export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
      type: constants.DECREMENT_ENTHUSIASM
  }
}
