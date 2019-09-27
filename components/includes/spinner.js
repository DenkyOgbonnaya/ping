
const Spinner = () => {
    return (
        <div className='spinner'>
            <div className='spinner-border text-primary' role='status' > 
                <span className='sr-only'> Loading... </span>
            </div>
            <style jsx>{`
                .spinner {
                    text-align: center;
                }
                .spinner > div {
                    display: inline-block;
                }
            `}</style>
        </div>
    )
}
export default Spinner;