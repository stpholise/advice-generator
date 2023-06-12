const adviceId = document.getElementById("id");
const advice = document.getElementById("advice");
const btn = document.getElementById("advice-btn");


async function fetchFun(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()

    adviceId.innerHTML = `${data.slip.id}`
    advice.innerHTML = `"${data.slip.advice}"`
    btn.addEventListener("click", fetchFun)

}
fetchFun();