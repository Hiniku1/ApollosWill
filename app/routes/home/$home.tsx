import { useLoaderData, useParams } from "@remix-run/react";
import { useState } from "react";
import { pool } from "~/database/db.server";
import Anime_Cards_Home from "../components/anime_cards/anime_cards_home";
import Ender from "../components/ender/Ender";
import Navbar from "../components/navbar/Navbar";
import News from "../components/news/News";



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


export default function Home(){
    let loginId = useParams();
    let [userName, letUserName] = useState()
    const { seasonAnime } = useLoaderData();

    fetch("http://localhost:3011/searchUserName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{
        id: loginId.home
      }]),
    })
      .then((data) => {
        return data.json();
      })
      .then((post) => {
        console.log(post)
        letUserName(post[0].user_name)
        
      });
      console.log(userName)
    
    
    return (
        <div className="bg-smooth-pink h-[100%] w-[100%] ">
  
        <div>
  
          <Navbar userName={userName} userId={loginId.home} />
  
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
    )
}