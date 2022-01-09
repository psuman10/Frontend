import Navbar from "../dashboard/Navbar"
const Dashboard = () => {
    return (
        <>
        <Navbar />
        
    <div className="col main pt-5 mt-3">
      
        <div className="row ">
            <div className="col-lg-12 col-md-6 col-sm-12">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="thead-success">
                        <tr>
                                <th>UserName</th>
                                <th>Email</th>
                                
                                
                            </tr>
                           
                            
                        </thead>
                        
                    </table>
                </div>
            </div>
            <hr/>
            
        </div>  
              </div>
                
              </>
         
        

    )
}


export default Dashboard

