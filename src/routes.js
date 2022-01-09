import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/Header";

export default function Routes(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>   
        </BrowserRouter>
    )
}