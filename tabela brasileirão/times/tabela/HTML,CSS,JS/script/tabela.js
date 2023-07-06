function creategame(play1,hour,play2){
    return `
    <li>
    <img src="./img/icon-${play1}.png" 
    alt="Bandeira do ${play1}"/>
    <strong>${hour}</strong>
    <img src="./img/icon-${play2}.png" 
    alt="Bandeira do ${play2}"/>
    `
}
let delay = -0.4;
function Createcard(date,day,games){
    delay = delay +0.4;
    return `
    <div class="card" style= "animation-delay":${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML =
Createcard("05/07","Quarta-Feira",creategame("corinthians", "21:00","palmeiras"))