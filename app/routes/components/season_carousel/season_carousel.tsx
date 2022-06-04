import React from "react";
import { useState } from "react";
import Modal from "react-modal";

export default function Season_Carousel({ animes, loginId }: any) {

  let [animeState, setAnimeState] = useState("");
  let [animeId, setListAnimeId] = useState(0);
  let [modalAnimeId, setAnimeId] = useState("");
  let [modalAnimeName, setAnimeName] = useState("");
  let [modalAnimeDescription, setAnimeDescription] = useState("");
  let [modalAnimeEpisodeCount, setAnimeEpisodeCount] = useState(0);
  let [modalAnimeEpisodeWatched, setAnimeEpisodeWatched] = useState(0);
  let [modalAnimeScore, setAnimeScore] = useState(0);
  let [isEpisodeHidden, setEpisodeHidden] = useState("hidden");
  let [isAddAnimeHidden, setAddAnimeHidden] = useState("btn");
  let [isStateHidden, setStateHidden] = useState("hidden")

  let listData = [
    {
      id: animes[animeId].id,
      animeState: animeState,
      score: modalAnimeScore,
      episodesWatched: modalAnimeEpisodeWatched,
      userId: loginId
    },
  ];

  function changeModalAnime(id: number) {
    fetch("http://localhost:3011/searchAnimeOnList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: animes[id].id,
        userId: loginId
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((post) => {
        if (post == true) {
          fetch("http://localhost:3011/getEpisodesAndScore", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: animes[id].id,
              userId: loginId
            }),
          })
            .then((data) => {
              return data.json();
            })
            .then((post) => {
              console.log(post);
              setAnimeEpisodeWatched(post.episodes_watched);
              setAnimeScore(post.rating)

            });

          console.log("ta na lista");
          console.log(loginId)
          setEpisodeHidden("");
          setAddAnimeHidden("hidden");
          setStateHidden("justify-center flex")
        } else {
          console.log("não ta na lista");
          setEpisodeHidden("hidden");
          setAddAnimeHidden("btn");
          setStateHidden("hidden")
        }
      });

    setAnimeId(animes[id].id);
    setAnimeName(animes[id].en_title);
    setAnimeDescription(animes[id].synopsis);
    setAnimeEpisodeCount(animes[id].episode_count);
    
    setListAnimeId(id);
    openModal();
  }

  function gettingAnimeState(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setAnimeState(event.target.value);

  }

  function saveData() {
    fetch("http://localhost:3011/postListData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listData[0]),
    });
  }

  function addToList() {
    fetch("http://localhost:3011/addAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: animes[animeId].id,
        userId: loginId
      }),
    });

    setEpisodeHidden("");
    setAddAnimeHidden("hidden");
    setStateHidden("justify-center flex")
  }

  function removeOfList(){
    fetch("http://localhost:3011/removeAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: animes[animeId].id,
        userId: loginId
      }),
    });
    
    
    setEpisodeHidden("hidden");
    setAddAnimeHidden("btn");
    setStateHidden("hidden")
  }

  function addScore() {
    if (modalAnimeScore < 10) {
      setAnimeScore(modalAnimeScore + 1);
    }
  }

  function subScore() {
    if (modalAnimeScore > 0) {
      setAnimeScore(modalAnimeScore - 1);
    }
  }

  function addEpisode() {
    if (modalAnimeEpisodeWatched < modalAnimeEpisodeCount) {
      setAnimeEpisodeWatched(modalAnimeEpisodeWatched + 1);
    }
  }

  function subEpisode() {
    if (modalAnimeEpisodeWatched > 0) {
      setAnimeEpisodeWatched(modalAnimeEpisodeWatched - 1);
    }
  }

  let subtitle: { style: { color: string } };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="carousel w-full">
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <div className="card card-side bg-base-100 h-[500px]">
            <figure>
              <img
                className="w-[300px] h-[500px]"
                src={"imgs/poster_" + modalAnimeId + ".png"}
                alt="Poster1"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{modalAnimeName}</h2>
              <p>{modalAnimeDescription}</p>
              <div className={isAddAnimeHidden} onClick={addToList}>
                Add to List{" "}
              </div>
              {/* add to list button */}

              <div className="card-actions justify-center flex">
                <datalist id="states">
                  <option value={"Watching"} />
                  <option value={"Plan To Watch"} />
                  <option value={"Completed"} />
                  <option value={"On Hold"} />
                  <option value={"Dropped"} />
                </datalist>
                <div className={isStateHidden}>Anime State</div>
                <form>
                  <input
                    onChange={gettingAnimeState}
                    list="states"
                    className={isStateHidden}
                  ></input>
                </form>
              </div>

              <div className={isEpisodeHidden}>
                <div className="justify-center flex">Score</div>
                <div className="justify-center items-center flex">
                  {modalAnimeScore + " / 10"}
                </div>
                {/* score thing */}
                <div className="card-actions justify-center flex">
                  <button
                    className="w-[50px] bg-smooth-blue"
                    onClick={subScore}
                  >
                    -
                  </button>
                  <button
                    className="w-[50px] bg-smooth-blue"
                    onClick={addScore}
                  >
                    +
                  </button>
                </div>
                {/* add and remove score */}
                <div className="justify-center flex">Episodes</div>
                <div className="justify-center items-center flex">
                  {modalAnimeEpisodeWatched + " / " + modalAnimeEpisodeCount}
                </div>
                {/* episodes watched */}
                <div className="card-actions justify-center flex">
                  <button
                    className="w-[50px] bg-smooth-blue"
                    onClick={subEpisode}
                  >
                    -
                  </button>
                  <button
                    className="w-[50px] bg-smooth-blue"
                    onClick={addEpisode}
                  >
                    +
                  </button>
                </div>
                {/* add and remove episodes */}

                <div className="card-actions justify-end flex">
                  <div className="btn" onClick={saveData}>
                    Save
                  </div>
                  <div className="btn" onClick={removeOfList}>Remove Anime From List</div>
                </div>

                {/* Remove Anime From List Button */}
              </div>
            </div>
          </div>
        </Modal>
      </div>

      <div id="season-1" className="carousel-item relative w-full scroll-mt-36">
        <img
          onClick={() => changeModalAnime(0)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[0].id + ".png"}
          alt="Poster1"
        />
        <img
          onClick={() => changeModalAnime(1)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[1].id + ".png"}
          alt="Poster2"
        />
        <img
          onClick={() => changeModalAnime(2)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[2].id + ".png"}
          alt="Poster3"
        />

        <img
          onClick={() => changeModalAnime(3)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[3].id + ".png"}
          alt="Poster4"
        />
        <img
          onClick={() => changeModalAnime(4)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[4].id + ".png"}
          alt="Poster5"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#season-3" className="btn btn-circle">
            ❮
          </a>
          <a href="#season-2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="season-2" className="carousel-item relative w-full scroll-mt-36">
        <img
          onClick={() => changeModalAnime(5)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[5].id + ".png"}
          alt="Poster1"
        />
        <img
          onClick={() => changeModalAnime(6)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[6].id + ".png"}
          alt="Poster2"
        />
        <img
          onClick={() => changeModalAnime(7)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[7].id + ".png"}
          alt="Poster3"
        />
        <img
          onClick={() => changeModalAnime(8)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[8].id + ".png"}
          alt="Poster4"
        />
        <img
          onClick={() => changeModalAnime(9)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[9].id + ".png"}
          alt="Poster5"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#season-1" className="btn btn-circle">
            ❮
          </a>
          <a href="#season-3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="season-3" className="carousel-item relative w-full scroll-mt-36">
        <img
          onClick={() => changeModalAnime(10)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[10].id + ".png"}
          alt="Poster1"
        />
        <img
          onClick={() => changeModalAnime(11)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[11].id + ".png"}
          alt="Poster2"
        />
        <img
          onClick={() => changeModalAnime(12)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[12].id + ".png"}
          alt="Poster3"
        />
        <img
          onClick={() => changeModalAnime(13)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[13].id + ".png"}
          alt="Poster4"
        />
        <img
          onClick={() => changeModalAnime(14)}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + animes[14].id + ".png"}
          alt="Poster5"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#season-2" className="btn btn-circle">
            ❮
          </a>
          <a href="#season-1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
