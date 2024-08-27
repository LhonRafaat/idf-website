import "./App.css";
import intro from "./assets/idf-intro.mp4";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/home";
import { LoadingContext } from "./lib/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
        className={`w-full h-full fixed transition-all  object-cover ${
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
