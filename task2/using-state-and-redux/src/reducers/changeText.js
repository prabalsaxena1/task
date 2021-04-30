const changeTextReducer = (state = { text: "" }, action) => {
    if (action.type == "CHANGE_TEXT") {
        return {
            text: action.text
        }
    }
    return state
}

export default changeTextReducer