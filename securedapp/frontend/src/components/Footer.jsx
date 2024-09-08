import {Link} from "react-router-dom";
import logo from '../assets/img/Logo.png'
import '../assets/style/footer.css'

function Footer(){
    return (
        <footer className="flex flex-col p-10 gap-10">
            <div className="newsletter bg-[#0A142F] w-3/4 mr-auto ml-auto p-4 flex flex-row items-center h-32 rounded-[10px] mt-[90px] shadow-xl">
                <h1 className="text-[28px] text-white mr-auto ml-auto">Subscribe Newsletter</h1>
                <form className="email flex flex-col w-1/2 mr-auto ml-auto">
                    <fieldset className="flex flex-row justify-between gap-3 p-3 bg-white ">
                        <input type="email" placeholder="Enter your email " className="w-3/4"/>
                        <button type="submit" className="bg-[#4285F4] text-white text-[12px] rounded-[4px] p-2">Subscribe now</button>
                    </fieldset>
                </form>
            </div>
            <div className="links flex flex-row justify-between w-3/4 items-center mr-auto ml-auto">
                <ol className="navigation flex flex-row gap-5 items-center">
                    <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link
                        to={`/`}>Home</Link></li>
                    <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link
                        to={`/add-password`}>add password</Link></li>
                    <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link
                        to={`/blog`}>blog </Link></li>
                    <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link
                        to={`/how-it-work`}>how it work</Link></li>
                    <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link
                        to={`/about-us`}>about us</Link></li>
                    <li className="hover:border-b-2 hover:border-b-[#4285F4] hover:cursor-pointer"><Link
                        to={`/contact-us`}>contact us</Link></li>
                </ol>
                <div className="socials flex flex-row gap-5 items-center justify-between">
                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/24/0a142f/twitterx--v2.png"
                         alt="twitterx--v2"/>
                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/24/0a142f/facebook-new.png"
                         alt="facebook-new"/>
                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/24/0a142f/instagram-new--v1.png"
                         alt="instagram-new--v1"/>
                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/24/0a142f/youtube-play.png"
                         alt="youtube-play"/>
                </div>
            </div>
            <span className="divider w-3/4 bg-[#2B3D51] h-[0.5px] mr-auto ml-auto"></span>
            <div className="last-part w-3/4 flex flex-row items-center justify-between mr-auto ml-auto">
                <p>&copy;Secured Password, All right reserved.</p>
                <img src={logo} alt="logo"/>
                <ol className="flex flex-row justify-between gap-3">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ol>
            </div>
        </footer>
    )
}

export default Footer;