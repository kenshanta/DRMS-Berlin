import React from "react";
import {
  GridItem,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Select,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import logo from "../profile.jpeg";
import HamburgerDrawer from "./hamburgerDrawer";

interface AppBodyProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
}
const AppBody: React.FC<AppBodyProps> = ({ btnRef, isOpen, onClose }) => {
  const [status, setStatus] = React.useState("Submit");
  const handleSubmit = async (e: any) => {
    console.log("event values", e.target.elements);
    e.preventDefault();
    setStatus("Sending...");
    const { fullName, email, phoneNumber, birthday } = e.target.elements;
    let details = {
      fullName: fullName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      birthday: birthday.value,
    };
    let response = await fetch("http://localhost:8080/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.message);
  };
  return (
    <GridItem className="App-body">
      <GridItem>
        <Text fontSize={"4xl"} textDecoration={"underline"}>
          Who we are:
        </Text>
      </GridItem>
      <Text fontSize="2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Es
      </Text>
      <GridItem paddingTop={9}>
        <Text textDecoration={"underline"} fontSize={"4xl"}>
          Meet The Team:
        </Text>
        <GridItem
          gap={3}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"start"}
          paddingLeft={5}
          paddingTop={3}
        >
          <Avatar size={"md"} name="Sarkis Kovlekjian" src={logo}></Avatar>
          <Text fontSize={"xl"}>Sarkis Kovlekjian</Text>
        </GridItem>
        <Text fontSize={"2xl"}>
          Founder and CEO Sarkis Kovlekjian has been in the industry with hands
          on experience for 7+ years
        </Text>
      </GridItem>
      <GridItem paddingTop={9}>
        <Text fontSize={"4xl"} textDecoration={"underline"}>
          Apply to be a part of our team
        </Text>
        <Text fontSize={"larger"}>
          Are you a student between 18-26 years old and is looking for a
          part-time employment in a fast-paced fun environment?
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl padding={8}>
            <FormLabel display={"flex"} flexDirection={"row"} id="fullName">
              Full Name&nbsp; <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Input required id="fullName" />
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              paddingTop={2}
              id="email"
            >
              Email address&nbsp;
              <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Input required id="email" type="email" />
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              paddingTop={2}
              id="birthday"
            >
              Date Of Birth&nbsp;
              <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Input required id="birthday" type="date" />
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              paddingTop={2}
              id="phoneNumber"
            >
              Phone number&nbsp;
              <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <InputGroup>
              <InputLeftAddon>+49</InputLeftAddon>
              <Input
                required
                id="phoneNumber"
                type="tel"
                placeholder="phone number"
              />
            </InputGroup>
            <FormLabel
              display={"flex"}
              flexDirection={"row"}
              paddingTop={2}
              id="availability"
            >
              Availability&nbsp;
              <Text textColor={"#800002"}>*</Text>
            </FormLabel>
            <Select id="availability" placeholder="Select option">
              <option value="option1">As soon as possible</option>
              <option value="option2">1-2 weeks</option>
              <option value="option3">2-4 weeks</option>
            </Select>

            <FormHelperText>
              Provided data are never shared without consent.
            </FormHelperText>
          </FormControl>
          <Button isDisabled type="submit">
            {status}
          </Button>
        </form>
      </GridItem>
      <HamburgerDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </GridItem>
  );
};
export default AppBody;
