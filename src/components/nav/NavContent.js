import { Route, Switch } from "react-router";
import Assignments from "../assignments/Assignments";
import Commits from "../commits/Commits";
import Home from "../home/Home";
import Repos from "../repos/Repos";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/commits",
        component: Commits
    },
    {
        path: "/repos",
        component: Repos
    },
    {
        path: "/assignments",
        component: Assignments
    }
]

export default function NavContent() {
    return (<Switch>
        {routes.map((route, i) => (
            <Route
                exact
                key={i}
                path={route.path}
                render={props => (
                    <route.component {...props} routes={route.routes} />
                )}
            />
        ))}
    </Switch>)
}
