import {combineReducers} from 'redux'
import itemReducer from "./item";
import uiReducer from "./ui";
import audioReducer from "./audio";
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
    item: itemReducer,
    ui: uiReducer,
    audio: audioReducer,
    form : formReducer,
})

export default rootReducer