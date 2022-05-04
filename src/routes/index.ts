import { RouteProps } from "react-router-dom";
import Home from "../pages/Home";
import VideoDetails from "../pages/VideoDetails";
import VideosByCategory from "../pages/VideosByCategory";

export interface MyRouteProps extends RouteProps {
  name: string;
  label: string;
}

const routes: MyRouteProps[] = [
  {
    name: "home",
    label: "Home",
    path: "/",
    component: Home,
    exact: true,
  },
  {
    name: "video.by-category",
    label: "Vídeos por categoria",
    path: "/categories/:id",
    component: VideosByCategory,
    exact: true,
  },
  {
    name: "video.details",
    label: "Informações do Vídeo",
    path: "/videos/:id/details",
    component: VideoDetails,
    exact: true,
  },
];
export default routes;
