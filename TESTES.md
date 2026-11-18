# Registro de Testes

## Ambiente utilizado

- Aplicação publicada no GitHub Pages
- Navegador utilizado: informar o navegador
- Armazenamento: LocalStorage
- Data do teste: informar a data

## Testes realizados

| ID | Funcionalidade | Procedimento | Resultado esperado | Resultado obtido | Status |
|---|---|---|---|---|---|
| T01 | Cadastro | Preencher descrição, disciplina e data e clicar em Cadastrar Tarefa | A tarefa deve aparecer na lista | A tarefa apareceu na lista | Aprovado |
| T02 | Validação | Tentar cadastrar uma tarefa com campo vazio | O sistema deve exibir um aviso | O aviso foi exibido | Aprovado |
| T03 | Persistência | Cadastrar uma tarefa e atualizar a página com F5 | A tarefa deve permanecer na lista | A tarefa permaneceu na lista | Aprovado |
| T04 | Conclusão | Marcar a caixa de uma tarefa | A tarefa deve ser marcada como concluída | A tarefa foi marcada como concluída | Aprovado |
| T05 | Persistência da conclusão | Marcar uma tarefa e atualizar a página | A tarefa deve continuar concluída | A conclusão foi mantida | Aprovado |
| T06 | Exclusão | Clicar no botão Excluir | A tarefa deve desaparecer da lista | A tarefa desapareceu | Aprovado |
| T07 | Persistência da exclusão | Excluir uma tarefa e atualizar a página | A tarefa não deve reaparecer | A tarefa não reapareceu | Aprovado |

## Resultado geral

Os testes das funcionalidades de cadastro, validação, listagem, conclusão, exclusão e armazenamento no LocalStorage foram concluídos com sucesso.
