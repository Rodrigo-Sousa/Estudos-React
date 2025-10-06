
# Projeto _React-Hooks_

O presente projeto é o primeiro, de uma lista de projetos que serão realizados. Ele possui a aplicação de algumas funções e "mágias" que essa incrível biblioteca possui. Com explicações de como utilizar e alguns comentários no código para ajudar a compreender certas partes e fixar os conhecimentos.

## Rodando o projeto

Assim que baixar, abrir o projeto no VsCode (ou no editor de sua preferência) e no terminal, rodar o comando: `yarn`, para que seja instalado todas as suas dependências e possamos utilizar o projeto.

## Extensões

Na pasta .vscode, tem as extensões recomendadas, para utilizar o projeto. Com o arquivo `extensions.json`, após baixar o projeto base, ir na parte de extesões direto no VS code, e na aba **RECOMMENDED** e instalar o que for listado ali, sendo elas, as mesmas que estão no arquivo _extensions_.

## Arquivos

Alguns arquivos desta pastão são:

- `.env_exemple`: Um arquivo que contém as configurações para utilização. Uma boa prática é não enviar ele para nenhum repositório. Neste caso, o conteúdo contido nele, é para que após instalar as dependênicas (e a pasta _node_modules_ estiver presente), utilizando o comando: `yarn dev`, será aberto no navegador que ali definidio e no modo _anônimo_.

- `.gitignore`: Arquivo que contém o que será "ignorado" pelo git, na hora de submeter os arquivos ao repositório remoto.

### Desenvolvimento

1. Criação do componente: `Header.js`.
    
    1.1. Atrelando ele (importando) no arquivo `App.js`.
    1.2. Passando via props(_children_), o conteúdo do  `<Header></Header>`.

2. Criar o componente `Main`.

3.  Adicionado um conteúdo ao paragrafo, renderizando com variáveis `const name = "Rodrigo"; const idade = "27";`.

    3.1. Desenvolvido um label e um campo para input.
    3.2. Pegando os dados informado em input, exibindo ele na frase.
    3.3. Criando o _useState_ e trocando  o dado com o que for digitado no input.

4. Separando o conteúdo do input e seu label, em um componnete expecífico: `TextInput`.

    4.1. Recebendo o conteúdo por props, para mudar o valor de label, input e o conteúdo digitado.
    4.2. Retornado esses valores para o **App.js**, e renderizando o conteúdo com o que foi modificado.

5. Calculando a data. Criando conteúdo do componente.

    5.1. Criação da pasta componente e o arquivo: `DateInput.js`.

6. Criação da pasta _Services_, onde teremos os serviços que utilizamos na nossa aplicação.

    6.1. Conteúdo que recebe o que foi setado via inpu no arquivo **_App.js_** e passado por props. Nele, será separado (em dia, mês e ano), para efetuar o cálculo da idade (arquivo _dataHelpers.js_). 