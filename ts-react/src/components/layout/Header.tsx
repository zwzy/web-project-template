import * as React from 'react';
import './Header.css'

import { IStoreState } from '../../types/index';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../../actions';
export interface IProps {
  theme?: string,
  updateConfig?: () => void 
}
function Header({theme = 'light' , updateConfig}: IProps) {
  return (
    <div className={`header ${theme}`}>
      这是一个Header文件 {theme}
      <button onClick={updateConfig}>light</button>
      <button onClick={updateConfig}>dark</button>
    </div>
  )
}
export function mapStateToProps({config} : IStoreState) {
  console.log(8989, config)
  return {
    config
  }
}
export function mapDispatchToProps(dispatch: Dispatch<actions.IUpdateConfig>) {
  return {
    updateConfig: () => dispatch(actions.updateConfig()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header); 
