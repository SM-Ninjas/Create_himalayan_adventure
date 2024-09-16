import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import WhatsApp icon
import { IoLogoWhatsapp } from "react-icons/io";
interface ShareButtonsProps {
  title: string;
  imageUrl: string;
  placeUrl: string; // The URL to be shared
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  imageUrl,
  placeUrl,
}) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const shareOnFacebook = () => {
    const url = encodeURIComponent(placeUrl);
    const text = encodeURIComponent(`Check out ${title}!`);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(placeUrl);
    const text = encodeURIComponent(`Check out ${title}!`);
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(placeUrl);
    const text = encodeURIComponent(`Check out ${title}!`);
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    const url = encodeURIComponent(placeUrl);
    const text = encodeURIComponent(`Check out ${title}! ${url}`);
    window.open(`https://wa.me/?text=${text}`, "_blank"); // WhatsApp sharing URL
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={shareOnFacebook}
        onMouseEnter={() => setHoveredButton("facebook")}
        onMouseLeave={() => setHoveredButton(null)}
        className="text-xl"
      >
        <FaFacebook
          size={24}
          className={`${hoveredButton === "facebook" ? "text-blue-600" : "text-gray-500"
            }`}
        />
      </button>

      <button
        onClick={shareOnTwitter}
        onMouseEnter={() => setHoveredButton("twitter")}
        onMouseLeave={() => setHoveredButton(null)}
        className="text-xl"
      >
        <FaTwitter
          size={24}
          className={`${hoveredButton === "twitter" ? "text-blue-400" : "text-gray-500"
            }`}
        />
      </button>

      <button
        onClick={shareOnLinkedIn}
        onMouseEnter={() => setHoveredButton("linkedin")}
        onMouseLeave={() => setHoveredButton(null)}
        className="text-xl"
      >
        <FaLinkedin
          size={24}
          className={`${hoveredButton === "linkedin" ? "text-blue-700" : "text-gray-500"
            }`}
        />
      </button>

      <button
        onClick={shareOnWhatsApp}
        onMouseEnter={() => setHoveredButton("whatsapp")}
        onMouseLeave={() => setHoveredButton(null)}
        className="text-xl"
      >
        <IoLogoWhatsapp
          size={24}
          className={`${hoveredButton === "whatsapp" ? "text-green-500" : "text-gray-500"
            }`}
        />
      </button>
    </div>
  );
};

export default ShareButtons;
