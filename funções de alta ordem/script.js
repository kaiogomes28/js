const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ['MARIA', 'JOAO', 'ANABELA'];
// -------------------------------------------------------------------------------------------------------------------------------------------------
// Map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados

function dobro(x) {
  return x * 2;
}

function triplo(x) {
  return x * 3;
}

const m1 = list1.map(dobro);
const m2 = list2.map(dobro);
const m3 = list1.map(x => 2 * x);

console.log('MAP ----------------------------------');
console.log(m1);
console.log(m2);
console.log(m3);

