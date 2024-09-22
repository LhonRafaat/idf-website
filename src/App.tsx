import "./App.css";
import intro from "/assets/idf-intro.mp4";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/home";
import { LoadingContext } from "./lib/context";
import { Layout } from "./layout";
import { Members } from "./routes/members";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/members",
        element: <Members />,
      },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);
  return (
    <>
      <video
        src={intro}
        autoPlay
        loop
        muted
        className={`w-full h-full fixed transition-all duration-1000  object-cover ${
          isLoading ? "z-50 opacity-1 " : " opacity-0 z-0"
        }`}
      />

      <LoadingContext.Provider value={isLoading}>
        <RouterProvider router={router} />
      </LoadingContext.Provider>
    </>
  );
}

export default App;
