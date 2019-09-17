import React, {useContext} from 'react';
import { ChatContext } from '../../context/chatContext';
import { toggleIsVisibleSidebar } from '../../actions/chatActions';

const HeaderPane = ({title, img}) => {
    const{dispatchChat} = useContext(ChatContext);

    const titleStyle = {color: '#424242', fontWeight:'20px', fontSize:'30px', padding:'10px'}
    const avatarStyle = {height: '50px', width:'50px', borderRadius: '100%'}
    return(
        <div className="pos-f-t">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className='title-span'>
           {img && <img style={avatarStyle}  src={img} />   }
            <span style={titleStyle} >{title} </span> 
        </span>
    <button onClick= { () => toggleIsVisibleSidebar(dispatchChat) } className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
    
</div>
    )
}
        
    


export default HeaderPane;