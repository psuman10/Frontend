import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
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
              }}
            >
              Dashboard
            </Link>
          </li>
        </ol>
      </nav>

      <div className="row mb-3">
        <Link to="/" className="col-xl-3 col-sm-6 py-2">
          <div className="text-white h-100">
            <div
              className="card-body bg-success"
            >
              <div className="rotate">
                <i className="fa fa-retweet fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Booking Details</h6>
              
            </div>
          </div>
        </Link>

        <Link to="/" className="col-xl-3 col-sm-6 py-2">
          <div className="text-white h-100">
            <div
              className="card-body bg-dark"
              
            >
              <div className="rotate">
                <i className="fas fa-car fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Total Cars</h6>
             
            </div>
          </div>
        </Link>

        <Link to="/" className="col-xl-3 col-sm-6 py-2">
          <div className="card bg-danger text-white h-100">
            <div
              className="card-body bg-danger"
            >
              <div className="rotate">
                <i className="fa fa-window-close fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Add Cars</h6>
              
            </div>
          </div>
        </Link>

        <Link to="/" className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-info h-100">
            <div className="card-body bg-primary">
              <div className="rotate">
                <i className="fas fa-users fa-4x"></i>
              </div>

              <h6 className="text-uppercase">Users</h6>
            </div>
          </div>
        </Link>
      </div>

      
    </div>
  );
};

export default Dashboard;
