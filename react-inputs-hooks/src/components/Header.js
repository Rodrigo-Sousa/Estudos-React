// Essa função, irá receber a props vinda do arquivo App(). Desestruturando e pegando o conteúdo children
export default function Header({children}) {
    return (
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            {children}
          </h1>
        </div>
    );
  
}