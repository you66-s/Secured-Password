import logo from "../assets/img/Logo.png"
import {Link} from "react-router-dom";
function Header(){
    return (
        <nav className="shadow-lg bg-white w-full flex flex-row justify-between items-center p-5">
            <Link to={`/`}>
                <img src={logo} alt="logo"/>
            </Link>
            <ol className="flex flex-row gap-3">
                <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link to={`/`}>Home</Link></li>
                <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link to={`/add-password`}>add password</Link></li>
                <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link to={`/blog`}>blog </Link></li>
                <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link to={`/how-it-work`}>how it work</Link></li>
                <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link to={`/about-us`}>about us</Link></li>
                <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link to={`/contact-us`}>contact us</Link></li>
            </ol>
            <div className="buttons flex gap-3">
                <button type="button" className="text-white font-bold border-2 border-[#4285F4] bg-[#4285F4] p-3 hover:shadow-lg"><Link to={`/login`}>Login</Link></button>
                <button type="button" className="border-2 border-[#4285F4] font-bold p-3 hover:shadow-lg"><Link to={`/register`}>register</Link></button>
            </div>
        </nav>
    )
}
export default Header;