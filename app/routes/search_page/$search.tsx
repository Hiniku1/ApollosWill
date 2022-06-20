import { Link, useParams } from "@remix-run/react";
import { useState } from "react";
import Anime_Cards_Home from "../components/anime_cards/anime_cards_home";
import Anime_Cards_List from "../components/anime_cards/anime_cards_list";
import Ender from "../components/ender/Ender";
import Navbar from "../components/navbar/Navbar";

export default function searchAnime() {
    let userId = useParams();

    let [search, setSearch] = useState("");
    
    let [found, setFound] = useState();

    let [idk, setIdk] = useState([])
    
    function gettingSearch(event: {
        target: { value: React.SetStateAction<string> };
    }) {
        console.log(event.target.value);
        setSearch(event.target.value);
        
    }

    function doSearch(){
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
    console.log(idk, typeof idk)
    return (
        <div className="bg-smooth-pink">

            <Navbar userId={userId.search} />

            <img className="w-screen h-[500px] z-0 -mb-32" src={require("public/imgs/search_1.jpg")} alt="Wallpaper" />
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
                    <input type="text" placeholder="Search Anime" className="input input-bordered w-[700px]" onChange={gettingSearch}></input>
                    <button onClick={doSearch}>Search</button>
                    <img src={"imgs/poster_" +  + ".png"} alt=""/>
                </div>
            </div>

            <Anime_Cards_Home listAnimes={idk} userId={userId.search} />


            <div className="mt-16">
                <Ender />
            </div>
        </div>
    )
}