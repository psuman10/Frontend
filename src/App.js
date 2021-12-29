import 'antd/dist/antd.css';
import Register from "./pages/Register";
import {Route, BrowserRouter, Redirect} from "react-router-dom"
import Home from './pages/Home'
// import NotFound from './pages/NotFound'
// import ProtectedRoute from 'react-protected-route-component'
import Login from './pages/login'
import Profile from "./pages/Profile"
import Form from 'antd/lib/form/Form';

function App() {
    return (
        <div className = "App">

            <BrowserRouter>

            <Route path = '/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
            <Route path = '/register' exact><Register  /></Route>
            <Route path="/userprofile/:userid" exact component={Profile}/>
            <Route path="/editprofile/:userid" exact component={Profile}/>
            <Route path="/updateprofile/:userid" exact component={Profile}/>

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