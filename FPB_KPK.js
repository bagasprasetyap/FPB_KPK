// Soal FPB dan KPK


var FPB = (angka1, angka2) => {
    if (angka2 == 0) {
            return angka1;
    } else {
        var sisa = angka1 % angka2;
        return FPB(angka2, sisa);
    } 
}

var KPK = (angka1, angka2) => {
    return (angka1 * angka2) / FPB(angka1,angka2)
}

var FPB_KPK = (angka1, angka2) => {
    console.log(`FPB ${angka1} & ${angka2} = ${FPB(angka1,angka2)}`)
    console.log(`KPK ${angka1} & ${angka2} = ${KPK(angka1,angka2)}`)
}

// console.log(FPB(2,3))
// console.log(KPK(2,3))
console.log(FPB_KPK(2,3))
