import { Link, useLoaderData, useParams } from "@remix-run/react";

import { pool } from "~/database/db.server";
import Navbar from "../components/navbar/Navbar";
import Anime_Cards_List from "../components/anime_cards/anime_cards_list";
import Ender from "../components/ender/Ender";
import { useState } from "react";
import Modal_Anime from "../components/modal/modal_anime";

export default function List() {
    let [listAnime, setListAnime] = useState([]);
    const listId = useParams();
    let id = listId.listId

    fetch("http://localhost:3011/getAnimeOnList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{
        id: id
      }]),
    })
      .then((data) => {
        return data.json();
      })
      .then((post) => {
        setListAnime(post)
      })
    
    return (
        <div className="bg-smooth-pink">
            
            <Navbar userId={id}/>

            <img className="w-screen h-[500px] -z-10 -mb-32" src={require("public/imgs/Wallpaper.jpeg")} alt="Wallpaper" />
            <div className="h-full w-full flex justify-center items-center">
                {/* Icon */}
                <div className="flex w-[200px] h-[200px] bg-smooth-pink items-center rounded-3xl justify-center">
                    <Link to="/list"><img className="rounded-3xl w-[150px]" src={require("public/imgs/Icon.jpg")} alt="Icon" /></Link>
                </div>
            </div>

            <h1 className="font-montserrat text-7xl flex justify-center">Anime List</h1>

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

           <Anime_Cards_List userId={id} listAnimes={listAnime}/>

            <div className="mt-16">
                <Ender/>
            </div>
        </div>
    )
}