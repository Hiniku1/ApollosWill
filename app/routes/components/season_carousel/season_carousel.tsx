import React from "react";
import { useState } from "react";
import Modal from "react-modal";

export default function Season_Carousel({ animes }) {
  let [modalAnimePoster, setAnimePoster] = useState("");
  let [modalAnimeName, setAnimeName] = useState("");
  let [modalAnimeDescription, setAnimeDescription] = useState("");
  let [modalAnimeEpisodeCount, setAnimeEpisodeCount] = useState(0);
  let [modalAnimeEpisodeWatched, setAnimeEpisodeWatched] = useState(0);
  let [modalAnimeScore, setAnimeScore] = useState(0);

  function changeModalAnime(id: number) {
    setAnimePoster(animes[id].id)
    setAnimeName(animes[id].en_title)
    setAnimeDescription(animes[id].synopsis)
    setAnimeEpisodeCount(animes[id].episode_count)

    openModal();
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
          <div className="card card-side bg-base-100 shadow-xl h-[500px]">
            <figure>
              <img
                className="w-[300px]"
                src={"imgs/poster_" + modalAnimePoster + ".png"}
                alt="Poster1"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{modalAnimeName}</h2>
              <p>{modalAnimeDescription}</p>
              Pee
              <div className="">
                <div className="justify-center flex">Score</div>
                <div className="justify-center items-center flex">
                  {modalAnimeScore + " / 10"}
                </div>

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

                <div className="justify-center flex">Episodes</div>
                <div className="justify-center items-center flex">
                  {modalAnimeEpisodeWatched + " / " + modalAnimeEpisodeCount}
                </div>

                <div className="card-actions justify-center flex">
                  <button className="w-[50px] bg-smooth-blue" onClick={subEpisode}>-</button>
                  <button className="w-[50px] bg-smooth-blue" onClick={addEpisode}>+</button>
                </div>
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
