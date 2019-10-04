import useConnectionContext from "../components/lib/useConnectionContext";

const connectionActions = () => {
    const{dispatch} = useConnectionContext();

    const handleReconnecting = () => {
        dispatch ({
            type: 'RECONNECTING',
            message: 'Reconnecting...'
        })

    }
    const handleReconnect = () => {
        dispatch ({
            type: 'RECONNECT',
            message:'Connected'
        })
    }
    const handleReconnectError = () => {
        dispatch ({
            type: 'RECONNECT_ERROR',
            message: 'Waiting for network...'
        })
    }
    return {
        handleReconnecting,
        handleReconnect,
        handleReconnectError
    }
}

export default connectionActions;