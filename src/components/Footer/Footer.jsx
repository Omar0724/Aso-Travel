import React from 'react' 
import './footer.css'
import video2 from '../../Assets/vd.mp4'
import {FiSend} from'react-icons/fi'
import {MdOutlineTravelExplore} from'react-icons/md'
import {FaFacebookF} from'react-icons/fa'
import {AiFillYoutube} from'react-icons/ai'
import {FiChevronRight} from'react-icons/fi'

 
const Footer = () => {

return (

<section className='footer'>


<div className="videoDiv"> |<video src={video2} loop autoPlay muted type="video/mp4"></video>
</div>
<div className="secContent container">
    <div className="contactDiv flex">
        <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>travel with us</h2>
        </div>
        <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' /> 
            <button className='btn flex' type='submit'>  Send <FiSend className='icon'/></button>
        </div>
    </div>
    <div className="footerCard flex">
        <div className="footerIntro flex"> 
            <div className="logoDiv">
                <a href="/" className='logo flex'><MdOutlineTravelExplore className="icon"/> Travel.</a>
            </div>
            <div className="footerParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia facilis neque modi deleniti odit 
                cumque est dolore molestiae necessitatibus enim rerum, nemo eligendi culpa? Repellendus magnam ipsa expedita debitis.
            </div>
            <div className="footerSocials">
                <FaFacebookF className="icon"/>
                <AiFillYoutube className="icon"/>
            </div>
        </div>
    </div>
    {/* <div className="footer Links grid">
        <div className="linkGroup">
            <span className="grouptitle">OUR AGENCY</span>
            <li className="footer List flex">
                <FiChevronRight className="icon" />Services
            </li>
            <li className="footer List flex">
                <FiChevronRight className="icon" />insurance
            </li>
            <li className="footer List flex">
                <FiChevronRight className="icon" />Agency
            </li>
            <li className="footer List flex">
                <FiChevronRight className="icon" />Tourism
            </li>

        </div>

    </div> */}
    <div className="footerDiv flex">
        <small>BEST TRAVEL WEBSITE THEME</small>
        <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
    </div>

</div>


</section>

)}
export default Footer
