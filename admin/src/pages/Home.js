import Navbar from '../dashboard/Navbar'
import MainPage from '../dashboard/MainPage'
import Sidebar from '../dashboard/Sidebar'
function Home() {
    return (
        
        <div>
        <Navbar/>
        <div className="container-fluid" id="main">
         <div className="row row-offcanvas row-offcanvas-left">
            <Sidebar/>
             <MainPage/>
             
             
             </div> 

     </div> 
     </div>      
    )
}
export default Home
