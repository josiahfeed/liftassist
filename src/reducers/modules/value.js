import { AsyncStorage} from 'react-native'
import { TOTAL_UPDATE } from '../../types'

const initialState = { 
    input: '279',
    percent1: '0.50',
    percent2: '0.65',
    percent3: '0.70',
    percent4: '0.80',
    percent5: '0.90'
};

const value = (state = initialState, action) => {
    switch(action.type)
    {
        case TOTAL_UPDATE:
            if (action.input) {
                AsyncStorage.setItem('input', action.input)
            }
            return {
                ...state,
                input: action.input
            }
        default:
            return state
    }
}

export default value