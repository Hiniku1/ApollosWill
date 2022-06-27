import { Link, useParams } from "@remix-run/react";
import { useState } from "react";
import Anime_Cards_Home from "../components/anime_cards/anime_cards_home";
import Anime_Cards_List from "../components/anime_cards/anime_cards_list";
import Anime_Cards_Search from "../components/anime_cards/anime_cards_search";
import Ender from "../components/ender/Ender";
import Navbar from "../components/navbar/Navbar";

export default function searchAnime() {
    let userId = useParams();

    let [userName, letUserName] = useState()

    let [search, setSearch] = useState("");

    let [found, setFound] = useState();

    let [idk, setIdk] = useState([])

    fetch("http://localhost:3011/searchUserName", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([{
                id: userId.search
            }]),
        })
            .then((data) => {
                return data.json();
            })
            .then((post) => {
                letUserName(post[0].login)
            });



    function gettingSearch(event: {
        target: { value: React.SetStateAction<string> };
    }) {
        setSearch(event.target.value);

    }

    function doSearch() {
        fetch("http://localhost:3011/searchAnime", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                search: search
            }),
        })
            .then((data) => {
                return data.json();
            })
            .then((post) => {
                setIdk(post)

            })
        
    }
    return (
        <div className="bg-smooth-pink">

            <Navbar userName={userName} userId={userId.search} />

            <img className="w-screen h-[500px] z-0 -mb-32" src={require("public/imgs/search_1.jpg")} alt="Wallpaper" />
            <div className="h-full w-full flex justify-center items-center">
                {/* Icon */}
                <div className="flex w-[200px] h-[200px] bg-smooth-pink items-center rounded-3xl justify-center">
                    <img className="rounded-3xl w-[150px]" src={require("public/imgs/Icon.jpg")} alt="Icon" />
                </div>
            </div>

            <h1 className="font-montserrat text-7xl flex justify-center">Search</h1>

            {/* Input thingy search bar */}
            <div className="flex justify-center items-center">
                <div className="form-control w-full flex justify-center items-center">
                    <label className="label">
                        <span className="label-text-"></span>
                    </label>
                    <input type="text" placeholder="Search Anime" className="input input-bordered w-[700px]" onChange={gettingSearch}></input>
                    <button onClick={doSearch}>Search</button>
                    <img src={"imgs/poster_" + + ".png"} alt="" />
                </div>
            </div>

            <Anime_Cards_Search listAnimes={idk} userId={userId.search} />


            <div className="mt-16">
                <Ender />
            </div>
        </div>
    )
}