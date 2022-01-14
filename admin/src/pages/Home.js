import Dashboard from '../Dashboard'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
function Home() {
    return (
        
        <div>
        <Navbar/>
        <div className="container-fluid" id="main">
         <div className="row row-offcanvas row-offcanvas-left">
           <Sidebar/>
          <Dashboard/>
       
     </div>
    </div>  
</div>  
            
    )
}

export default Home