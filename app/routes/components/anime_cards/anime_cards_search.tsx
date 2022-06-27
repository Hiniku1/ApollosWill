import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";

import React from 'react';
import Modal from "react-modal";




export default function Anime_Cards_Search({ userId, listAnimes }: any) {
  
  let [whatAnimeId, setWhatAnimeId] = useState(0);
  let [animeTitle, setAnimeTitle] = useState("Anime_Title")
  let [animeSynopsis, setAnimeSynopsis] = useState("Anime_Synopsis")

  /* These are to hidden the buttons when the anime is or isn't on the list */

  let [isAddBtnHidden, setAddBtnHidden] = useState("btn btn-primary")
  let [isUpdateRemoveBtnHidden, setUpdateRemoveBtnHidden] = useState("hidden")
  let [isSynopsisHidden, setSynopsisHidden] = useState("")
  let [isEpisodesScoreHidden, setEpisodesScoreHidden] = useState("hidden")

  /*  These are to get the list data (score, episodes watched and anime state)*/

  let [episodesWatched, setEpisodesWatched] = useState(0)
  let [scoreGiven, setScoreGiven] = useState(0)
  let [animeState, setAnimeState] = useState("")

  /* These are for getting the episode count for the anime */

  let [episodeCount, setEpisodeCount] = useState(0)

  const divs = [];
  let subtitle: { style: { color: string } };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  /* Modal Things */



  function openModal(id: number) {

    console.log(userId)
    /* Searching to see if the anime is on the list */
    fetch("http://localhost:3011/searchAnimeOnList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        userId: userId
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((post) => {
        if (post.isOnList) {
          console.log(post);
          setEpisodesWatched(post.episodesWatched);
          setScoreGiven(post.scoreGiven)
          setAnimeState(post.animeState)

          /* Setting the Buttons Hidden or Visible */
          setAddBtnHidden("hidden")
          setSynopsisHidden("hidden")
          setUpdateRemoveBtnHidden("btn btn-primary")
          setEpisodesScoreHidden("")
        } else {
          setAddBtnHidden("btn btn-primary")
          setSynopsisHidden("")
          setUpdateRemoveBtnHidden("hidden")
          setEpisodesScoreHidden("hidden")
        }
      })



    /* Getting anime info */

    fetch("http://localhost:3011/getAnimeInfo", {
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
        console.log(post)
        setAnimeTitle(post.en_title)
        setAnimeSynopsis(post.synopsis)
        setEpisodeCount(post.episode_count)
      });


    /* Im setting the Anime ID when i click on the img, with this id i can get the right poster */
    setWhatAnimeId(id)

    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  /* Add and Remove anime from the list */

  function addToList() {
    fetch("http://localhost:3011/addAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId: userId
      }),
    });
    setAddBtnHidden("hidden")
    setSynopsisHidden("hidden")
    setUpdateRemoveBtnHidden("btn btn-primary")
    setEpisodesScoreHidden("")
  }

  function removeOfList() {
    fetch("http://localhost:3011/removeAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId: userId
      }),
    });
    setAddBtnHidden("btn btn-primary")
    setSynopsisHidden("")
    setUpdateRemoveBtnHidden("hidden")
    setEpisodesScoreHidden("hidden")
  }

  /* Add and Remove Score and Episodes from the list*/

  function addScore() {
    if (scoreGiven < 10) {
      setScoreGiven(scoreGiven + 1);
    }
  }

  function subScore() {
    if (scoreGiven > 0) {
      setScoreGiven(scoreGiven - 1);
    }
  }

  function addEpisode() {
    if (episodesWatched < episodeCount) {
      setEpisodesWatched(episodesWatched + 1);
    }
  }

  function subEpisode() {
    if (episodesWatched > 0) {
      setEpisodesWatched(episodesWatched - 1);
    }
  }

  /* Getting the Anime State */

  function gettingAnimeState(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setAnimeState(event.target.value);
  }

  /* Saving the List Data */

  function saveData() {
    fetch("http://localhost:3011/postListData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: whatAnimeId,
        animeState: animeState,
        score: scoreGiven,
        episodesWatched: episodesWatched,
        userId: userId
      }),
    });
  }

  /* For Loop to map all the animes on the list */

  for (const anime of listAnimes) {
    divs.push(
      <div className="w-full h-full flex justify-center items-center pt-16 pb-16" key={anime.id}>
        <div className="card card-side bg-base-100 shadow-xl h-32 mr-10">
          <figure>
            <img
              className="w-[91px]"
              src={"../imgs/poster_" + anime.id + ".png"}
              alt="Poster"
              onClick={() => { openModal(anime.id) }}
            />
          </figure>
          <div className="card-body w-[700px]">
            <h2 className="card-title">{anime.en_jp_title}</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
        className={"h-[300px] justify-center items-center rounded-sm"}
      >

        <div className="card bg-base-100 shadow-xl image-full">
          <figure className=" h-[500px]"><img className="w-full h-full" src={"../imgs/banner_" + whatAnimeId + ".png"} alt="Banner" /></figure>
          <div className="card-body">
            <h2 className="card-title"></h2>
            {/* Anime Title */}

            <p>{animeTitle}</p>
            
            {/* Episode and Score (note: when not on list they will be hidden) */}

            <p className={isEpisodesScoreHidden}>
              <div>
                {/* List Episodes */}
                <p>Episodes Watched {<br />}
                  {episodesWatched}/{episodeCount}</p>

                <ul className="flex">
                  <li>
                    <button onClick={subEpisode} className={isUpdateRemoveBtnHidden}>-</button>
                  </li>
                  <li>
                    <button onClick={addEpisode} className={isUpdateRemoveBtnHidden}>+</button>
                  </li>
                </ul>

                {/* List Score */}

                <p>Score {<br />}
                  {scoreGiven}/10</p>

                <ul className="flex">
                  <li>
                    <button onClick={subScore} className={isUpdateRemoveBtnHidden}>-</button>


                  </li>
                  <li>
                    <button onClick={addScore} className={isUpdateRemoveBtnHidden}>+</button>
                  </li>
                </ul>

                {/* List Anime State */}

                <select onChange={gettingAnimeState} value={animeState} className="select w-full max-w-xs">
                  <option disabled selected>Anime State</option>
                  <option>Plan To Watch</option>
                  <option>Watching</option>
                  <option>Completed</option>
                  <option>Dropped</option>
                </select>
              </div>
            </p>

            {/* Anime Synopsis (note: it will be hidden when already on the list) */}

            <p className={isSynopsisHidden}>{animeSynopsis}</p>

            {/* Add to List Button */}

            <div className="card-actions justify-end">
              <button onClick={addToList} className={isAddBtnHidden}>Add To List</button>
            </div>

            {/* Save on the List Button */}

            <div className="card-actions justify-end">
              <button onClick={saveData} className={isUpdateRemoveBtnHidden}>Update</button>
              <button onClick={removeOfList} className={isUpdateRemoveBtnHidden}>Remove</button>
            </div>
          </div>
        </div>
      </Modal>

      <div className="w-full h-full">{divs}</div>
    </div>
  )
}
