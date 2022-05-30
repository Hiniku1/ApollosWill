import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

export default function Anime_Cards_List(listAnimes: any) {
  const divs = [];
  for (const anime of listAnimes.listAnimes) {
    divs.push(
      <div className="w-full h-full flex justify-center items-center pt-16" key={anime.id}>
        <div className="card card-side bg-base-100 shadow-xl h-32 mr-10">
          <figure>
            <img
              className="w-[91px]"
              src={"imgs/poster_" + anime.id + ".png"}
              alt="Poster"
            />
          </figure>
          <div className="card-body w-[700px]">
            <h2 className="card-title">{anime.en_jp_title}</h2>
            <p>something</p>
          </div>
        </div>
      </div>
    );
  }

  return <div className="w-full h-full">{divs}</div>;
}
