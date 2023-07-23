import { Icon } from "@iconify/react";
import TextInput from "../component/shared/TextInput";
import PasswordInput from "../component/shared/PasswordInput";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Link } from "react-router-dom";
const SignupComponent = () => {
//       const [details,setDetails] = useState({
//          name:"",
//            email:"",
//             password:"",
//  gender :""
//       })
//      const handleChange = (e)=>{
//            const {name,value} = e.target;
//               setDetails({...details,[name]:value})
//      }   
      const handleSubmit = ()=>{
         let obj={email,password,gender,name} 
         fetch(`https://friendly-ant-helmet.cyclic.app/musixmix/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Corrected the header syntax here
            },
            body: JSON.stringify(obj),
        })
            .then((res) => res.json())
            .then((resp) => {
                toast(resp.message);
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
             setEmail("")
              setGender("")
               setPassword("")
                setUsername("")
        
      }
const [email, setEmail] = useState("");
  //const [confirmEmail, setConfirmEmail] = useState("");
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="inputRegion w-full px-4 sm:w-2/3 md:w-1/2 lg:w-1/3 py-10 flex flex-col items-center">
                <div className="font-bold mb-4 text-2xl">
                    Sign up for free to start listening.
                </div>
                <TextInput
                    label="Email address"
                    placeholder="Enter your email"
                    className="my-6"
                     value={email}
                     setValue = {setEmail}
                       name= "email"
                />
                {/* <TextInput
                    label="Confirm Email Address"
                    placeholder="Enter your email again"
                    className="mb-6"
                /> */}
                <TextInput
                    label="Username"
                    placeholder="Enter your username"
                    className="mb-6"
                     value={name}
                     setValue= {setUsername}
                      name = "name"
                />
                <PasswordInput
                    label="Create Password"
                    placeholder="Enter a strong password here"
                     value={password}
                     setValue= {setPassword}
                      name = "password"
                />
               
                <div className="w-full mb-6">
                    <label className="block mb-2 font-semibold text-gray-700">Gender</label>
                    <select
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="w-full flex items-center justify-center my-8">
                    <button className="bg-green-400 font-semibold p-3 px-10 rounded-full"  onClick={(e)=>{e.preventDefault(), handleSubmit()}}>
                        Sign Up
                    </button>
                </div>
                {/* ... other content ... */}
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Already have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold cursor-pointer hover:opacity-75">
                  <Link to="/login">LOG IN INSTEAD</Link>  
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default SignupComponent;
