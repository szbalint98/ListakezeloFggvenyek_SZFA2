export function tablazatOsszeallit(lista){

    /*osszealit egy szoveges formatumot, minden sor vegen legyen kuka
    !!! a for in ciklus az aktualis objektumon iterál végig, a "key"--> az adott objektum tulajdonsága !!!
    */
    let txt=""
    txt+="<table><tr><th>Név</th><th>Kor</th><th>Nem</th></tr>"
    lista.forEach((element) => {
        txt+=`<tr>`
        for (const key in element) {
            
            txt+=`<td>${element[key]}</td>`

        }
        txt+=`<td>🗑️</td>
        </tr>`
    });
    
    txt+="<table>"
    return txt
}
export function megjelenites(txt){
    const adatokELEM=$(".adatok");
    adatokELEM.html(txt);
}