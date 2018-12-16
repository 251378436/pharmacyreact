const defaultReducer = (state = {
    isShowLoader: false,
}, action) => {
    switch(action.type) {
        case "showLoader":
            state = {
                ...state,
                isShowLoader: true
            };
            break;
        case "hideLoader":
            state = {
                ...state,
                isShowLoader: false
            };
            break;
        default:
            break;
    }
    return state;
};
export default defaultReducer;