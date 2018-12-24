import React from "react";

import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaGooglePlus from "react-icons/lib/fa/google-plus";
import FaEnvelope from "react-icons/lib/fa/envelope";
import FaPinterest from "react-icons/lib/fa/pinterest";
import FaLinkedin from "react-icons/lib/fa/linkedin";

import { ShareButtonCircle, ShareBlockStandard } from "react-custom-share";

export default props => {
  const shareBlockProps = {
    url: "https://mars.dak.sh",
    button: ShareButtonCircle,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "Email", icon: FaEnvelope },
      { network: "Linkedin", icon: FaLinkedin }
    ],
    text: "Find the time on Mars using MarsTime!",
    longtext:
      ""
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};
