import {Route,Switch, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'

import 'antd/dist/antd.css';


import EditUser from './pages/EditUser';

import UserDetails from './pages/UserDetails'

function App(){

        return (
                <BrowserRouter>
             <Switch>
             <Route path='/' exact component={Home} />


             <Route path='/userdetails' exact component={UserDetails} />
             <Route path='/editusers/:userid' exact component={EditUser} />
         </Switch>
         </BrowserRouter>
                
        );
    }
 
export default App





