import "./App.css";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import LanguageWrapper from "./components/LanguageWrapper";
import Home from "./components/Home";
import About from "./components/About";
import { Suspense } from "react";

const AppContent = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/en" replace />,
    },
    {
      path: "/:lang",
      element: <LanguageWrapper />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/en" replace /> },
  ]);

  return (
    <Suspense fallback={<div>Loading translations...</div>}>{routes}</Suspense>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
