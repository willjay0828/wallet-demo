import { lazy, Suspense } from "react"
import { createHashRouter } from "react-router-dom";
const Layout = lazy(() => import("@/layout"))
const Home = lazy(() => import("@/pages/home"))
const routes = [
  {
    path: "/",
    element: <Suspense fallback={'加载中...'}><Layout /></Suspense>,
    children:[
      {
        index: true, //默认路由
        element: <Suspense fallback={'加载中...'}><Home /></Suspense>,
      },
    ]
  },
  {
    path: "*",
    element: <div>404找不到页面</div>
  }
]
const router = createHashRouter(routes)
export { router }
export default routes;