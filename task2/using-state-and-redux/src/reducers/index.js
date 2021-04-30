import changeTextReducer from "./changeText";
import { combineReducers } from "redux";
const allReducers = combineReducers({
    changeText: changeTextReducer
})

export default allReducers