import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headers from "../Headers";
import Footer from "../Footer";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Notfound from "../pages/Notfound";
import ProductsDetails from "../pages/ProductsDetails";
const Routes = () => (
  <Router>
    <Headers/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="P/roductDetails/:id" component ={ProductsDetails}/>
      <Route component={Notfound} />
    </Switch>
    <Footer/>
  </Router>
);
export default Routes;
