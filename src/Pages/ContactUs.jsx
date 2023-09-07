import GetInTouch from "../Components/Contact"
import FooterLinks from "./Footer"
import HeaderMenu from "./Navbar"

function ContactUs(){
    return(
        <div className="contactUs">
            <HeaderMenu />
            <div className="contactus_div">
                <GetInTouch />
            </div>
            <FooterLinks />
        </div>
    )
}

export default ContactUs