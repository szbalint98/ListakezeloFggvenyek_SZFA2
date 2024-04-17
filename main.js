import { emberekLISTA } from "./adat.js";
import { szuresNevszerint, szuresSzovegszerint, tablazatRendez } from "./adatkezelo.js";
import { megjelenites, tablazatOsszeallit } from "./fuggvenyek.js";
/*  jelenítsük meg az adatainkat egy táblázatban az adatok div-ben
az urlap div-ben legyen egy űrlap, amivel ilyen adatokat tudunk a táblázatba beletenni

1. ha a táblázat név fejlécére kattintunk, akkor azon mező szerint 
tudjuk rendezni a táblázatot. 
2. tudjuk törölni a táblázat adott sorát
3. legyen egy szűrőmező, ahova beírva szavakat, tudunk szűrni, név szerint. 

Milyen függvények kellenek? 

1. tablazatOsszeallit(lista)->txt - összeállítja a html kódot szöveges formátumban, minden sor végén legyen egy kuka!
2. megjelenites(txt)->nincs - megjelníti egy html szoveget egy html elemben
3. tablazatbaTesz(lista) - összeszedi az űrlapadatokat, és hozzáfűzi a listához, majd megjeleníti újra a táblázatot. - akkor hívódik meg, ha a Submit gombra kattintunk
4. tablazatRendez(lista) - adott mező szerint rendezi a táblázatot. - akkor hívódik meg, ha a táblázat név fejlécmezőjére kattintunk. Berendezzük a listát, és megjelenítjük újra a táblázatot. 
5. sorTorles(lista, index) - minden sor végén legyen egy kuka, a sor indexével, erre a kukára kattintva töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.  
6. szuresNevSzerint(lista, szurtSzoveg) -> szurtLista - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó. 
Ezután megjelenítjük a szűrt listát az oldalon. 
Akkor fog lefutni, amikor megváltozik a szűrőmező tartalma 
 
 */

let nevIrany=1
init(emberekLISTA)

function init(lista) {
    let txt=tablazatOsszeallit(lista);
    megjelenites(txt)
    nevRendez(lista);
    
    
    
}

function nevRendez(lista) {
    

    const nevELEM=$('.adatok th').eq(0) /*első elem megfogása*/
    nevELEM.on("click",function () {
        const LISTA=tablazatRendez(lista,nevIrany);
        console.log(LISTA)
        nevIrany*=(-1);
        init(LISTA);
})}




