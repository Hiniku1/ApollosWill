import React, { useState } from "react";
import Modal from "react-modal";

export default function List_Carousel({ listAnimes }: any) {
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

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className="carousel w-full">
      <div className="">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className=""
        >
          <div className="card card-side bg-base-100 shadow-xl h-[500px] mr-10">
                    <figure><img className="w-[300px]" src={"imgs/poster_" + listAnimes[0].id_anime + ".png"} alt="Poster1" /></figure>
                    <div className="card-body w-[300px]">
                        <h2 className="card-title">Anime_Name</h2>
                        <p>Something Something</p>
                    </div>
                </div>
          
        </Modal>
      </div>

      <div
        id="seasonW-1"
        className="carousel-item relative w-full scroll-mt-36"
      >
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + listAnimes[0].id_anime + ".png"}
          alt="Poster1"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + listAnimes[0].id_anime + ".png"}
          alt="Poster2"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + listAnimes[0].id_anime + ".png"}
          alt="Poster3"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={"imgs/poster_" + listAnimes[0].id_anime + ".png"}
          alt="Poster4"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster5.jpg")}
          alt="Poster5"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#seasonW-4" className="btn btn-circle">
            ❮
          </a>
          <a href="#seasonW-2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div
        id="seasonW-2"
        className="carousel-item relative w-full scroll-mt-36"
      >
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster1.jpg")}
          alt="Poster1"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster2.jpg")}
          alt="Poster2"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster3.jpg")}
          alt="Poster3"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster4.jpg")}
          alt="Poster4"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster5.jpg")}
          alt="Poster5"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#seasonW-1" className="btn btn-circle">
            ❮
          </a>
          <a href="#seasonW-3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div
        id="seasonW-3"
        className="carousel-item relative w-full scroll-mt-36"
      >
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster1.jpg")}
          alt="Poster1"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster2.jpg")}
          alt="Poster2"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster3.jpg")}
          alt="Poster3"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster4.jpg")}
          alt="Poster4"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster5.jpg")}
          alt="Poster5"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#seasonW-2" className="btn btn-circle">
            ❮
          </a>
          <a href="#seasonW-4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div
        id="seasonW-4"
        className="carousel-item relative w-full scroll-mt-36"
      >
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster1.jpg")}
          alt="Poster1"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster2.jpg")}
          alt="Poster2"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster3.jpg")}
          alt="Poster3"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster4.jpg")}
          alt="Poster4"
        />
        <img
          onClick={openModal}
          className="w-[250px] h-[350px] pl-16"
          src={require("public/imgs/Poster5.jpg")}
          alt="Poster5"
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#seasonW-3" className="btn btn-circle">
            ❮
          </a>
          <a href="#seasonW-1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
