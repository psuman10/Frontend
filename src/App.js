import 'antd/dist/antd.css';
import Register from "./pages/Register";
import {Route, BrowserRouter, Redirect} from "react-router-dom"
// import Home from './pages/Home'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
// import ProtectedRoute from 'react-protected-route-component'
import Login from './pages/login'

function App() {
    return (
        <div className = "App">

            <BrowserRouter>

            <ProtectedRoute path = '/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
            <Route path = '/register' exact component={Register}/>
            {/* <Route exact path="*" component={NotFound} /> */}

            </BrowserRouter>

            </div>
        
            
        ); 
    
}
export default App;

export function ProtectedRoute(props)
{
    if(localStorage.getItem('user'))
{
    return <Route {...props}/>
}
else{
    return <Redirect to='/login'/>

}
}