import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;
