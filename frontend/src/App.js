import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// screens
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Items from "./screens/Items";
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import AddItem from "./screens/AddItem";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items/:id" component={Items} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/items" component={AddItem} />
        </Switch>
      </main>
      {/* Home */}
      {/* product */}
      {/* cart */}
    </Router>
  );
}

export default App;
