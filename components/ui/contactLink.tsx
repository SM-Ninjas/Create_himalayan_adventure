import { FaWhatsappSquare } from "react-icons/fa";

function ContactLinks() {
    const whatsappPhoneNumber = '984-1128881';

    const whatsappLink = `https://wa.me/${whatsappPhoneNumber}`;
    return (
        <div className="fixed bottom-[5rem] left-5 pt-2 px-2 z-50 bg-white rounded-md shadow-md">
            <div className="mb-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <FaWhatsappSquare size="54" className="60px" color="#25d366" />
                </a>
            </div>
        </div>
    );
}

export default ContactLinks;