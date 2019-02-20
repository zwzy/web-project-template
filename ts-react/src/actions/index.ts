import * as constants from '../constants'

export interface IUpdateConfig {
    type: constants.UPDATE_CONFIG;
}

export type ConfigAction = IUpdateConfig 

export function updateConfig(): IUpdateConfig {
    return {
        type: constants.UPDATE_CONFIG,
    }
}