import React from "react";
import Modal from "react-modal";


export default function Season_Carousel({ animes }) {

  console.log(animes[0])

  let subtitle: { style: { color: string } };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
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
            <figure>
              <img
                className="w-[300px]"
                src={require("public/imgs/Poster1.jpg")}
                alt="Poster1"
              />
            </figure>
            <div className="card-body w-[300px]">
              <h2 className="card-title">Anime_Name</h2>
              <p>Something Something</p>
            </div>
          </div>
        </Modal>
      </div>

      <img src={"imgs/anime_" + animes[0].id + ".png"} alt="Pee" />
      
    </div>
  );
}
