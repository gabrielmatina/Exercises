const newEmployees = (geradorDeIds) => {
  const employees = {
    id1: geradorDeIds('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: geradorDeIds('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: geradorDeIds('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const geradorDeIds = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_'); //toLowerCase deixa todo o texto em letra minuscula, Split separa o texto gerar um array, Join junta o texto
  return {fullName, email: `${email}@betrybe.com`}
}
console.log(newEmployees(geradorDeIds))



const checaNumeros = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 5 + 1);

  return callback(myNumber, number) ? "Lucky day, you won!" : "Try Again!";
};

console.log(lotteryResult(2, checaNumeros));

const number1 = Math.random();
console.log(number1);