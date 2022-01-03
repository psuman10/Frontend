import Navbar from '../dashboard/Navbar'
import MainPage from '../dashboard/MainPage'
function Home() {
    return (
        
        <div>
        <Navbar/>
        <div className="container-fluid" id="main">
         <div className="row row-offcanvas row-offcanvas-left">

             <MainPage/>
             
             
             </div> 

     </div> 
     </div>      
    )
}
export default Home
