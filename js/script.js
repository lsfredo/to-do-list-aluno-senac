// Recupera as tarefas salvas ou inicia uma lista vazia
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Guarda o identificador da tarefa que está sendo editada
let tarefaEmEdicao = null;

// Salva a lista de tarefas no LocalStorage
function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Cadastra uma nova tarefa
function cadastrarTarefa() {
    const descricao = document.getElementById("tarefa-descricao").value.trim();
    const disciplina = document.getElementById("tarefa-disciplina").value.trim();
    const data = document.getElementById("tarefa-data").value;

    if (descricao === "" || disciplina === "" || data === "") {
        alert("Preencha todos os campos antes de cadastrar a tarefa.");
        return;
    }

   if (tarefaEmEdicao === null) {
    const novaTarefa = {
        id: Date.now(),
        descricao: descricao,
        disciplina: disciplina,
        data: data,
        concluida: false
    };

    tarefas.push(novaTarefa);
} else {
    const tarefa = tarefas.find(function (item) {
        return item.id === tarefaEmEdicao;
    });

    if (tarefa) {
        tarefa.descricao = descricao;
        tarefa.disciplina = disciplina;
        tarefa.data = data;
    }

    tarefaEmEdicao = null;
}
    salvarTarefas();
    exibirTarefas();
    limparFormulario();
}

// Exibe as tarefas cadastradas na página
function exibirTarefas() {
    const listaTarefas = document.getElementById("lista-tarefas");

    listaTarefas.innerHTML = "";

    tarefas.forEach(function (tarefa) {
        const item = document.createElement("div");
        item.className = "tarefa-item";

        if (tarefa.concluida) {
            item.classList.add("concluida");
        }

        const dataFormatada = formatarData(tarefa.data);

        item.innerHTML = `
            <input
                type="checkbox"
                ${tarefa.concluida ? "checked" : ""}
                onchange="alternarConclusao(${tarefa.id})"
            >

            <div class="tarefa-conteudo">
                <strong>${escaparHTML(tarefa.descricao)}</strong>
                <span>${escaparHTML(tarefa.disciplina)}</span>
                <span>Conclusão: ${dataFormatada}</span>
            </div>
            
            <button
               type="button"
               class="botao-editar"
               onclick="editarTarefa(${tarefa.id})"
               aria-label="Editar tarefa"
            >
                Editar
            </button>
            
            <button
                type="button"
                class="botao-excluir"
                onclick="excluirTarefa(${tarefa.id})"
                aria-label="Excluir tarefa"
            >
                Excluir
            </button>
        `;

        listaTarefas.appendChild(item);
    });
}
// Carrega uma tarefa no formulário para edição
function editarTarefa(id) {
    const tarefa = tarefas.find(function (item) {
        return item.id === id;
    });

    if (!tarefa) {
        return;
    }

    document.getElementById("tarefa-descricao").value = tarefa.descricao;
    document.getElementById("tarefa-disciplina").value = tarefa.disciplina;
    document.getElementById("tarefa-data").value = tarefa.data;

    tarefaEmEdicao = id;

    document.getElementById("tarefa-descricao").focus();
}

// Altera o estado da tarefa entre pendente e concluída
function alternarConclusao(id) {
    const tarefa = tarefas.find(function (item) {
        return item.id === id;
    });

    if (!tarefa) {
        return;
    }

    tarefa.concluida = !tarefa.concluida;
    salvarTarefas();
    exibirTarefas();
}

// Exclui uma tarefa
function excluirTarefa(id) {
    tarefas = tarefas.filter(function (tarefa) {
        return tarefa.id !== id;
    });

    salvarTarefas();
    exibirTarefas();
}

// Limpa os campos após o cadastro
function limparFormulario() {
    document.getElementById("tarefa-descricao").value = "";
    document.getElementById("tarefa-disciplina").value = "";
    document.getElementById("tarefa-data").value = "";
}

// Converte a data para o formato brasileiro
function formatarData(data) {
    const partes = data.split("-");

    if (partes.length !== 3) {
        return data;
    }

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Evita que textos inseridos sejam interpretados como HTML
function escaparHTML(texto) {
    const elemento = document.createElement("div");
    elemento.textContent = texto;
    return elemento.innerHTML;
}

// Exibe as tarefas salvas quando a página é carregada
document.addEventListener("DOMContentLoaded", exibirTarefas);
