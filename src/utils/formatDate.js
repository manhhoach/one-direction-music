import dayjs from 'dayjs';

export default function formatDate(inputDate) {
   if (!inputDate) {
      return ''
   }
   const date = dayjs(inputDate);

   const day = date.date();  // Lấy ngày trong tháng
   const month = date.format('MMMM');  // Lấy tên tháng đầy đủ
   const year = date.year();  // Lấy năm

   // Lấy suffix cho ngày (thêm "st", "nd", "rd", "th")
   const suffix = (day >= 10 && day <= 20) ? 'th' : ['st', 'nd', 'rd', 'th'][(day % 10) - 1] || 'th';

   return `${day}${suffix} ${month} ${year}`;
}
