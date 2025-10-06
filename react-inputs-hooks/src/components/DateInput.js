// Criação do componente DateInput, desestruturando os dados que ele recebe
export default function DateInput({
  // Label da descrição
  labelDescription = "Descrição do label",
  //   Input
  inputDate = "1998-10-03",
  //   Se não for preenchido nada, ficar como null
  onChangeInput = null,
  id = "id_do_input_date",
  autoFocus = false,
}) {
  // Criando a função, que verifica se há algo dentro do onChangeInput, e modifica, caso haja
  function handleChangeInput({ currentTarget }) {
    // Desestruturando e pegando a propriedade currentTarget. Verificando se ela possui algo
    if (onChangeInput) {
      // Variável para modificar o valor, pelo que foi digitado
      const newValue = currentTarget.value;
      //   Passando esse valor, para o onChange e passando por props, para o App.js
      onChangeInput(newValue);
    }
  }
  return (
    <div className="flex flex-col">
      <label className="mb-2" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        type="date"
        value={inputDate}
        onChange={handleChangeInput}
        className="border-2"
        id={id}
        autoFocus={autoFocus}
      />
    </div>
  );
}
