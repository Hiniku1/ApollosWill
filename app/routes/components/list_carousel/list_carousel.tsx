
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Modal from "react-modal";


function pee(){
  return (
    console.log("pee")
  )
}



export default function List_Carousel(){
  
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
    <div>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <div>
            PEe
          </div>
        </Modal>
      
      
      
      <Carousel showThumbs={false} centerMode={true} swipeable={true}>
                <div onClick={openModal} className="w-32">
                    <img src="imgs/poster_1.png" className="h-[500px]"/>
                    <p className="legend" >Cowboy Bebop</p>
                </div>
                <div>
                    <img src="imgs/banner_3.png" className="w-[300px] h-[500px]" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="imgs/banner_1697.png" className="w-[300px] h-[500px]" />
                    <p className="legend">Lucky Stars</p>
                </div>
                
            </Carousel>
    </div>
  )
}