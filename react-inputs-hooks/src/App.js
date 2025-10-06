// Import direto do React
import { useState } from "react";
// Importando componentes
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import { getAgeFrom } from "./services/dateHelpers";

export default function App() {
  // Criação do useSate (desestruturando), para manipular os dados, informando um estado inicial, e modificando com o que for declaro no input
  const [name, setName] = useState("Rodrigo");
  const [birthDate, setBithDate] = useState("1998-12-25");

  // Função que irá receber o conteúdo do currentTarget.value, e modificar a variável name do useState
  function handleChangeName(newName) {
    // Recebendo o parâmetro do nome, que foi preenchido no campo input do TextInput
    setName(newName);
  }

    function handleInputBirthDate(birthDateInput) {
      console.log(birthDateInput);
      setBithDate(birthDateInput);
  }

  return (
    <div>
      <Header>
        {/* children, enviado via props */}
        React - Introdução
      </Header>

      <Main>
        <TextInput
          labelDescription="Digite o seu nome: "
          inputText={name}
          onChangeInput={handleChangeName}
          autoFocus
        />

        <DateInput labelDescription="Digite a sua data de nascimento: "
        inputDate={birthDate}
        onChangeInput={handleInputBirthDate}/>

        <p className="mt-2">
          Olá, {name}, seu nome possui {name.length} caracteres e você tem{" "}
          {getAgeFrom(birthDate)} anos!{" "}
        </p>
      </Main>
    </div>
  );
}
