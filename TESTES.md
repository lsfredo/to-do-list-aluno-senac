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

## Quarta rodada de testes

Esta rodada foi realizada após a melhoria da identificação e da apresentação visual do status das tarefas, além dos ajustes de layout e responsividade.

| ID | Funcionalidade | Procedimento | Resultado esperado | Resultado obtido | Status |
|---|---|---|---|---|---|
| T19 | Exibição do status pendente | Cadastrar uma nova tarefa e verificar o status exibido abaixo dos dados | A tarefa deve apresentar o texto Pendente abaixo da descrição, disciplina e data | O status Pendente foi exibido corretamente abaixo dos dados | Aprovado |
| T20 | Alteração para concluída | Marcar o checkbox de uma tarefa pendente | O status deve mudar de Pendente para Concluída | O status foi alterado para Concluída | Aprovado |
| T21 | Identificação visual da conclusão | Marcar uma tarefa como concluída | O cartão deve ficar cinza e a descrição deve aparecer riscada | O cartão ficou cinza e a descrição foi riscada | Aprovado |
| T22 | Persistência visual da conclusão | Marcar uma tarefa como concluída e atualizar a página com F5 | O status Concluída e a aparência cinza devem permanecer após a atualização | O status e a aparência permaneceram após a atualização | Aprovado |
| T23 | Retorno para pendente | Desmarcar o checkbox de uma tarefa concluída | A tarefa deve voltar ao status Pendente e recuperar a aparência original | A tarefa voltou ao status Pendente e recuperou a aparência original | Aprovado |
| T24 | Posicionamento do status | Verificar a posição do checkbox e do texto de status no cartão | O controle deve ficar abaixo da descrição, disciplina e data, sem sobreposição | O controle ficou corretamente posicionado, sem sobreposição | Aprovado |
| T25 | Botões da tarefa | Utilizar os botões Editar e Excluir após a alteração do layout | Os dois botões devem continuar visíveis e funcionando | Os botões permaneceram alinhados e funcionais | Aprovado |
| T26 | Responsividade | Abrir a aplicação em uma janela estreita e verificar formulário, marcos, tarefas e botões | Os elementos devem se reorganizar sem sobreposição ou rolagem horizontal indevida | A interface se adaptou corretamente à largura reduzida | Aprovado |

### Resultado da quarta rodada

A identificação visual do status das tarefas foi aprovada. As tarefas apresentam os estados Pendente e Concluída de forma clara, com alteração para fundo cinza e descrição riscada quando concluídas. O status permanece salvo após a atualização da página, pode retornar ao estado pendente e não se sobrepõe aos demais dados. Os botões e o layout responsivo continuaram funcionando corretamente.
