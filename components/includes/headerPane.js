import React from 'react';
import chatActions from '../../actions/chatActions'
import useChatConText from '../lib/useChatContext';

const HeaderPane = ({title, img}) => {
    const {selectedRoom} = useChatConText().chatData;
    const{toggleIsVisibleSidebar} = chatActions();

    const titleStyle = {color: '#424242', fontWeight:'20px', fontSize:'30px', padding:'10px'}
    const avatarStyle = {height: '50px', width:'50px', borderRadius: '100%'}
    return(
        <div className="pos-f-t">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className='title-span'>
           {img && <img style={avatarStyle}  src={img} />   }
            <span style={titleStyle} >{title} </span> 
            {selectedRoom.typingMessage && <span style= {{color: '#424242'}}> <em> {selectedRoom.typingMessage} </em> </span> }
        </span>
    <button onClick= { () => toggleIsVisibleSidebar() } className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
    
</div>
    )
}
        
    


export default HeaderPane;