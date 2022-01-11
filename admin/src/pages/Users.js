import Navbar from "../dashboard/Navbar";
import { useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers} from "../redux/actions/userActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersReducer);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
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
                  {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.username}</td>

                      <td>{user.email}</td>
                      <td>Driver</td>
                      <td>
                        <ul class="list-inline m-0">
                          <li class="list-inline-item">
                            <button
                              class="btn btn-primary btn-sm rounded-0"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add"
                            >
                              <i class="fa fa-table"></i>
                            </button>
                          </li>

                          <li class="list-inline-item">
                            <Link to={`/editusers/${user._id}`}>
                              <button
                                class="btn btn-success btn-sm rounded-0"
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
                              >
                                <i class="fa fa-edit"></i>
                              </button>
                            </Link>
                          </li>
                          
                        </ul>
                      </td>
                    </tr>
                  );
                })}
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
