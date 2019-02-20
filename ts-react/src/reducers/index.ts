import { ConfigAction } from '../actions';
import { IStoreState } from '../types/index';

import { UPDATE_CONFIG } from '../constants/index';

export function config(state: IStoreState, action: ConfigAction): IStoreState {
  switch (action.type) {
    case UPDATE_CONFIG:
      return { ...state, ...{theme: 'red'} };
  }
  return state;
}