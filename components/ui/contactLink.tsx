import { FaWhatsappSquare } from "react-icons/fa";

function ContactLinks() {
  const whatsappPhoneNumber = "984-1128881";

  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}`;
  return (
    <div className="fixed bottom-24 right-8 z-50 rounded-full bg-gray-900/60 p-4 backdrop-blur-md">
      <div>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <FaWhatsappSquare size="24" color="#25d366" />
        </a>
      </div>
    </div>
  );
}

export default ContactLinks;
