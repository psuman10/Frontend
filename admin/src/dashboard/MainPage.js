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
    </div>
  );
};

export default Dashboard;
