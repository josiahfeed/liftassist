import { createStore, combineReducers } from 'redux'
import { AsyncStorage } from 'react-native'
import load from '../reducers/modules/load'
import time from '../reducers/modules/time'
import value from '../reducers/modules/value'

const rootReducer = combineReducers({
    load,
    time,
    value
})

export const store = createStore(rootReducer);