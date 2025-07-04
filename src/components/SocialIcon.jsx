import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoInstagram, BiLogoApple, BiLogoAmazon } from 'react-icons/bi';

// Map các platform key sang icon tương ứng
const iconMap = {
   facebook: BiLogoFacebook,
   x: BiLogoTwitter,
   twitter: BiLogoTwitter,  // thêm twitter cho dự phòng
   instagram: BiLogoInstagram,
   youtube: BiLogoYoutube,
   itunes: BiLogoApple,
   apple: BiLogoApple,       // thêm apple cho dự phòng
   amazon: BiLogoAmazon,
};

const SocialIcon = ({ icon, size = 24, color = 'currentColor', ...props }) => {
   if (!icon) return null;
   const key = icon.trim().toLowerCase();
   const Icon = iconMap[key];
   if (!Icon) return null;

   return <Icon size={size} color={color} {...props} />;
};

export default SocialIcon;
