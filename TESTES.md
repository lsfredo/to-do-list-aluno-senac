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

## Terceira rodada de testes

Esta rodada foi realizada após a implementação da edição e do armazenamento das datas dos marcos acadêmicos.

| ID | Funcionalidade | Procedimento | Resultado esperado | Resultado obtido | Status |
|---|---|---|---|---|---|
| T12 | Edição de marco | Clicar no ícone de edição, informar uma data válida no formato DD/MM/AAAA e confirmar | O marco deve exibir a nova data no formato DD/MM | A data do marco foi atualizada corretamente | Aprovado |
| T13 | Persistência do marco | Editar a data de um marco e atualizar a página com F5 | A data alterada deve permanecer após a atualização | A data permaneceu salva após a atualização | Aprovado |
| T14 | Independência dos marcos | Alterar as datas de dois marcos diferentes | Cada marco deve manter sua própria data | As datas foram armazenadas separadamente | Aprovado |
| T15 | Validação de data | Informar uma data inexistente, como 31/02/2026 | O sistema deve rejeitar a data e manter o valor anterior | A data inválida foi rejeitada | Aprovado |
| T16 | Validação de formato | Informar uma data no formato AAAA-MM-DD | O sistema deve solicitar o formato DD/MM/AAAA | O formato incorreto foi rejeitado | Aprovado |
| T17 | Cancelamento da edição | Abrir a edição de um marco e clicar em Cancelar | A data anterior deve permanecer inalterada | A data não foi modificada | Aprovado |
| T18 | Regressão das tarefas | Cadastrar, editar, concluir e excluir uma tarefa após a implementação dos marcos | As funcionalidades anteriores devem continuar funcionando | Todas as funcionalidades de tarefas continuaram funcionando | Aprovado |

### Resultado da terceira rodada

A edição dos marcos acadêmicos foi aprovada. As datas foram validadas no padrão brasileiro, armazenadas separadamente no LocalStorage e mantidas após a atualização da página. As funcionalidades anteriores de tarefas continuaram funcionando normalmente.
