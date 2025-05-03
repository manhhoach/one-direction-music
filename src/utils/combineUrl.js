import config from "./../config"


export default function combineUrl(url) {
   if (!url) return null;
   return `${config.baseUrl}/${url.replace("/", "")}`;
}