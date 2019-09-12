const LoginForm = ({setNickname, setPassword, handleLogin}) => {
   
    return (
        <div className='container' > 
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