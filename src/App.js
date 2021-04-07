import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
            height="100vh"
            projectID="ee21a8f0-b7ec-4c56-9210-f30d0560553f"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps} 
            />}
        />
    );
}

export default App;