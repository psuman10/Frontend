import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/usersdetails" exact component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
