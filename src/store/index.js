import { createStore, combineReducers } from 'redux'
import { AsyncStorage } from 'react-native'
import load from '../reducers/modules/load'
import value from '../reducers/modules/value'

const rootReducer = combineReducers({
    load,
    value
})

export const store = createStore(rootReducer);