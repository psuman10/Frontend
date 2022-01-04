import {Route} from 'react-router-dom'
import Home from '../src/pages/Home';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
             <Route path='/home' exact component={Home} />
      
         <Home/>
    </div>

    
  );
}






export default App;
