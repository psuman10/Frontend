import {Route} from 'react-router-dom'
// import ProtectedRoute from 'react-protected-route-component'
import Home from '../src/pages/Home'

function App() {
  return (
    <div className="App">
     
             <Route path='/home' exact component={Home} />
      
         <Home/>
    </div>

    
  );
}






export default App;
