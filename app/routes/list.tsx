import { Link, useLoaderData } from "@remix-run/react";
import Anime_Cards_List from "./components/anime_cards/anime_cards_list";
import Ender from "./components/ender/Ender";

import { pool } from "../database/db.server"
import Navbar from "./components/navbar/Navbar";

export const loader = async () => {
    let conn;
    let listAnime = [];
    try {
      conn = await pool.getConnection();
      
      listAnime = await conn.query("SELECT Anime.id, User_List.anime_state, Anime.en_jp_title ,User_List.episodes_watched, Anime.synopsis FROM Anime INNER JOIN User_List ON Anime.id = User_List.id_anime;")      
  
    } finally {
      if (conn) conn.release(); //release to pool
    }
  
    return listAnime;
  
  };

export default function List() {
    const listAnimes = useLoaderData();  
    
    return (
        <div className="bg-smooth-pink">
            
            <Navbar/>

            <img className="w-screen h-[500px] -z-10 -mb-32" src={require("public/imgs/Wallpaper.jpeg")} alt="Wallpaper" />
            <div className="h-full w-full flex justify-center items-center">
                {/* Icon */}
                <div className="flex w-[200px] h-[200px] bg-smooth-pink items-center rounded-3xl justify-center">
                    <Link to="/list"><img className="rounded-3xl w-[150px]" src={require("public/imgs/Icon.jpg")} alt="Icon" /></Link>
                </div>
            </div>

            <h1 className="font-montserrat text-7xl flex justify-center">User_Name</h1>

            {/* Input thingy search bar */}
            <div className="flex justify-center items-center">
                <div className="form-control w-full flex justify-center items-center">
                    <label className="label">
                        <span className="label-text-"></span>
                        <span className="label-text-alt">Filters</span>
                    </label>
                    <input type="text" placeholder="Search Anime" className="input input-bordered w-[700px]"></input>
                </div>
            </div>

            <Anime_Cards_List listAnimes={listAnimes}/>

            <div className="mt-16">
                <Ender/>
            </div>
        </div>
    )
}