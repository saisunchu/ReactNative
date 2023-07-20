const today = new Date();
const formattedDate = today.toLocaleDateString('zh-CN', {day:'2-digit', month:'2-digit', year:'numeric'}).split('/').join('-');
console.log(formattedDate);


