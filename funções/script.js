function soma1(num1, num2) {
  return num1 + num2;
}

const soma2 = function(num1, num2) {
  return num1 + num2;
}

const soma3 = (num1, num2) => {
  return num1 + num2;
}

const soma4 = (num1, num2) => num1 + num2;

const dobro1 = function(num) {
  return num * 2;
}

const dobro2 = num => num * 2;

// funcao que nao tem um retorno definido, por padrão ela retorna undefined

function mostrarpreco(preco) {
  console.log("preco = " + preco);
}

// Variaveis definidas dentro do escopo da função não vazam escopo

function areaCirculo(raio) {
  const pi = 3.14;
  return pi * raio * raio;
}

// Function hoisting: funções no JS são "movidas" para cima pelo motor do javascript

teste(10);

function teste(x) {
  console.log("TESTE = " + x);
} 

// Funcoes podem ser passadas como argumento 

function triplo(num) {
  return num * 3;
}

function aplicar(f, num) {
  const result = f(num);
  console.log("RESULTADO = " + result);
}

aplicar(triplo, 10);
aplicar(dobro1, 10);