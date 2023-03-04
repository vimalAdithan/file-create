const fs = require("fs");
let [, , files] = process.argv;
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
let date = "" + (day + "-" + month + "-" + year);

let time =
  "" +
  (currentDate.getHours() +
    "-" +
    currentDate.getMinutes() +
    "-" +
    currentDate.getSeconds());
let arr = "Date-" + date + " Time-" + time;
console.log(arr);

let timestamp = Math.floor(new Date().getTime() / 1000);
let quote = "" + timestamp;
Check(files);
function Check(files) {
  if (files > 50) {
    console.log("File count is max");
    return;
  }

  for (let i = 1; i <= files; i++) {
    setTimeout(() => {
      fs.writeFile(`./${arr}.txt`, quote, (res) => {
        console.log("Writing finished");
      });
    }, 4000);
  }
}
