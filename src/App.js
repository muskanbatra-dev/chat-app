import {ChatEngine, ChatFeed } from 'react-chat-engine';

import './App.css' ;

import ChatFeed from './components/ChatFeed';

const App = ( ) => {
    return ( 
        <ChatEngine
         height="100vh"
         projectID="027c749c-40fd-4ac0-a251-06c537bdc62b"
         userName="Muskan Batra"
         userSecret="123123"
         renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}



 


        />
    );

}

export default App;