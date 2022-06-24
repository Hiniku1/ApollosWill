import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import Ender from "./components/ender/Ender";






export default function Index() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [loginId, setLoginId] = useState(0);


  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

  let loginData = [
    {
      login: login,
      password: password,
      id: loginId
    },
  ];

  function gettingLoginData(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setLogin(event.target.value);
  }

  function gettingPasswordData(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setPassword(event.target.value);
  }

  async function doLogin() {

    fetch("http://localhost:3011/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((data) => {
        return data.json();
      })
      .then((post) => {
        if (post) {
          console.log(post.id)
          setLoginId(post);
          navigate("/home/" + post)

        }
      });
  }

  async function signUp() {
    fetch("http://localhost:3011/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((data) => {
        return data.json();
      })
      .then((post) => {
        if (post) {
          setLoginId(post);
          setIsLoggedIn(true);
        }
      });
  }
  return (
    <div className="bg-smooth-pink w-[100%] h-[100%]" >

      <div>
        <img className="w-screen h-[500px] -z-10 -mb-32" src={require("public/imgs/loginWall.jpg")} alt="Wallpaper" />

        <h1 className="font-montserrat text-7xl flex justify-center text-black">Welcome to ApollosWill</h1>

        <ul className="flex justify-center mt-12 items-center">
          <li>
            Login
            <input onChange={gettingLoginData}></input>
          </li>
          <li>
            Password
            <input onChange={gettingPasswordData}></input>
          </li>
          <li>
            <button onClick={doLogin}> Login </button>
          </li>
          <li>Or</li>
          <li>
            <button onClick={signUp}> Sign Up </button>
          </li>
        </ul>


        <div className="">
          <Ender />
        </div>
      </div>

    </div>
  )

}
