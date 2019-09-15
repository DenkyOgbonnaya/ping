const Pane = ({title, img}) => {
    return(
        <div className='pane'> 
            <img src={img} />
            <span className='title-span'> {title} </span>
            <style jsx>{`
                .pane {
                    border: 1px solid #212121;
                    background: #0048AA;
                    height: 70px
                }
                .pane > img {
                    width: 50px;
                    height: 50px;
                    border-radius: 100%;
                    margin-left: 10px;
                    margin-top: 5px;
                }
                .title-span {
                    width: inherit;
                    padding: 10px;
                    font-size: 20px;
                    
                }
            `} </style>
        </div>
    )
}

export default Pane;