import React, { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import {
  useDisclosure,
  Icon,
  Flex,
  Box,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Avatar,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  List,
  AccordionPanel,
  Heading,
} from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const accordionData = [
  {
    title: "Dashboard",
    icon: TbDeviceAnalytics,
    options: ["Dashboard", "Inquiry", "Contact_admin"],
  },
  {
    title: "Home",
    icon: MdHome,
    options: ["Dashboard", "Inquiry", "Contact_admin"],
  },
  {
    title: "About",
    icon: MdHome,
    options: ["Dashboard", "Inquiry", "Contact_admin"],
  },
  {
    title: "Education",
    icon: MdHome,
    options: ["Dashboard", "Inquiry", "Contact_admin"],
  },
  {
    title: "Scholarship",
    icon: MdHome,
    options: ["Dashboard", "Scholarship_Inquiry", "Contact_admin"],
  },
  {
    title: "Partners",
    icon: MdHome,
    options: ["Dashboard", "Inquiry", "Contact_admin"],
  },
  {
    title: "FAQs",
    icon: MdHome,
    options: ["Dashboard", "Inquiry", "Contact_admin"],
  },
  {
    title: "Blog",
    icon: MdHome,
    options: ["Dashboard", "Inquiry", "Contact_admin"],
  },
  {
    title: "Contact",
    icon: MdHome,
    options: ["Dashboard", "Inquiry", "Contact_admin"],
  },
];

const Admin = () => {
  const sidebar = useDisclosure();
  const nav = useNavigate();
  const {
    user: { isLogin },
  } = useSelector((state) => state);

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="#1B1B1B"
      // borderColor="blue.300"
      // borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Image
          src="https://www.findmyacco.com/image/logo.png"
          alt="FindMyAccoLogo"
          width={"80px"}
          margin="auto"
        />
      </Flex>
      <Accordion allowToggle color={"white"}>
        {accordionData.map((item, i) => (
          <AccordionItem key={i} border="none" my="20px">
            <h2>
              <AccordionButton
                _hover={{ border: "none" }}
                _expanded={{ border: "none", bg: "#F4B41A", color: "black" }}
                justifyContent={"space-between"}
                borderRadius={"0px"}
              >
                <Flex alignItems={"center"} gap="10px" w="80%">
                  {item.icon && <Icon as={item.icon} />}
                  <Box as="span">{item.title}</Box>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {item.options.map((option, j) => (
                <List key={j} pl="30px" my="20px" _hover={{ color: "#F4B41A" }}>
                  <Link to={option != "Dashboard" ? `${option}` : "/admin"}>
                    {option}
                  </Link>
                </List>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );

  useEffect(() => {
    if (!isLogin) {
      nav("/admin/login");
    }
  }, []);

  return (
    <Box
      as="section"
      bg="white"
      width={"99vw"}
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
      fontFamily={"Poppins, sans-serif"}
      fontWeight="regular"
    >
      <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{
              base: "inline-flex",
              md: "none",
            }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <Link to="/admin">
            <Heading size="sm">FIND MY ACCO</Heading>
          </Link>
          <Flex align="center" gap="10px">
            <Text fontSize="12px" cursor="pointer">
              John Doe
            </Text>

            <Avatar
              // ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          <Outlet />
          {/* Add content here, remove div below  */}
          {/* <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
