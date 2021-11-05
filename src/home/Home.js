import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import ArrayProps from "../components/array-props/ArrayProps"
import Sub from "../components/effect/Effect"
import Props from "../components/props/Props"
import Add from "../components/use-recoil/UseRecoil"
import State from "../components/use-state/State"

const Home = () => {
    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Props</Link></li>
                        <li> <Link to="/arrayprops">Array Props</Link></li>
                        <li> <Link to="/state" >State</Link></li>
                        <li> <Link to="/recoil" >Recoil</Link></li>
                        <li> <Link to="/UseEffect" >useEffect</Link></li>

                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Props}><Props /></Route>
                    <Route exact path="/arrayprops" component={ArrayProps}><ArrayProps /></Route>
                    <Route exact path="/effect" component={Sub}><Sub /></Route>
                    <Route exact path="/state" component={State}><State /></Route>
                    <Route exact path="/recoil" component={Add}><Add /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Home