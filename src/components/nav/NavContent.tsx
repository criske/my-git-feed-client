import { Route, Switch } from "react-router";
import AssignmentsController from "../assignments/AssignmentsController";
import Commits from "../commits/Commits";
import Home from "../home/Home";
import ReposController from "../repos/ReposController";

const routes: any = [
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
        component: ReposController
    },
    {
        path: "/assignments",
        component: AssignmentsController
    }
]

export default function NavContent() {
    return (<Switch>
        {routes.map((route: any, i: number) => (
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
