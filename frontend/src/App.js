
import Homepage from './Pages/Homepage';
import './App.css';
import { Route } from 'react-router-dom'
import Chatpage from './Pages/Chatpage';
function App() {
  return (
    <div className="App">
     <Route path ='/' component={Homepage} exact/>
     <Route path ='/chats' component={Chatpage}/>
    </div>
  );
}

export default App;

