
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";
import Live from "~/pages/Live";

import HeaderOnly from "~/components/Layouts/HeaderOnly"
import routesConfig from "~/config/routes";

const publicRoutes = [
    {path: routesConfig.home, component: Home},
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.live, component: Live}
]
const privateRoutes = []

export{publicRoutes, privateRoutes}