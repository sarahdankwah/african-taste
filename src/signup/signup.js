import './signup.css'
function Signup() {

    return (
        <div className="mainsignup">

            <div className='colordiv'>
               
            </div>
            <form className='formcontainer'>
                 <div className='section formsection1'>
                    <h1>Welcome to African Taste </h1>
                    <p>shop directly from ghana market and have it delivered to you</p>
                 </div>

                 <div className='section formsection2'>
                    <label>Username:</label>
                    <input type='text'></input>

                    <label>E-mail:</label>
                    <input type='email'></input>

                    <label>Password:</label>
                    <input type='password'></input>
                 </div>

                 <div className='section fomrsection3'>
                    <button>Sign Up</button>
                 </div>



            </form>
        </div>


    )
}
export default Signup;