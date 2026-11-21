# To-do List do Aluno Senac EAD

Aplicação web desenvolvida como parte do Projeto Integrador para auxiliar estudantes na organização de tarefas, disciplinas, datas de conclusão e marcos acadêmicos.

## Objetivo

Desenvolver uma aplicação simples, organizada e funcional que permita ao estudante cadastrar, consultar, editar, concluir e excluir tarefas acadêmicas, além de acompanhar e alterar as datas dos principais marcos do curso.

## Funcionalidades implementadas

### Gerenciamento de tarefas

- Cadastro de tarefas
- Validação dos campos obrigatórios
- Listagem das tarefas cadastradas
- Edição da descrição, disciplina e data de conclusão
- Marcação de tarefas como concluídas
- Identificação visual dos estados Pendente e Concluída
- Alteração visual das tarefas concluídas
- Exclusão de tarefas
- Exibição das datas no padrão brasileiro
- Persistência dos dados após a atualização da página

### Marcos acadêmicos

A aplicação apresenta os seguintes marcos:

- PTI
- Quiz
- Projeto Integrador
- Prova Presencial

As seguintes funcionalidades foram implementadas para os marcos acadêmicos:

- Consulta das datas
- Edição individual das datas pelo ícone de lápis
- Entrada de datas no formato DD/MM/AAAA
- Validação de datas inexistentes ou em formato incorreto
- Cancelamento da edição sem alterar a data anterior
- Armazenamento individual das datas no LocalStorage
- Permanência das alterações após atualizar ou reabrir a página

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
- `css/style.css`: estilos visuais e regras de responsividade
- `js/script.js`: lógica das tarefas e dos marcos acadêmicos
- `img/`: imagens utilizadas na aplicação
- `README.md`: documentação geral do projeto
- `TESTES.md`: registro dos testes funcionais realizados

## Armazenamento dos dados

A aplicação utiliza o LocalStorage do navegador para armazenar:

- tarefas cadastradas;
- dados editados das tarefas;
- estado Pendente ou Concluída;
- datas editadas dos marcos acadêmicos.

Os dados permanecem disponíveis após atualizar ou fechar a página, desde que o armazenamento do navegador não seja apagado.

O LocalStorage dispensa o uso de banco de dados externo nesta versão da aplicação.

## Aplicação publicada

A aplicação está publicada no GitHub Pages e pode ser utilizada diretamente pelo navegador.

**Endereço da aplicação:**

[https://lsfredo.github.io/to-do-list-aluno-senac/](https://lsfredo.github.io/to-do-list-aluno-senac/)

## Testes realizados

Os testes funcionais estão documentados no arquivo `TESTES.md`.

Foram realizadas quatro rodadas de testes, abrangendo:

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
- identificação visual dos estados Pendente e Concluída;
- persistência visual das tarefas concluídas;
- retorno de uma tarefa concluída ao estado Pendente;
- posicionamento do status sem sobreposição;
- funcionamento dos botões após os ajustes de layout;
- responsividade da interface;
- testes de regressão das funcionalidades anteriores.

No total, foram documentados 26 casos de teste aprovados no Microsoft Edge.

## Como utilizar

### Acesso pelo GitHub Pages

1. Acesse o endereço da aplicação publicado no GitHub Pages.
2. Preencha a descrição, a disciplina e a data de conclusão.
3. Clique em `Cadastrar Tarefa`.
4. Utilize o botão `Editar` para alterar os dados de uma tarefa.
5. Marque o checkbox para alterar o status de `Pendente` para `Concluída`.
6. Utilize o botão `Excluir` para remover uma tarefa.
7. Para alterar a data de um marco acadêmico, clique no ícone de lápis.
8. Informe a nova data no formato `DD/MM/AAAA`.

### Execução local

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` em um navegador.
4. Não é necessário instalar bibliotecas nem configurar banco de dados.

## Boas práticas aplicadas

- Separação entre HTML, CSS e JavaScript
- Organização dos arquivos em pastas
- Uso de nomes descritivos para funções, variáveis, classes e identificadores
- Validação dos campos obrigatórios
- Validação de datas reais e do formato informado
- Proteção dos textos inseridos contra interpretação como HTML
- Persistência local dos dados
- Uso de comentários para identificar seções relevantes
- Interface responsiva para computadores, tablets e celulares
- Registro das alterações por commits no GitHub
- Documentação dos testes funcionais

## Limitações atuais

- Os dados ficam armazenados somente no navegador utilizado.
- A limpeza do LocalStorage remove as tarefas e as datas armazenadas.
- As informações não são sincronizadas entre navegadores ou dispositivos.
- A aplicação não utiliza banco de dados externo.
- A aplicação não possui autenticação ou contas individuais.
- Os dados não são enviados para um servidor.

## Status do projeto

Em fase de finalização.

As funcionalidades principais de tarefas e marcos acadêmicos estão implementadas, publicadas e testadas.

As próximas etapas incluem:

- revisão final da interface;
- captura das evidências de funcionamento;
- preparação da apresentação;
- exportação da apresentação para PDF;
- revisão final dos arquivos antes da entrega.
- revisão visual e responsiva da interface e a preparação das evidências para a apresentação final.
