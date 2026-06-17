let saldo = Number(
localStorage.getItem("saldo")
) || 0;

let riwayat = JSON.parse(
localStorage.getItem("riwayat")
) || [];

let currentItem = "";
let currentPrice = 0;

updateSaldo();
updateRiwayat();

function openPage(id){

document
.querySelectorAll(".page")
.forEach(page=>{

page.classList.remove("active");

});

document
.getElementById(id)
.classList.add("active");

document
.querySelectorAll(".bottomNav button")
.forEach(btn=>{

btn.classList.remove("active");

});

if(id==="homePage")
document.getElementById("navHome").classList.add("active");

if(id==="storePage")
document.getElementById("navStore").classList.add("active");

if(id==="saldoPage")
document.getElementById("navSaldo").classList.add("active");

if(id==="historyPage")
document.getElementById("navHistory").classList.add("active");

if(id==="accountPage")
document.getElementById("navAccount").classList.add("active");

}

function topup(amount){

saldo += amount;

saveData();

alert(
"Top Up Berhasil Rp" +
amount.toLocaleString()
);

}

function buyPanel(){

const data =
document
.getElementById("panel")
.value
.split("|");

currentItem =
"Panel " + data[0];

currentPrice =
Number(data[1]);

showCheckout();

}

function buyScript(){

const data =
document
.getElementById("script")
.value
.split("|");

currentItem =
"Script " + data[0];

currentPrice =
Number(data[1]);

showCheckout();

}

function showCheckout(){

document
.getElementById("checkoutInfo")
.innerHTML =

`
Produk:
<b>${currentItem}</b>
<br><br>
Harga:
<b>Rp${currentPrice.toLocaleString()}</b>
`;

document
.getElementById("popup")
.classList.add("show");

}

function closePopup(){

document
.getElementById("popup")
.classList.remove("show");

}

function confirmBuy(){

if(saldo < currentPrice){

alert("Saldo Tidak Cukup");

return;

}

saldo -= currentPrice;

riwayat.unshift(
`${currentItem} - Rp${currentPrice.toLocaleString()}`
);

saveData();

closePopup();

alert(
"Pembelian Berhasil"
);

}

function saveData(){

localStorage.setItem(
"saldo",
saldo
);

localStorage.setItem(
"riwayat",
JSON.stringify(riwayat)
);

updateSaldo();
updateRiwayat();

}

function updateSaldo(){

const el =
document.getElementById(
"saldoText"
);

if(el){

el.innerText =
"Rp" +
saldo.toLocaleString();

}

}

function updateRiwayat(){

const list =
document.getElementById(
"historyList"
);

if(!list) return;

if(riwayat.length===0){

list.innerHTML =
"Belum ada transaksi";

return;

}

list.innerHTML =
riwayat
.map(item=>`
<div class="historyItem">
${item}
</div>
`)
.join("");

}

window.onload = ()=>{

openPage("homePage");

};
