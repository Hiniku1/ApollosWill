import { Link } from "@remix-run/react";

export default function Navbar({userName, userId}: any ) {
    return (
        <div className='w-screen h-[75px] bg-smooth-blue'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center pl-4'>
                    <Link to="/"><h1 className='font-quicksand mr-4 text-[24px]'>Apollo's Will</h1></Link>
                    <ul className='hidden md:flex font-montserrat'>
                        <li><Link to={"/search_page/" + userId}>Anime Search</Link></li>
                        <li>Industry</li>
                        <li>About</li>
                    </ul>
                </div>

                <div className="flex items-center">
                    <h1 className="pr-4">{userName}</h1>
                    <div className="flex w-[130px] h-[130px] bg-smooth-blue items-center rounded-3xl justify-center mt-12 mr-10 z-10">
                        <Link to={"/list/" + userId}><img className="rounded-3xl w-[100px]" src={require("public/imgs/Icon.jpg")} alt="Icon"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
