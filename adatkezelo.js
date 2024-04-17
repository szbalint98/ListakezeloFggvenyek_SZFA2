

export function tablazatRendez(lista,nevIrany) {
    lista.sort(function(a,b) {
        return a.nev.toUpperCase()>b.nev.toUpperCase()? 1*nevIrany: -1*nevIrany; /* rendezés, pozitiv vagy negativ ertekkesl*/
    })
    return lista
}
export function szuresNevszerint(lista,szurtSzoveg){
    const SZURTLISTA=lista.filter(function(elem) {
        return elem.nev.includes(szurtSzoveg)
    })
    console.log(SZURTLISTA)
    return SZURTLISTA
        
    

}
export function szuresSzovegszerint(szoveg) {
    

    const szuroELEM=$("#szNev")
    szuroELEM.on("keyup",function(){
        let szuroszoveg=szuroELEM.val()
        const LISTA=szuresNevszerint(emberekLISTA,szuroszoveg)
        init(LISTA)
})}

function sortorles(){

    const kukaELEM=$(".kuka")
    kukaELEM.on("click",function(event){
        let index=event.target.id
        const LISTA=sortorles(index);
        init()
    })

}
