let rateBtns = document.getElementById("rateBtns");
let rateVal = 0;
rateBtns.addEventListener("click", function (e) {
  rateVal = e.target.innerHTML;
});

function rate() {
  document.querySelector("#ratePage").remove();
  document.querySelector("#ratePage2").style.display = "block";
  document.querySelector(".selected").innerText =
    "You selected " + rateVal + " out of 5";
}
