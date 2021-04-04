import { Route, Switch } from "react-router";
import AssignmentsController from "../assignments/AssignmentsController";
import CommitsController from "../commits/CommitsController";
import Home from "../home/Home";
import NotFound from "../notfound/NotFound";
import ReposController from "../repos/ReposController";

const routes: any = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/commits",
        component: CommitsController
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
    return (
        <div style={{minHeight: '72vh', width: '100%'}}>
            <Switch>
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
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
