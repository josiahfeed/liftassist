import { AsyncStorage} from 'react-native'
import { LA_LOAD, LA_REMOVE } from '../../types'

const initialState = { 
    marbles: 'false'
};

const load = (state = initialState, action) => {
    switch(action.type)
    {
        case LA_LOAD:
            if (action.marbles) {
                AsyncStorage.setItem('found', action.marbles);
            }
            return {
                ...state,
                marbles: action.marbles || state.marbles
            }
        case LA_REMOVE:
            if (action.marbles) {
                AsyncStorage.setItem('found', action.marbles);
            }
            return {
                ...state,
                marbles: action.marbles || state.marbles
            }
        default:
            return state
    }
}

export default load