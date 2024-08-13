import React from "react";
import SidebarCategories from "./SidebarCategories";

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-[500px] md:w-[150px] lg:w-[300px] xl:w-[350px] ">
      <SidebarCategories />
    </div>
  );
};

export default Sidebar;
