import {Route} from 'react-router-dom'
import Home from '../src/pages/Home';
import 'antd/dist/antd.css';
import Users from './pages/Users'

function App() {
  return (
    <div className="App">
             <Route path='/home' exact component={Home} />
             <Route path='/users' exact component={Users} />
      
         <Home/>
    </div>

    
  );
}






export default App;
