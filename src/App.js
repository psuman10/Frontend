import Slider from "./slider/slider";
import DefaultLayout from "./components/DefaultLayout"
import 'antd/dist/antd.css';
import Register from "./pages/Register";
import {Switch,Route} from "react-router-dom"
// import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/login'

function App() {
    return ( 
        
            <>
            {/* <DefaultLayout/>
            <Slider/> */}
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              
              
                <Route exact path="/" component={DefaultLayout} />
                <Route exact path="*" component={NotFound} />

            </Switch>
            </> 
        ); 
    
}
export default App;