const userInput = document.querySelector("#userInput");
const submitBtn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");
const copyBtn = document.querySelector("#copyBtn");
const copyTooltip = document.querySelector(".ctooltiptext");

function convertLink(link) {
  if (link.length < 40) return;
  if (link.length > 70) {
    let web = link.split("").slice(0, -30).join("");
    web = web + "/video/1";
    clear();
    result.value = web;
    console.log(web);
  } else {
    let web = link.split("").slice(9).join("");
    web = "https://twitter" + web + "/video/1";
    clear();
    result.value = web;
  }
}

submitBtn.addEventListener("click", (e) => {
  copyTooltip.textContent = "Click to copy";
  e.preventDefault();
  if (userInput.value !== "") {
    convertLink(userInput.value);
  }
});

function clear() {
  result.innerText = "";
}

copyBtn.addEventListener("click", () => {
  result.select();
  navigator.clipboard.writeText(result.value);
  if (result.value !== "") {
    copyTooltip.textContent = "Copied";
  }
});
