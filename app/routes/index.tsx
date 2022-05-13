import News from "./components/news/News";
import Navbar from "./components/navbar/Navbar";
import Season_W from "./components/anime_seasons/Season_W";
import Season_Sp from "./components/anime_seasons/Season_Sp";
import Season_Su from "./components/anime_seasons/Season_Su";
import Season_F from "./components/anime_seasons/Season_F";
import Ender from "./components/ender/Ender";

import { pool } from "../database/db.server"

import mariadb from "mariadb";
import MinAnime from "./components/min_anime/min_anime";

export const loader = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    
    const res = await conn.query("SELECT * FROM `test`")
    console.log(res[0])
  } finally {
    if (conn) conn.release(); //release to pool
  }
  return null;
};

export default function Index() {
  return (
    <div className="bg-smooth-pink">
      
      <Navbar />

      {/* the div where the News carousel goes */}
      <div className="w-screen h-[500px] flex items-center justify-center">
        <div className="w-[900px] h-[350px] flex">
          <News />
        </div>
      </div>

      {/* the div where the Winter Season Anime goes */}
      <h1 className="pl-20 pb-5 font-quicksand text-[24px]">Winter 2022</h1>
      <div className="w-screen h-full flex items-center justify-center bg-smooth-blue">
        <div className=" w-full h-[500px] flex items-center justify-center">
          <div className="w-full h-[400px]">
            <Season_W />
          </div>
        </div>
      </div>

      <h1 className="pl-20 pb-5 font-quicksand text-[24px] pt-10">
        Spring 2022
      </h1>
      <div className="w-screen h-full flex items-center justify-center bg-smooth-blue">
        <div className=" w-full h-[500px] flex items-center justify-center">
          <div className="w-full h-[400px]">
            <Season_Sp />
          </div>
        </div>
      </div>

      <h1 className="pl-20 pb-5 font-quicksand text-[24px] pt-10">
        Summer 2022
      </h1>
      <div className="w-screen h-full flex items-center justify-center bg-smooth-blue">
        <div className=" w-full h-[500px] flex items-center justify-center">
          <div className="w-full h-[400px]">
            <Season_Su />
          </div>
        </div>
      </div>

      <h1 className="pl-20 pb-5 font-quicksand text-[24px] pt-10">Fall 2022</h1>
      <div className="w-screen h-full flex items-center justify-center bg-smooth-blue">
        <div className=" w-full h-[500px] flex items-center justify-center">
          <div className="w-full h-[400px]">
            <Season_F />
          </div>
        </div>
      </div>

      <Ender />
    </div>
  );
}
