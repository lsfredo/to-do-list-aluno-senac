# To-do List do Aluno Senac EAD

Aplicação desenvolvida como parte do Projeto Integrador para auxiliar estudantes na organização de tarefas, disciplinas, datas de conclusão e marcos acadêmicos.

## Objetivo

Desenvolver uma aplicação web simples e funcional que permita ao estudante cadastrar, consultar, editar, concluir e excluir tarefas acadêmicas, além de acompanhar e alterar as datas dos principais marcos do curso.

## Funcionalidades implementadas

### Gerenciamento de tarefas

- Cadastro de tarefas
- Validação dos campos obrigatórios
- Listagem das tarefas cadastradas
- Edição da descrição, disciplina e data de conclusão
- Marcação de tarefas como concluídas
- Exclusão de tarefas
- Exibição das datas no padrão brasileiro
- Persistência dos dados após a atualização da página

### Marcos acadêmicos

A aplicação apresenta os seguintes marcos:

- PTI
- Quiz
- Projeto Integrador
- Prova Presencial

Funcionalidades implementadas para os marcos acadêmicos:

- Consulta das datas
- Edição individual das datas
- Entrada de datas no formato DD/MM/AAAA
- Validação de datas inexistentes ou em formato incorreto
- Cancelamento da edição sem alterar a data anterior
- Armazenamento individual das datas no LocalStorage
- Permanência das alterações após a atualização da página

## Funcionalidade planejada

- Pesquisa de tarefas por descrição ou disciplina

O campo de pesquisa já está presente na interface, mas a lógica de filtragem ainda será implementada.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Git
- GitHub
- GitHub Pages

## Estrutura do projeto

- `index.html`: estrutura principal da aplicação
- `css/style.css`: estilos visuais da interface
- `js/script.js`: lógica das tarefas e dos marcos acadêmicos
- `img/`: imagens utilizadas na aplicação
- `README.md`: documentação geral do projeto
- `TESTES.md`: registro dos testes funcionais realizados

## Armazenamento dos dados

A aplicação utiliza o LocalStorage do navegador para armazenar:

- tarefas cadastradas;
- estado de conclusão das tarefas;
- alterações realizadas nas tarefas;
- datas editadas dos marcos acadêmicos.

Os dados permanecem disponíveis após atualizar ou fechar a página, desde que o armazenamento do navegador não seja apagado.

## Aplicação publicada

A aplicação foi publicada por meio do GitHub Pages e pode ser utilizada diretamente pelo navegador.

**Endereço da aplicação:**  

https://lsfredo.github.io/to-do-list-aluno-senac/

## Testes realizados

Os testes funcionais estão documentados no arquivo `TESTES.md`.

Até o momento, foram realizadas três rodadas de testes, abrangendo:

- cadastro e listagem de tarefas;
- validação dos campos obrigatórios;
- persistência no LocalStorage;
- conclusão e exclusão de tarefas;
- edição de tarefas sem duplicação;
- persistência das alterações;
- edição dos marcos acadêmicos;
- validação das datas no padrão DD/MM/AAAA;
- cancelamento da edição;
- independência das datas dos marcos;
- testes de regressão das funcionalidades anteriores.

No total, foram documentados 18 casos de teste aprovados no Microsoft Edge.

## Como executar

### Pelo GitHub Pages

1. Acesse o endereço publicado no GitHub Pages.
2. Preencha a descrição, a disciplina e a data da tarefa.
3. Clique em `Cadastrar Tarefa`.
4. Utilize as opções disponíveis para editar, concluir ou excluir a tarefa.
5. Para alterar a data de um marco acadêmico, clique no ícone de lápis.
6. Informe a nova data no formato `DD/MM/AAAA`.

### Localmente

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` em um navegador.
4. Não é necessário instalar bibliotecas nem configurar um banco de dados.

## Limitações atuais

- Os dados ficam armazenados somente no navegador utilizado.
- A limpeza do LocalStorage remove os dados cadastrados.
- As informações não são sincronizadas entre dispositivos.
- O campo de pesquisa ainda não possui lógica de filtragem.
- A aplicação não utiliza banco de dados externo nem sistema de autenticação.

## Status do projeto

Em desenvolvimento.

As funcionalidades principais de tarefas e marcos acadêmicos estão implementadas, publicadas e testadas. As próximas etapas incluem a implementação da pesquisa, a revisão visual e responsiva da interface e a preparação das evidências para a apresentação final.

As funcionalidades principais de tarefas e marcos acadêmicos estão implementadas, publicadas e testadas. As próximas etapas incluem a implementação da pesquisa, a revisão visual e responsiva da interface e a preparação das evidências para a apresentação final.
