import { AsyncStorage} from 'react-native'
import { TIME_ARRAY, TIME_UPDATE, TIME_SEC, TIME_MIN } from '../../types'

const initialState = { 
    total: 180,
    update: null,
    sec: 0,
    min: 0,
    time: {
        sec: 0,
        min: 0
    }
};

const time = (state = initialState, action) => {
    switch(action.type)
    {
        case TIME_ARRAY:
            if (action.time) {
                AsyncStorage.setItem('time', action.time);
            }
            return {
                ...state,
                time: action.time || state.time
            }
        case TIME_UPDATE:
            if (action.update) {
                AsyncStorage.setItem('update', action.update);
            }
            return {
                ...state,
                update: action.update || state.update
            }
        default:
            return state
    }
}

export default time