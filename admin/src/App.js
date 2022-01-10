import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import "antd/dist/antd.css";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
