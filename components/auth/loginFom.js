const LoginForm = ({setNickname, setPassword, handleLogin, isLoading, err}) => {
   
    return (
        <div className='container' > 
            {err && <span> {err} </span>}
            <form onSubmit={handleLogin} > 
                <div className='form-group' > 
                    <label htmlFor='username'> nickname </label>
                <input name='nickname' onChange={ e => setNickname(e.target.value)} className='form-control' placeholder='chatGhost' />
            </div>
            <div className='form-group' > 
                <label htmlFor='password'> password </label>
                <input name='password' onChange={ e => setPassword(e.target.value)} className='form-control' placeholder='password' />
            </div>
            <button>Login </button>
        </form>
    </div>
)
}

export default LoginForm