const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            const{data, isAuthenticated} = action.payload
            return {
                ...state,
                nickname: data,
                isAuthenticated,
                isLogin: !state.isLogin
            }
        case 'ERROR':
            return {
                ...state,
                err: action.err,
                isLogin: !state.isLogin
            }
        case 'TOGGLE_ISLOGIN' :
            return {
                ...state,
                isLogin: !state.isLogin
            }
        default:
            return state;
    }
}

export default authReducer;