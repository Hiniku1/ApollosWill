export default function Season_F(){
    return(
        <div className="carousel w-full">
            <div id="seasonSp-1" className="carousel-item relative w-full scroll-mt-36">

                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster1.jpg")} alt="Poster1" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster2.jpg")} alt="Poster2" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster3.jpg")} alt="Poster3" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster4.jpg")} alt="Poster4" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster5.jpg")} alt="Poster5" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#seasonSp-4" className="btn btn-circle">❮</a>
                    <a href="#seasonSp-2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="seasonSp-2" className="carousel-item relative w-full scroll-mt-36">

                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster1.jpg")} alt="Poster1" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster2.jpg")} alt="Poster2" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster3.jpg")} alt="Poster3" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster4.jpg")} alt="Poster4" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster5.jpg")} alt="Poster5" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#seasonSp-1" className="btn btn-circle">❮</a>
                    <a href="#seasonSp-3" className="btn btn-circle">❯</a>
                </div>

            </div>

            <div id="seasonSp-3" className="carousel-item relative w-full scroll-mt-36">

                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster1.jpg")} alt="Poster1" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster2.jpg")} alt="Poster2" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster3.jpg")} alt="Poster3" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster4.jpg")} alt="Poster4" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster5.jpg")} alt="Poster5" />


                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#seasonSp-2" className="btn btn-circle">❮</a>
                    <a href="#seasonSp-4" className="btn btn-circle">❯</a>
                </div>

            </div>

            <div id="seasonSp-4" className="carousel-item relative w-full scroll-mt-36">

                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster1.jpg")} alt="Poster1" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster2.jpg")} alt="Poster2" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster3.jpg")} alt="Poster3" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster4.jpg")} alt="Poster4" />
                <img className="w-[250px] h-[350px] pl-16" src={require("public/imgs/Poster5.jpg")} alt="Poster5" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#seasonSp-3" className="btn btn-circle">❮</a>
                    <a href="#seasonSp-1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}