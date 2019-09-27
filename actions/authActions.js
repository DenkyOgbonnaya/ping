import {register} from "./socket";

export const login = (nickname, dispatch) => {
    register(nickname, (err, data) => {
            
        if(err !== null){
            dispatch({
                type: 'LOGIN',
                payload: {data, isAuthenticated: true}
            });
                
        }else{
            dispatch({
                type: 'ERROR',
                err: data
            })
        }
    })
        

}
export const toggleIsLogin = (dispatch) => {
    dispatch({
        type: 'TOGGLE_ISLOGIN'
    })
}