
import Register from "./pages/Register";
import {Route, BrowserRouter, Redirect} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/login'
import Profile from "./pages/Profile"
import BookingCar from './pages/BookingCar'


function App() {
    return (
        <div className = "App">

            <BrowserRouter>
            <Route path = '/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
            <Route path = '/register' exact><Register/></Route>
            <Route path='/profile/:userid' exact component={Profile} />
            <Route path='/booking/:carid' exact component={BookingCar} />



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