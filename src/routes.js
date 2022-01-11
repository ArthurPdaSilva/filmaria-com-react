import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from "./pages/Favoritos";

import Header from "./components/Header";

export default function Routes(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
                <Route exact path="/favoritos" component={Favoritos}/>
            </Switch>   
        </BrowserRouter>
    )
}