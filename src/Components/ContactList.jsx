import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faLocationDot , faPhone } from '@fortawesome/free-solid-svg-icons'

function ContactList(){
    return(
        <div>
            <div className="mail_info">
            <FontAwesomeIcon icon={faEnvelope} color="#D16D6A" size="xl" />
                <p>mail@globalmetcorp.com</p>
            </div>

            <div className="mail_info">
            <FontAwesomeIcon icon={faPhone} color="#D16D6A" size="xl" />
                <p>+44 (0)208-4234449</p>
            </div>

            <div className="mail_info">
            <FontAwesomeIcon icon={faLocationDot} color="#D16D6A" size="xl" />

                <p>Grove House, 55 Lowlands Road,
Harrow On The Hill, Middlesex,
    HA1 3AW London United Kingdom</p>
            </div>
        </div>
    )
}


export default ContactList