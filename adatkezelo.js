export function tablazatRendez(lista,nevIrany) {
    lista.sort(function(a,b) {
        return a.nev.toUpperCase()>b.nev.toUpperCase()? 1*nevIrany: -1*nevIrany;
    })
    return lista
}