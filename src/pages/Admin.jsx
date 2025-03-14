import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AdminProfile from "../Components/AdminComponents/Admin_Profile";
import SimpleSidebar from "../Components/AdminComponents/Admin_Sidebar";
import Search from "../Components/AdminComponents/Search";
import { Outlet, useParams,useNavigate } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";

const Admin = () => {
  // let navigate = useNavigate()
  const { params } = useParams();
  console.log(params);
  // console.log(localStorage.getItem("adminAuth"));
// if(!localStorage.getItem("adminAuth")){
//   navigate('/adminlogin')
// }

  return (
    <>
      <Flex gap={"8"}>
        <Box  width={"20%"}>
          <SimpleSidebar />
        </Box>

        <Box  width={"75%"}  bgColor={"white"}>
          <Flex bg={"white"} zIndex={"1000"} overflow={"contain"} width="73%" justifyContent="space-between"  pos="fixed">
            <Search />
            <AdminProfile />
          </Flex>
          <Box mt={"5rem"}>
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </>
  );

};

export default Admin;
