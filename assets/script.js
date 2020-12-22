function resetStyle (id) {
    document.getElementById(id).removeAttribute("style");
}

const names = document.querySelectorAll(".name");
for (let name of names) {
  name.addEventListener("click", function (event) {
    const target = event.target;
    console.log(target.classList[1]);
    const idStyle = document.getElementById(target.classList[1]).style;
    idStyle.transform = "rotate(5deg)";
    idStyle.backgroundColor = "#14274e";
    idStyle.color = "#f1f6f9";
    setTimeout(() => {resetStyle(target.classList[1]);}, 700);
  });
}