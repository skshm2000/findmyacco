import {
  Stack,
  Button,
  Input,
  Text,
  Heading,
  useToast,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loginner } from "../redux/user/user.actions";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const initState = {
  email: "",
  password: "",
};
export default function Login() {
  let [form, setForm] = useState(initState);
  const dispatch = useDispatch();
  const toast = useToast();
  const {
    user: { isLogin, ErrorMsg, isButtonLoading },
  } = useSelector((state) => state);
  const nav = useNavigate();

  const handleSubmit = () => {
    dispatch(Loginner(form));
  };
  const handleChange = (e) => {
    let name = e.target.name;
    setForm({
      ...form,
      [name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isLogin) {
      toast({
        title: "Welcome admin!",
        description: "Taking you to admin page",
        status: "success",
        duration: 3000,
      });
      setTimeout(() => {
        nav("/admin");
      }, 3000);
    }
  }, [isLogin]);

  return (
    <>
      <Stack
        w="28%"
        m="auto"
        spacing={"20px"}
        p="30px 40px"
        boxShadow="rgba(91, 44, 111, 0.35) 0px 5px 15px;"
        borderRadius={"20px"}
        mt="50px"
        fontFamily={"Poppins"}
      >
        <Image w="40%" m="auto" src={logo}></Image>
        <Heading fontFamily={"Poppins"} textAlign={"center"}>
          Welcome back admin!
        </Heading>
        <Stack justifyContent={"space-between"}>
          <Text>Email</Text>
          <Input
            placeholder="Enter email"
            onChange={handleChange}
            type="email"
            name="email"
            value={form.email}
          />
        </Stack>
        <Stack>
          <Text>Password</Text>
          <Input
            placeholder="Enter Password"
            onChange={handleChange}
            type="password"
            name="password"
            value={form.password}
          />
        </Stack>
        <Text textAlign={"center"} color={"red"} fontSize={"18px"}>
          {ErrorMsg}
        </Text>
        <Button onClick={handleSubmit} isLoading={isButtonLoading}>
          Login
        </Button>
      </Stack>
    </>
  );
}
