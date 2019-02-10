import { AsyncStorage} from 'react-native'
import { TOTAL_UPDATE } from '../../types'

const initialState = { 
    input: '271'
};

const value = (state = initialState, action) => {
    switch(action.type)
    {
        case TOTAL_UPDATE:
        console.log("Total Update Worked")
            if (action.input) {
                AsyncStorage.setItem('input', action.input)
            }
            return {
                ...state,
                input: action.input || state.input
            }
        default:
            return state
    }
}

export default value