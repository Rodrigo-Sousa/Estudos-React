// Função para obter a idade, a partir de uma dta

export function getAgeFrom(birthDate) {
  // Verificando se não há registro
  if (!birthDate) {
    // Retornando um "alerta para o usuário"
    return "?";
  }

  // Quebrando os dads, em um array, com cada elemento separado.
  const [birthYear, birthMonth, birthDay] = birthDate.split("-");

  // Data de hoje - função do javaScirpt
  const today = new Date();

  // Pegando o ano
  const todayYear = today.getFullYear();
  // Janeiro é considerado 0
  const todayMonth = today.getMonth() + 1;
  // Pegando o dia
  const todayDay = today.getDate();

  // Variável para cálcular a idade.
  const age = todayYear - parseInt(birthYear, 10);

  // Condições
  if (parseInt(birthMonth, 10) > todayMonth) {
    // Retornar a idade -1, pois não correndeu ao mês ainda
    return age - 1;
  }

  // Verificando se o mês é igual ao mês atual, mas se a data é maior do  que o dia de hoje
  if (
    parseInt(birthMonth, 10) === todayMonth &&
    parseInt(birthDay) > todayDay
  ) {
    return age - 1;
  }

  return age;
}
