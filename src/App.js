import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";

import Home from "./Pages/Home";
import BookandSearch from "./Pages/BookandSearch";
import TravelCommunity from "./Pages/TravelCommunity";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bookandsearch" element={<BookandSearch />} />
        <Route path="travelcommunity" element={<TravelCommunity />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
