import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { registerUser } from "./modules/fetch/index.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await registerUser(name, email, password);

      toast({
        title: "Success",
        description: "Account created successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (e) {
      const error = new Error(e);
      toast({
        title: "An error occurred",
        description: error?.message || "Ada yg salah, silahkan coba lagi",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setError("An error occurred");
    }
  };

  return (
    <Tabs padding={"10px"}>
      <TabList>
        <Tab>Register</Tab>
      </TabList>

      <TabPanels>
        {/* register form  */}
        <TabPanel>
          <form onSubmit={handleSubmit}>
            {error && <Text color={"red"}>{error}</Text>}

            <FormControl isRequired>
              <FormLabel>Nama</FormLabel>
              <Input
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {password !== confirmPassword && (
                <Text color={"red"}>Passwords do not match</Text>
              )}
            </FormControl>
            <Button type='submit' colorScheme='teal' variant={"solid"} mt={4}>
              Register
            </Button>
          </form>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Register;
