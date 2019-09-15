const SearchField = () => {
    return(
        <div>
            <form > 
                <input name='search' className='form-control' placeholder='Search people, room' />
            </form>
            <style jsx>{`
                input {
                    border-radius: 10px;
                    background: #fafafa;
                    border: transparent;
                    margin-top: 5px;
                    margin-bottom: 5px;
                }
                input::placeholder {
                    color: #212121;
                }
            `}</style>
        </div>
    )
}

export default SearchField;