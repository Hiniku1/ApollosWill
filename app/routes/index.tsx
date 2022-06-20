import News from "./components/news/News";
import Navbar from "./components/navbar/Navbar";
import Ender from "./components/ender/Ender";
import Season_Carousel from "./components/season_carousel/season_carousel";
import List_Carousel from "./components/list_carousel/list_carousel";

import { pool } from "../database/db.server";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Anime_Cards_Home from "./components/anime_cards/anime_cards_home";



export const loader = async () => {
  let conn;
  let seasonAnime = [];
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
  const { seasonAnime } = useLoaderData();

  
  let [userName, setUserName] = useState("");
  let [showMain, setShowMain] = useState("hidden");
  let [loginHidden, setLoginHidden] = useState("");
  let [loginId, setLoginId] = useState(0);
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [listAnime, setListAnime] = useState([]);

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
  console.log(loginId)
  return (
    <div className="bg-smooth-pink h-[100%] w-[100%] ">

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

        <Navbar userName={login} userId={loginId} />

        {/* the div where the News carousel goes */}
        <div className="w-screen h-[500px] flex items-center justify-center">
          <div className="w-[900px] h-[350px] flex">
            <News />
          </div>
        </div>
        <h1 className="">Top Animes Of The Season</h1>
        <div className="items-center justify-center bg-smooth-blue">
          
          <Anime_Cards_Home listAnimes={seasonAnime} userId={loginId}/>

        </div>

      </div>

      <div className="place-items-end">

        <Ender />

      </div>
    </div>
  );

}
