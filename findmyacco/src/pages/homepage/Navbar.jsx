import {
  Box,
  Image,
  Text,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import call from "./IMAGES/call.png";
import wa from "./IMAGES/whatsapp.png";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="h-20 items-center justify-around fixed top-0 flex bg-white shadow w-full z-10">
      <Image h="80%" src={logo}></Image>
      <Box
        display={{ base: "none", md: "flex" }}
        gap="25px"
        fontWeight={"bold"}
      >
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
        <Menu>
          <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>
            Student Accomodation <ChevronDownIcon fontSize={"20px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        h="100%"
        justifyContent={"center"}
        alignItems="center"
        gap="10px"
      >
        <SearchIcon mr="20px" fontSize={"2xl"} />
        <Image h="40%" src={wa}></Image>
        <Divider
          colorScheme="blackAlpha"
          borderColor={"black"}
          h="40px"
          orientation="vertical"
        />
        <Image h="40%" src={call}></Image>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <Box display="flex">
          <SearchIcon mr="20px" fontSize={"2xl"} />
          <GiHamburgerMenu
            fontSize={"25px"}
            ref={btnRef}
            onClick={onOpen}
          ></GiHamburgerMenu>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Image
                h="30px"
                src="https://www.findmyacco.com/image/logo.png"
              ></Image>
            </DrawerHeader>

            <DrawerBody display={"flex"} flexDir="column" gap={"20px"}>
              <NavLink color="red" to="/about">
                About us
              </NavLink>
              <Divider colorScheme="blackAlpha" borderColor={"black"} />
              <NavLink color="red" to="/">
                Contact us
              </NavLink>
              <Divider colorScheme="blackAlpha" borderColor={"black"} />
              <Accordion allowToggle>
                <AccordionItem border="none">
                  <AccordionButton p="0px">
                    <Box
                      w="100%"
                      display={"flex"}
                      justifyContent="space-between"
                    >
                      <Text>Student Accomodation</Text>
                      <ChevronDownIcon fontSize="25px" />
                    </Box>
                  </AccordionButton>
                  <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Divider colorScheme="blackAlpha" borderColor={"black"} />
              <NavLink color="red" to="/">
                Whatsapp
              </NavLink>
              <Divider colorScheme="blackAlpha" borderColor={"black"} />
              <NavLink color="red" to="/">
                Call Now
              </NavLink>
            </DrawerBody>
            <DrawerFooter
              display={"flex"}
              justifyContent="center"
              border="1px solid gray"
            >
              <Text fontSize={"xx-small"}>WE'RE HAPPY TO HELP YOU!</Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </div>
  );
};

export default Navbar;
