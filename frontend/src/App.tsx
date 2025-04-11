import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import Freelancers from "./pages/Freelancers";
import FreelancerProfile from "./pages/FreelancerProfile";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/onboarding",
    element: <OnBoarding />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/post-job",
    element: <PostJob />,
  },
  {
    path: "/freelancers",
    element: <Freelancers />,
  },
  {
    path: "/freelancers/:id",
    element: <FreelancerProfile />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "*",
    element: <NotFound />,
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
