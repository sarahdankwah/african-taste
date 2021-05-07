import alwaysfresh from '../image/always_fresh.png'
import superimg from '../image/super.png'
import trans from '../image/trans.png'
import  affordable from '../image/affordable.png'
import { Link } from 'react-router-dom';

import '../landingpage/landingpage.css'
function Landingpage() {

    return (
        <div className="Landingpage1">
             
            <div className="landingpage2">
                <div className="afr" >
                    <h1>AFRICAN TASTE</h1>
                </div>
                <div className="list">
                    <li>Home</li>
                    <li>Market</li>
                    <li>About</li>
                    <li>Contact</li>
                </div>
            </div >
            <div className="landingpage3">
                <h1>SHOP DIRECTLY FROM GHANA MARKET AND HAVE IT DELIVERED TO YOU</h1>
            <div className="mybtn">
                <Link to="/signup">
                        <div/>
                        <button style={{ backgroundColor:"white", width:"100px", height:"30px", fontSize:"20px", fontWeight:"600",borderRadius:"15px"}}>
                            signup
                        </button>
                    </Link>

                    <Link to="/signin">
                        <button style={{ backgroundColor:"white", width:"100px", height:"30px",fontSize:"20px", fontWeight:"600", borderRadius:"15px"}}>
                            signin
                        </button>
                    </Link>
            </div>  
            </div>
            
         
            <div className="landingpage4">
                <div>
                <img src ={trans} alt="vehicle" className="vech" width="100px" height="100px"/>
                    <h3>DELIVERY</h3>
                    <h4>Fast Delivery</h4>
                </div>
                <div>
               
                    <img src ={alwaysfresh}alt="word" className="word" width="100px"height="100px"/>
                    <h3>ALWAYS FRESH</h3>
                    <h4>product Well Package</h4>
                </div>
                <div>
                <img src ={superimg} alt="word" className="word"width="100px"height="100px"/>
                    <h3>SUPERIOR QUALITY</h3>
                    <h4>Quality Product</h4>
                </div>
                <div>
                <img src ={affordable} alt="word" className="word"width="100px"height="100px"/>
                    <h3>Affordable</h3>
                    <h4>At a Lower cost</h4>
                </div>


            </div>
            
        </div>
    )
}
export default Landingpage;