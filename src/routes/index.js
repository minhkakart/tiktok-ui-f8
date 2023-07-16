
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";

import HeaderOnly from "~/components/Layouts/HeaderOnly"

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/following', component: Following}
]
const privateRoutes = []

export{publicRoutes, privateRoutes}