function Createacc() {
  return (
    <>
    <div className="px-7 py-4">
        <h1>Create an Account</h1>
        <div>
            <button>Continue with Google</button>
            <button>Continue with Apple</button>
        </div>

        <h2>or</h2>

        <div>
            <div>
                <input type="text" name="firstname" id="firstname" placeholder="firstname"/>
                <input type="text" name="lastname" id="lastname" placeholder="lastname"/>
            </div>

            <div>
             <input type="email" name="email" id="email" placeholder="enter email" />  
             <input type="password" name="password" id="password" />   
            </div>
        </div>

        <h3>I have read and agreed to the terms and conditions</h3>

        <button>Create Account</button>
        <h3>Already have an account? <span className="text-red-300">Log In</span></h3>
    </div>
    </>
  )
}

export default Createacc