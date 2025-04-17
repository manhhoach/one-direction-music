import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoInstagram } from 'react-icons/bi';

// Định nghĩa iconMap với các platform được hỗ trợ
const iconMap = {
   facebook: BiLogoFacebook,
   twitter: BiLogoTwitter,
   instagram: BiLogoInstagram,
   youtube: BiLogoYoutube,
};

const SocialIcon = ({ icon, ...props }) => {
   const key = icon.trim().toLowerCase();
   const Icon = iconMap[key];
   if (Icon) {
      return <Icon {...props} />;
   }
   return null;
};

export default SocialIcon;