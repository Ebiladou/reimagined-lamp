import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import ig from "../assets/ig.svg"
import google from "../assets/google.svg"
import logo from "../assets/logo.jpeg"
import { Link } from "react-router-dom"

function Entry() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-8 px-14 py-10">
          <h1 className="text-blue-400 text-4xl flex flex-row gap-3 items-center mb-5"> <span className="w-10"><img src={logo} alt="" /></span> TO.DO</h1>
          <div className="flex justify-center gap-2">
            <button className="bg-blue-500 w-48 hover:bg-grey text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Log In
            </button>
            <Link to = "/createaccount">
            <button className="bg-blue-500 w-48 hover:bg-grey text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create Account
            </button>
            </Link>
          </div>

          <div>
            <h2 className="mb-6 mt-5 capitalize text-xl">Welcome back, user!</h2>
            <div className="flex flex-col gap-7">
              <input
              className="border border-black rounded-md p-2 focus:outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="enter your mail"
              />
              <input className="border border-black rounded-md p-2 focus:outline-none" type="password" name="password" id="password" placeholder="........"/>
            </div>
          </div>

          <div>
            <h3 className="flex flex-row text-black justify-center items-center mt-6 text-lg">or continue with<span className="border-b border-black p-2 w-40"></span></h3>
            <div className="flex flex-row gap-4 justify-center items-center mt-8">
                <button className="flex items-center bg-blue-600 text-white p-2 rounded-md space-x-2">
                <img src={facebook} alt="" />
                </button>
                <button className="flex items-center bg-gradient-to-r from-blue-400 via-white-300 to-blue-600 text-white p-2 rounded-md space-x-2">
                <img src={twitter} alt="" />
                </button>
                <button className="flex items-center bg-gradient-to-r from-blue-500 via-green-400 to-yellow-300 text-white p-2 rounded-md space-x-2">
                 <img src={google} alt="" />   
                </button>
                <button className="flex items-center bg-gradient-to-r from-pink-500 via-white-300 to-yellow-300 text-white p-2 rounded-md space-x-2">
                  <img src={ig} alt="" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Entry;