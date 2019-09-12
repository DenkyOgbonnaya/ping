
export const login = (credentials, dispatch) => {
    return new Promise( (resolve, reject ) => {
        dispatch({
            type: 'LOGIN',
            payload: {credentials, isAuthenticated: true}
        });
        resolve(true);
    })

}