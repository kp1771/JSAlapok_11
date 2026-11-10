let focim = document.getElementById("focim")
focim.textContent="Mátrix rendszer"
let statuszElemek=document.getElementsByClassName("statuszszoveg")
console.log(statuszElemek.lenght)

statuszElemek[0].textContent="Rendszer Ellenorzese folyamatba"
statuszElemek[1].textContent="Kapcsolódás a hálózathoz..."

const statuszElemek = document.querySelectorAll(".listaelem")

statuszElemek[1].textContent ="Szerver állapot"

console.log(statuszElemek[0])

statuszElemek[0].textContent ="Szerver állapot: ONLINE"

const nevInput = document.querySelector("#jatekos-nev-input")

const eredmenyDiv = document.getElementById("eredmeny")

const inditoGomb = document.querySelector("#indito-gomb")

inditoGomb.addEventListener("click", function(){
    const gombSzovege = inditoGomb.textContent;
    const jatekosNev = nevInput.value;
    eredmenyDiv.textContent = `üdvözöllek, ${jatekosNev}! Végrehajtott akcio:, ${inditoGomb}`;

})









