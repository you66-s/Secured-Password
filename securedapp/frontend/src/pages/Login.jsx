import '../assets/style/login.css'
import {Link} from "react-router-dom";
import ggSignup from "../assets/icons/gg-signp.png";
import fbSignup from "../assets/icons/fb-signup.png";
function Login(props) {
    return(
        <div className='login w-full flex flex-row justify-between'>
            <form method="POST" className="flex flex-col p-3">
                <fieldset className="login-form flex flex-col w-3/4 gap-10">
                    <h1 className="font-bold text-[30px] text-center">Login</h1>
                    <div className="third-parties-signup flex flex-row gap-3">
                        <span className="google-signup flex flex-row items-center justify-center border-2 rounded-[14px] gap-3 w-1/2 p-4">
                            <img src={ggSignup} alt="gg-signup" width="24px" height="24px"/>
                            <label className="text-black text-[16px] hover:cursor-pointer">Continue with Google</label>
                        </span>
                        <span className="facebook-signup flex flex-row items-center justify-center border-2 rounded-[14px] gap-3 w-1/2 p-4">
                            <img src={fbSignup} alt="fb -signup" width="24px" height="24px"/>
                            <label className="text-black text-[16px] hover:cursor-pointer">Continue with facebook</label>
                        </span>
                    </div>
                    <div className="divider flex flex-row items-center gap-6">
                        <span className="w-1/2 bg-black h-[0.5px]"></span>
                        <span className="text-black text-center font-bold">Or</span>
                        <span className="w-1/2 bg-black h-[0.5px]"></span>
                    </div>
                    <p className="text-[18px] text-[#8692A6] text-center">If you are already a member you can login with your email
                        address and password.</p>
                    <div className="flex flex-col">
                        <label className="text-[#696F79] text-[16px]">Email address</label>
                        <input type="text" className="border-2 p-3 rounded-[6px]"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#696F79] text-[16px]">Password</label>
                        <input type="password" className="border-2 p-3 rounded-[6px]"/>
                    </div>
                    <span className=" flex flex-row items-center gap-3">
                        <input type="checkbox" name="rememberMe"/>
                        <label>Remember me</label>
                    </span>
                    <button type="button" className="bg-[#2C73EB] text-white p-3 rounded-[6px]">Login</button>
                    <span className="text-center text-[#696F79]">Dont have an account?<span
                        className="text-[#2C73EB]"><Link to={`/register`}> Sign up here</Link></span></span>
                </fieldset>
            </form>
            <div className="w-1/2 bg-[#2C73EB]"></div>
        </div>
    )
}

export default Login;