import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-center z-50 bg-transparent px-6 py-8">
      <Menubar className="min-w-1/4 bg-purple-200/80 border-2 border-white backdrop-blur-md rounded-3xl shadow-md px-6 py-8 flex justify-between">
        {/* Home */}
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="/" className="px-2 text-gray-900 tracking-wider hover:border-b-2 border-gray-900 rounded-sm cursor-pointer">
              Home
            </Link>
          </MenubarTrigger>
        </MenubarMenu>

        {/* Services */}
        <MenubarMenu>
          <MenubarTrigger className="px-2 text-gray-900 tracking-wider hover:border-b-2 border-gray-900 rounded-sm cursor-pointer">Services</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link to="/jobs" className="w-full">
                Find Jobs
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link to="/freelancers" className="w-full">
                Hire Freelancers
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link to="/influencers" className="w-full">
                Browse Influencers
              </Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link to="/how-it-works" className="w-full">
                How It Works
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="px-2 text-gray-900 tracking-wider hover:border-b-2 border-gray-900 rounded-sm cursor-pointer">Account</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link to="/signup" className="w-full">
                Sign Up
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link to="/login" className="w-full">
                Log In
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link to="/profile" className="w-full">
                My Profile
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link to="/my-jobs" className="w-full">
                My Posted Jobs
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link to="/post-job" className="w-full">
                Post a Job
              </Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link to="/logout" className="w-full">
                Logout
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
};

export default Navbar;
