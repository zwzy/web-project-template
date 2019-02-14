import React, { Component } from 'react'
import css from './Login.module.css'
import View1 from '../containers/View1'
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/'
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
export interface State {
  isShow: boolean
}
export class Login extends Component <Props, State>{
  constructor(props: Props) {
    super(props)
    this.state = {
       isShow: false
    }
  }
  componentDidMount() {
    const {enthusiasmLevel: phone} = this.props
    if(phone) {
      this.setState({
        isShow: true
      })
    } else {
      this.setState({
        isShow: false
      })
    }
  }
  render() {
    const {name, enthusiasmLevel: phone, onDecrement, onIncrement} = this.props
    const {isShow} = this.state
    return (
      <div className={css.page}>
        <div className={css.content}>
          <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
          </div>
          <div>---- compontent组件 ----</div>
          <div className={css.title}>欢迎进入</div>
          <div>姓名：{name}</div>
          {isShow && <div className={css.phone}>联系方式：{phone}</div>}
          <div>------- fun组件 --------</div>
          <View1 name='zuowang'></View1>
        </div>
      </div>
    )
  }
}
export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}
// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Login
