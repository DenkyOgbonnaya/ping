const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            const{credentials, isAuthenticated} = action.payload
            return {
                ...state,
                currentUser: credentials,
                isAuthenticated 
            }
    
        default:
            return state;
    }
}

export default authReducer;