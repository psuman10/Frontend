import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Navbar />
     
      <div className="col main pt-5 mt-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link
              to="/"
              style={{
                color: "orangered",
                fontWeight: "bold",
                textDecoration: "none",
                textAlign:"center"  
              }}
            >
              User Details
            </Link>
          </li>
        </ol>
      </nav>
        <div className="row ">
          <div className="col-lg-12 col-md-6 col-sm-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="thead-success">
                  <tr>
                    <th>S.No</th>
                    <th>UserName</th>
                    <th>Email ID</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <hr />
        </div>
      </div>
      
    </>
  );
};

export default Dashboard;
