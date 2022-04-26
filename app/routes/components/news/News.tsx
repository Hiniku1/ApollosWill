export default function News() {
    return (
        <div className="carousel autoplay w-full">
            <div id="slide-news1" className="carousel-item relative w-full scroll-mt-40">
                <img className="w-[1000px] h-[450px]" src={require("public/imgs/Banner1.jpg")} alt="Banner1" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide-news4" className="btn btn-circle">❮</a>
                    <a href="#slide-news2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide-news2" className="carousel-item relative w-full scroll-mt-40">
                <img className="w-[1000px] h-[450px]" src={require("public/imgs/Banner2.jpg")} alt="Banner2" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide-news1" className="btn btn-circle">❮</a>
                    <a href="#slide-news3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide-news3" className="carousel-item relative w-full scroll-mt-40">
                <img className="w-[1000px] h-[450px]" src={require("public/imgs/Banner3.png")} alt="Banner3" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide-news2" className="btn btn-circle">❮</a>
                    <a href="#slide-news4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide-news4" className="carousel-item relative w-full scroll-mt-40">
                <img className="w-[1000px] h-[450px]" src={require("public/imgs/Banner4.jpg")} alt="Banner4" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide-news3" className="btn btn-circle">❮</a>
                    <a href="#slide-news1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>


    )
}
