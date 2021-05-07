import './signin.css'
function Signin() {

    return (
        <div className="mainsignin">

            <div className='colordiv'>
               
            </div>
            <form className='container'>
                 <div className='section1'>
                    <h1>Welcome to African Taste</h1>
                    <p>Shop directly from Ghana market and have it delivered to you.</p>
                 </div>

                 <div className='section2'>
                    <label>Username:</label>
                    <input type='text'/>

                    <label>E-mail:</label>
                    <input type='email'/>

                    <label>Password:</label>
                    <input type='password'/>
                 </div>
                    <div className="inbut">
                    <button style={{backgroundColor:"orangered", justifyContent:"center", alignItems:"center"}}>Sign in</button>
                    </div>



            </form>
        </div>


    )
}
export default Signin;