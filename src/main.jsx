import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AddJob from "./pages/AddJob.jsx";
import EditJob from "./pages/EditJob.jsx";
import Home from "./pages/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/app/store.js";
import EditValue from "./customroute/EditValue.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/remote",
        element: <Home />,
      },
      {
        path: "/internship",
        element: <Home />,
      },
      {
        path: "/fulltime",
        element: <Home />,
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
      {
        path: "/edit-job/:JobName",
        element: (
          <EditValue>
            <EditJob />
          </EditValue>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.Fragment>
);
