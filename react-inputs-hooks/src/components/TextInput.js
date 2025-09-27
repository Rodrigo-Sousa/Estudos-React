// Criação do componente TextInput, desestruturando os dados que ele recebe
export default function TextInput({
    // Label da descrição
  labelDescription = "Descrição do label",
//   Input
  inputText = "Texto do input",
//   Se não for preenchido nada, ficar como null
  onChangeInput = null,
}) {
  // Criando a função, que verifica se há algo dentro do onChangeInput, e modifica, caso haja
  function handleChangeInput({currentTarget}) {
    // Desestruturando e pegando a propriedade currentTarget. Verificando se ela possui algo
    if (onChangeInput) {
        // Variável para modificar o valor, pelo que foi digitado
      const newValue = currentTarget.value;
    //   Passando esse valor, para o onChange e passando por props, para o App.js
      onChangeInput(newValue)
    }
  }
  return (
    <div className="flex flex-col">
      <label className="mb-2" htmlFor="inputName">
        {labelDescription}
      </label>
      <input
        type="text"
        value={inputText}
        onChange={handleChangeInput}
        className="border-2"
        id="inputName"
        autoFocus
      />
    </div>
  );
}
