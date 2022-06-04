import News from "./components/news/News";
import Navbar from "./components/navbar/Navbar";
import Ender from "./components/ender/Ender";
import Season_Carousel from "./components/season_carousel/season_carousel";
import List_Carousel from "./components/list_carousel/list_carousel";

import { pool } from "../database/db.server";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";



export const loader = async () => {
  let conn;
  let seasonAnime = [];
  let listAnime = [];
  try {
    conn = await pool.getConnection();

    seasonAnime = await conn.query(
      "SELECT * FROM Anime WHERE MONTH(start_date) = 4 and YEAR(start_date)= 2021 ;"
    );

   
  } finally {
    if (conn) conn.release(); //release to pool
  }

  return {
    seasonAnime: seasonAnime,
  };
};

export default function Index() {
  const { seasonAnime, listAnime } = useLoaderData();

  let [showMain, setShowMain] = useState("hidden");
  let [loginHidden, setLoginHidden] = useState("");
  let [loginId, setLoginId] = useState();
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");

  let loginData = [
    {
      login: login,
      password: password,
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
    console.log(login, password);
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
          setLoginId(post);
          setLoginHidden("hidden");
          setShowMain("");
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
          setLoginHidden("hidden");
          setShowMain("");
        }
      });
  }

  return (
    <div className="bg-smooth-pink">
      <div className={loginHidden}>
        <div className="bg-smooth-pink h-[500px] items-center justify-center flex mt-32">
          <div className="bg-smooth-blue w-[300px] h-[400px] items-center flex justify-center">
            <ul>
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
          </div>
        </div>
      </div>

      <div className={showMain}>
        <Navbar />

        {/* the div where the News carousel goes */}
        <div className="w-screen h-[500px] flex items-center justify-center">
          <div className="w-[900px] h-[350px] flex">
            <News />
          </div>
        </div>

        {/* the div where the Winter Season Anime goes */}
        <h1 className="pl-20 pb-5 font-quicksand text-[24px]">
          Animes You're Watching
        </h1>
        <div className="w-screen h-full flex items-center justify-center bg-smooth-blue">
          <div className=" w-full h-[500px] flex items-center justify-center">
            <div className="w-full h-[400px]">
              <List_Carousel/>
            </div>
          </div>
        </div>

        <h1 className="pl-20 pb-5 font-quicksand text-[24px] pt-10">Current</h1>
        <div className="w-screen h-full flex items-center justify-center bg-smooth-blue">
          <div className=" w-full h-[500px] flex items-center justify-center">
            <div className="w-full h-[400px]">
              <Season_Carousel animes={seasonAnime} loginId={loginId} />
            </div>
          </div>
        </div>
      </div>

      <Ender />
    </div>
  );
}
