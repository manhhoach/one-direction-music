export default function trimEnd(str, char) {
   return str.replace(new RegExp(`${char}+$`), '');
}