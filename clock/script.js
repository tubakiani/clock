const selectMenu = document.querySelectorAll("select");
const timeBox = document.querySelector(".time");
const setAlarmbtn = document.querySelector("button");
let alarmTime,
  alarmState = "noset";
const rington = new Audio("./files/music.mp3");
const content = document.querySelector(".content");

for (let i = 23; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  timeBox.innerHTML = `${h}:${m}:${s}`;
  if (alarmTime == `${h}:${m}`) {
    rington.play();
    rington.loop = true;
  }
}, 1000);

setAlarmbtn.addEventListener("click", () => {
  alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
  if (alarmTime.includes("Hour") || alarmTime.includes("Minute")) {
    return alert("زمان هشدار را به درستی مشخص کنید");
  }
  checkState(alarmState);
});
function checkState(state) {
  if (state == "noset") {
    content.classList.add("disable");
    setAlarmbtn.innerText = "clear Alarm";
    alarmState = "set";
  } else {
    content.classList.remove("disable");
    alarmTime = "";
    rington.pause();
    alarmState = "noset";
    setAlarmbtn.innerText = "set Alarm";
  }
}
