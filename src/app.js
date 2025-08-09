import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Header_top from "./Components/Header_top";
import Content from "./Components/Content";
import Contact from "./Components/Sidebar_Menu/Contact";
import About from "./Components/Sidebar_Menu/About";
import BootCamp from "./Components/Sidebar_Menu/BootCamp";
import Financial from "./Components/Sidebar_Menu/Financial";
import BusinessServices from "./Components/Sidebar_Menu/BusinessServices";
import Innovation from "./Components/Sidebar_Menu/Innovation";
import Sidebar from "./Components/Sidebar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const APPLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="min-h-screen bg-white">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <Content />
        <Footer />
        <Outlet />
      </main>
    </div>
  );
};
// Page Routing
const Page = createBrowserRouter([
  {
    path: "/",
    element: <APPLayout />,
    children: [
      {
        path: "/Innovation",
        element: <Innovation />,
      },
      {
        path: "/BootCamp",
        element: <BootCamp />,
      },
      {
        path: "/businessservices",
        element: <BusinessServices />,
      },
      {
        path: "/Financialservices",
        element: <Financial />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact US",
        element: <Contact />,
      },
    ],
  },
]);
root.render(<RouterProvider router={Page} />);
