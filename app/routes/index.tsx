import News from "./components/news/News";
import Navbar from "./components/navbar/Navbar";
import Ender from "./components/ender/Ender";
import Season_Carousel from "./components/season_carousel/season_carousel";
import List_Carousel from "./components/list_carousel/list_carousel";

import { pool } from "../database/db.server"

let seasonAnime: any;

export const loader = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    
    seasonAnime = await conn.query("SELECT * FROM Anime WHERE MONTH(start_date) = 4 and YEAR(start_date)= 2021 ;")
    //console.log(seasonAnime)
    

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
      <h1 className="pl-20 pb-5 font-quicksand text-[24px]">Your List</h1>
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
            <Season_Carousel>{seasonAnime}</Season_Carousel>
          </div>
        </div>
      </div>

      <Ender />
    </div>
  );
}
