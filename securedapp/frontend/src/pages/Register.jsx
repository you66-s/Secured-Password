import '../assets/style/register.css'
import ggSignup from '../assets/icons/gg-signp.png'
import fbSignup from '../assets/icons/fb-signup.png'
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
function Register() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pwdConfirmation, setPwdConfirmation] = useState("");
    const [cndConfirmation, setCndConfirmation] = useState(false);
    const newUser = {
        fname: fname,
        lname: lname,
        phoneNbr: phone,
        email: email,
        password: password,
    }
    function handleRegisterForm(event) {
        event.preventDefault()
    }
    return(
        <div className='registe w-full flex flex-row justify-between'>
            <form className=" mr-auto ml-auto" onSubmit={handleRegisterForm}>
                <fieldset className="register-form flex flex-col gap-8 p-3 ml-auto mr-auto">
                    <h1 className="font-bold text-[30px] text-center">Signup</h1>
                    <div className="third-parties-signup flex flex-row gap-3">
                        <span
                            className="google-signup flex flex-row items-center justify-center border-2 rounded-[14px] gap-3 w-1/2 p-4">
                            <img src={ggSignup} alt="gg-signup" width="24px" height="24px"/>
                            <label className="text-black hover:cursor-pointer">Continue with Google</label>
                        </span>
                        <span
                            className="google-signup flex flex-row items-center justify-center border-2 rounded-[14px] gap-3 w-1/2 p-4">
                            <img src={fbSignup} alt="fb -signup" width="24px" height="24px"/>
                            <label className="text-black hover:cursor-pointer">Continue with facebook</label>
                        </span>
                    </div>
                    <div className="divider flex flex-row items-center gap-6">
                        <span className="w-1/2 bg-black h-[0.5px]"></span>
                        <span className="text-black text-center font-bold">Or</span>
                        <span className="w-1/2 bg-black h-[0.5px]"></span>
                    </div>
                    <div className="perso-infos flex flex-row gap-3 justify-between">
                        <div className="fname w-1/2 flex flex-col">
                            <label>first name</label>
                            <input type="text" name="fname" onChange={(e)=> setFname(e.target.value)} className="border-2 p-3 rounded-[6px]"/>
                        </div>
                        <div className="lname w-1/2 flex flex-col">
                            <label>last name</label>
                            <input type="text" name="lname" onChange={(e)=> setLname(e.target.value)} className="border-2 p-3 rounded-[6px]"/>
                        </div>
                    </div>
                    <div className="phone-nbr flex flex-col">
                        <label>Phone number</label>
                        <input type="number" name="phone_nbr" onChange={(e)=> setPhone(e.target.value)} className="border-2 p-3 rounded-[6px]"/>
                    </div>
                    <div className="email flex flex-col">
                        <label>Email</label>
                        <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} className="border-2 p-3 rounded-[6px]"/>
                    </div>
                    <div className="pwd flex flex-col">
                        <label>Password</label>
                        <input type="password" name="pwd" onChange={(e)=>setPassword(e.target.value)} className="border-2 p-3 rounded-[6px]"/>
                    </div>
                    <div className="conf-pwd flex flex-col">
                        <label>Confirm password</label>
                        <input type="password" className="border-2 p-3 rounded-[6px]" onChange={(e)=>setPwdConfirmation(e.target.value)}/>
                    </div>
                    <div className="cnd-checkbox flex flex-row gap-3 text-[12px]">
                        <input type="checkbox" name="cnd_agree" onChange={(e)=>setCndConfirmation(e.target.checked)}/>
                        <label>I’ve read and agree with terms of service and our privacy policy</label>
                    </div>
                    <button type="submit" name="register" className="bg-[#2C73EB] text-white p-3 rounded-[6px]">Signup</button>
                    <span className="text-center text-[#696F79]">Already have an account?<span className="text-[#2C73EB]"><Link to={`/login`}> Login</Link></span></span>
                </fieldset>
            </form>
            <div className="half-bg w-1/2 bg-[#2C73EB]"></div>
        </div>
    )
}

export default Register;