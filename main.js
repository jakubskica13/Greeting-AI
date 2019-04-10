var today = new Date;
document.write(today);

var hour = 17 //today.getHours();

if (hour < 12 ) {
  document.write("Good Morning!!!")
} else if (hour >= 12 && hour < 17) {
  document.write("Enjoy a super Afternoon!")
} else if (hour >= 17 && hour < 24) {
  document.write("Have A great Evening!!!!!")
}
