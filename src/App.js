import {ChatEngine} from 'react-chat-engine';

import './App.css' ;

import ChatFeed from './components/ChatFeed'



const App = () => {
  
    return (
      
       <ChatEngine
        height="100vh"
        projectID="027c749c-40fd-4ac0-a251-06c537bdc62b"
        userName='Muskanbatra'
        userSecret='123123'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
 
  )    
}
    

    





export default App;