var age = +prompt("Yoshingizni kiriting:")
if ( age <18) {
  alert("Siz hali yoshsiz, o'qishingiz kerak:")
}else if (age <50){
  alert("Ishlashingiz kerak:")
}else if (age <59){
  alert("Yaqinda pensiyaga chiqasiz:")
}else if (age <150){
  alert("Pensionerga o'xshaysiz, agar tirik bo'lsangiz:")
}else{
  alert("Nimadir notog'ri ketb qoldi,Iltimos qaytadan kiriting")
  alert("Tanlovingiz uchun tashakkur")
}