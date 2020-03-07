import * as React from 'react';
import { Button } from './Button';
import { Socket } from './Socket';



export class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'messages': []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
        
        Socket.on('push to server', (data) => {this.setState({'messages': data['database_list']})});
        console.log('Lets see:', this.state);
        console.log(this.state.messages)
    }
    
    render() {
        
        let final_messages = this.state.messages;
      return (
            <div>
            
            
            
            
<section class="msger">
  <header class="msger-header">
    <div class="msger-header-title">
      <i class="fas fa-comment-alt"></i> Nabin's Chatbot
    </div>
    <div class="msger-header-options">
      <span><i class="fas fa-cog"></i></span>
    </div>
  </header>

  <main class="msger-chat">
    <div class="m sg left-msg">
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">BOT</div>
          <div class="msg-info-time">12:45</div>
        </div>

       
                                <ul>
                                    <li className = "msg-text">
                                         <div class="msg-text">
                                         Hi, welcome to the chat, Go ahead and send me a message. 😄
                                        </div>
                                   
                                    </li>
                                    { final_messages.map( name_message =>
                                    <li key = {name_message[0].id} className = "message-with-image">
                                        <img src={name_message[3]} alt = "User Image" className = "user-image"></img>
                                        <div>
                                            <h5 className="user-name"> {name_message[0]}</h5>
                                            {(name_message[1].length > 0) && <a className="msg-text" href = {name_message[1]} target="_blank">Link attached.</a>}
                                            {(name_message[2].length > 0) && <p className="msg-text"> {name_message[2]} </p>}
                                            
                                        </div>
                                    </li> )}
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <Button />
                        </div>
                      </main>  
                </section>
             </div>
        );
    }
}