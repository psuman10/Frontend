import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllUsers, deleteUsers } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Navbar";
import { Popconfirm } from "antd";
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
                }}
              >
                Dashboard
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
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                  {users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.address}</td>
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
                            <Popconfirm
                              title="Are you sure to delete this user?"
                              onConfirm={() => {
                                dispatch(deleteUsers({ userid: user._id }));
                              }}
                              okText="Yes"
                              cancelText="No"
                            >
                              <button
                                class="btn btn-danger btn-sm rounded-0"
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                              >
                                <i class="fa fa-trash"></i>
                              </button>
                            </Popconfirm>
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
