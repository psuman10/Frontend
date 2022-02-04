import {Route,Switch, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import AddCar from './pages/AddCar';
import TotalCars from './pages/TotalCars';
import UserBookings from './pages/UserBookings';
import EditCar from './pages/EditCar';


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
             <Route path='/addcar' exact component={AddCar} />
             <Route path='/totalavailable' exact component={TotalCars} />
             <Route path='/editcar/:carid' exact component={EditCar} />
             <Route path='/userbookings' exact component={UserBookings} />
         </Switch>
         </BrowserRouter>
                
        );
    }
 
export default App





