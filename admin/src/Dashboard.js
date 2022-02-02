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
        <Link to="/userdetails" className="col-xl-3 col-sm-6 py-1">
          <div className="text-white bg-primary h-100">
            <div className="card-body bg-primary">
              <div className="rotate">
                <i className="fas fa-users fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Users</h6>
            </div>
          </div>
        </Link>

        <Link to="/addcar" className="col-xl-3 col-sm-6 py-1">
          <div className="text-white h-100">
            <div className="card-body bg-success">
              <div className="rotate">
                <i className="fas fa-plus-circle fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Add Cars</h6>
            </div>
          </div>
        </Link>

        <Link to="/totalavailable" className="col-xl-3 col-sm-6 py-1">
          <div className="text-white h-100">
            <div className="card-body bg-warning">
              <div className="rotate">
                <i className="fas fa-car fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Total Cars</h6>
            </div>
          </div>
        </Link>

        <Link to="/usersbookings" className="col-xl-3 col-sm-6 py-1">
          <div className="text-white h-100">
            <div className="card-body bg-danger">
              <div className="rotate">
                <i className="fa fa-retweet fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Bookings</h6>
             
            </div>
          </div>
        </Link>
      </div>

      <hr />
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
              Booking Details
            </Link>
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-lg-12 col-md-6 col-sm-12">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Order ID </th>
                  <th>Car</th>
                  <th>Booking Date</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Dashboard;
