//monto previsto.
const montoPrevisto = 5;
//crear variable para guardar el numero de ordenes de un dia 

const ordenesEfectivas = 11;

const diaMes = 4

function proyectarCapacidad() {
// si las órdenes superaron el monto previsto
if(ordenesEfectivas > montoPrevisto) {
console.log ("Debes incrementar la capacidad en el siguiente dia")
} else if (ordenesEfectivas < montoPrevisto ) {

console.log("Debes reducir la capacidad")
} else {
    console.log ("Estas bien, Carlos... Sigue Asi")
}
}
proyectarCapacidad()
const hoyEs = (diaMes % 2)

function DiaParOImpar(){
    if (hoyEs == 0) {
        console.log ("Hoy fue dia par. Carlos por lo tanto mañana debes REDUCIR tu capacidad") ;
      } else {
        console.log ("Hoy es dia impar. Carlos por lo tanto mañana debes AUMENTAR tu capacidad") ;
      }
       }
DiaParOImpar()

//function demandaPrevista(){
//    if ()
//}