const arr = ["Telangana", "Maharashtra", "Andhra Pradesh", "Assam", "Kerala"];

const navDiv = document.getElementById("nav");

arr.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = item;
    navDiv.appendChild(btn);
})
const mainDiv = document.getElementById("main");

const Telangana = ["- Hyderabad", "- Warangal", "- Karimnagar", "- Medak", "- Sangareddy"];

Telangana.forEach((item) => {
    const h3 = document.createElement("h3");
    h3.innerText = item;
    mainDiv.appendChild(h3);
})

const hr = document.createElement("hr");
mainDiv.appendChild(hr);

const mah = ["- Pune", "- Nanded", "- Mumbai", "- Lonavala", "- Nagpur", "- Parbhani"];
mah.forEach((item) => {
    const h3 = document.createElement("h3");
    h3.innerText = item;
    mainDiv.appendChild(h3);
})
const hr1 = document.createElement("hr");
mainDiv.appendChild(hr1);


const And = ["- Vijayawada", "- Kurnool", "- Tirupati", "- Nellore", "- Visakhapatnam"];
And.forEach((item) => {
    const h3 = document.createElement("h3");
    h3.innerText = item;
    mainDiv.appendChild(h3);
})
const hr2 = document.createElement("hr");
mainDiv.appendChild(hr2);

const ass = ["- Jorhat", "- Tezpur", "- Guwahati", "- Haflong", "- Silchar", "- Diphu"];
ass.forEach((item) => {
    const h3 = document.createElement("h3");
    h3.innerText = item;
    mainDiv.appendChild(h3);
})
const hr3 = document.createElement("hr");
mainDiv.appendChild(hr3);

const ker = ["- Kochi", "- Alappuzha", "- Malappuram", "- Kozhokode", "- Kannur", "- Palakkad"];
ker.forEach((item) => {
    const h3 = document.createElement("h3");
    h3.innerText = item;
    mainDiv.appendChild(h3);
})
const hr4 = document.createElement("h3");
mainDiv.appendChild(hr4);
