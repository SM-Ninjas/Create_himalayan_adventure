import { FaWhatsappSquare } from "react-icons/fa";

function ContactLinks() {
  const whatsappPhoneNumber = "9702542143";

  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}`;
  return (
    <div className="fixed bottom-24 right-8 z-50 p-4 backdrop-blur-md">
      <div>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <FaWhatsappSquare size="48" color="#25d366" />
        </a>
      </div>
    </div>
  );
}

export default ContactLinks;
