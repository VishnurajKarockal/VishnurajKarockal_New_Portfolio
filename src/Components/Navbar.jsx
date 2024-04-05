import { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
} from "@chakra-ui/react";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Flex
        p={4}
        alignItems="center"
        bg="#969693"
        color="white"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
      >
        <Box fontSize="1.5rem" fontWeight={"600"}>Vishnuraj K R</Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }} fontSize={"1.2rem"}>
          <Link href="#home" style={{ padding: "20px" }}>
            Home
          </Link>
          <Link href="#about" style={{ padding: "20px" }}>
            About
          </Link>
          <Link href="#skills" style={{ padding: "20px" }}>
            Skills
          </Link>
          <Link href="#projects" style={{ padding: "20px" }}>
            Projects
          </Link>
          <Link href="#statistics" style={{ padding: "20px" }}>
            Statistics
          </Link>
          <Link href="#contact" style={{ padding: "20px" }}>
            Contact
          </Link>
          <Button bg="#cccbc8" variant="solid" href=".\Sources\VishnurajKR-FullStackWebDeveloper-Rvbd.pdf">
            <DownloadIcon />Resume
          </Button>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            onClick={toggleDrawer}
          />
        </Box>
        <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Your Name</DrawerHeader>
              <DrawerBody>
                <List spacing={3}>
                  <ListItem>
                    <Link href="#home" onClick={toggleDrawer}>
                      Home
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#about" onClick={toggleDrawer}>
                      About
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#skills" onClick={toggleDrawer}>
                      Skills
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#projects" onClick={toggleDrawer}>
                      Projects
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#statistics" onClick={toggleDrawer}>
                      Statistics
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#contact" onClick={toggleDrawer}>
                      Contact
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Button mt={4} colorScheme="teal" variant="solid" download>
                      Download Resume
                    </Button>
                  </ListItem>
                </List>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
      <Box pt="70px"></Box>
    </>
  );
};

export default Navbar;
