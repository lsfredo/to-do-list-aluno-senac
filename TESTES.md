# Registro de Testes

## Ambiente utilizado

- Aplicação publicada no GitHub Pages
- Navegador utilizado: Microsoft Edge
- Armazenamento: LocalStorage
- Data dos testes: 18/11/2026

## Primeira rodada de testes

Esta rodada foi realizada após a implementação das funcionalidades iniciais de cadastro e gerenciamento de tarefas.

| ID | Funcionalidade | Procedimento | Resultado esperado | Resultado obtido | Status |
|---|---|---|---|---|---|
| T01 | Cadastro | Preencher descrição, disciplina e data e clicar em Cadastrar Tarefa | A tarefa deve aparecer na lista | A tarefa apareceu na lista | Aprovado |
| T02 | Validação | Tentar cadastrar uma tarefa com um ou mais campos vazios | O sistema deve exibir um aviso | O aviso foi exibido | Aprovado |
| T03 | Persistência | Cadastrar uma tarefa e atualizar a página com F5 | A tarefa deve permanecer na lista | A tarefa permaneceu na lista | Aprovado |
| T04 | Conclusão | Marcar a caixa de seleção de uma tarefa | A tarefa deve ser marcada como concluída | A tarefa foi marcada como concluída | Aprovado |
| T05 | Persistência da conclusão | Marcar uma tarefa como concluída e atualizar a página | A tarefa deve continuar concluída | A conclusão foi mantida | Aprovado |
| T06 | Exclusão | Clicar no botão Excluir | A tarefa deve desaparecer da lista | A tarefa desapareceu | Aprovado |
| T07 | Persistência da exclusão | Excluir uma tarefa e atualizar a página | A tarefa não deve reaparecer | A tarefa não reapareceu | Aprovado |

### Resultado da primeira rodada

As funcionalidades de cadastro, validação, listagem, conclusão, exclusão e armazenamento no LocalStorage foram testadas e aprovadas.

## Segunda rodada de testes

Esta rodada foi realizada após a implementação da funcionalidade de edição de tarefas.

| ID | Funcionalidade | Procedimento | Resultado esperado | Resultado obtido | Status |
|---|---|---|---|---|---|
| T08 | Edição | Clicar em Editar, alterar os dados e salvar a tarefa | A tarefa deve ser atualizada sem criar duplicação | A tarefa foi atualizada, sem duplicação, e permaneceu após atualizar a página | Aprovado |
| T09 | Conclusão após edição | Editar uma tarefa e, em seguida, marcá-la como concluída | A tarefa editada deve poder ser marcada como concluída | A tarefa editada foi marcada como concluída | Aprovado |
| T10 | Exclusão após edição | Editar uma tarefa e, em seguida, excluí-la | A tarefa editada deve ser excluída normalmente | A tarefa editada foi excluída | Aprovado |
| T11 | Persistência da edição | Editar uma tarefa e atualizar a página com F5 | Os dados alterados devem permanecer após a atualização | Os dados alterados permaneceram após a atualização | Aprovado |

### Resultado da segunda rodada

A edição de tarefas foi aprovada. Os testes também confirmaram que as funcionalidades de conclusão, exclusão e persistência continuaram funcionando após a implementação da edição.

## Resultado geral

As funcionalidades de cadastro, validação, listagem, edição, conclusão, exclusão e persistência no LocalStorage foram testadas e aprovadas no Microsoft Edge.
