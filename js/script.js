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
            <div class="tarefa-conteudo">
                <strong>${escaparHTML(tarefa.descricao)}</strong>
                <span>${escaparHTML(tarefa.disciplina)}</span>
                <span>Conclusão: ${dataFormatada}</span>

                <label class="controle-conclusao">
                    <input
                        type="checkbox"
                        ${tarefa.concluida ? "checked" : ""}
                        onchange="alternarConclusao(${tarefa.id})"
                        aria-label="${tarefa.concluida
                            ? "Marcar tarefa como pendente"
                            : "Marcar tarefa como concluída"}"
                    >

                    <span class="status-tarefa">
                        ${tarefa.concluida ? "Concluída" : "Pendente"}
                    </span>
                </label>
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

// Inicializa a edição e o armazenamento dos marcos acadêmicos
function inicializarMarcosAcademicos() {
    const cartoes = document.querySelectorAll(".marcos-card");
    const datasSalvas = JSON.parse(
        localStorage.getItem("marcosAcademicos")
    ) || {};

    cartoes.forEach(function (cartao, indice) {
        const titulo = cartao.querySelector(".marcos-title").textContent.trim();
        const elementoData = cartao.querySelector(".marcos-data span");
        const botaoEditar = cartao.querySelector(".edit-button");
        const identificador = criarIdentificadorMarco(titulo, indice);

        cartao.dataset.marcoId = identificador;

        if (datasSalvas[identificador]) {
            cartao.dataset.date = datasSalvas[identificador];
            elementoData.textContent = formatarDataMarco(
                datasSalvas[identificador]
            );
        }

        botaoEditar.addEventListener("click", function () {
            editarDataMarco(cartao, elementoData, identificador);
        });
    });
}

// Cria um identificador único para cada marco acadêmico
function criarIdentificadorMarco(titulo, indice) {
    return titulo
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "-") + "-" + indice;
}

// Solicita, valida e salva a nova data do marco acadêmico
function editarDataMarco(cartao, elementoData, identificador) {
    const dataAtual = cartao.dataset.date
        ? converterDataParaBrasil(cartao.dataset.date)
        : "";

    const novaData = prompt(
        "Digite a nova data no formato DD/MM/AAAA:",
        dataAtual
    );

    if (novaData === null) {
        return;
    }

    const dataInformada = novaData.trim();

    if (!validarDataMarco(dataInformada)) {
        alert("Data inválida. Use o formato DD/MM/AAAA.");
        return;
    }

    const dataParaArmazenamento = converterDataParaArmazenamento(
        dataInformada
    );

    const datasSalvas = JSON.parse(
        localStorage.getItem("marcosAcademicos")
    ) || {};

    datasSalvas[identificador] = dataParaArmazenamento;

    localStorage.setItem(
        "marcosAcademicos",
        JSON.stringify(datasSalvas)
    );

    cartao.dataset.date = dataParaArmazenamento;
    elementoData.textContent = formatarDataMarco(dataParaArmazenamento);
}

// Valida a data no formato DD/MM/AAAA
function validarDataMarco(data) {
    const padraoData = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!padraoData.test(data)) {
        return false;
    }

    const partes = data.split("/");
    const dia = Number(partes[0]);
    const mes = Number(partes[1]);
    const ano = Number(partes[2]);
    const dataCriada = new Date(ano, mes - 1, dia);

    return dataCriada.getFullYear() === ano &&
        dataCriada.getMonth() === mes - 1 &&
        dataCriada.getDate() === dia;
}

// Converte DD/MM/AAAA para AAAA-MM-DD
function converterDataParaArmazenamento(data) {
    const partes = data.split("/");

    return `${partes[2]}-${partes[1]}-${partes[0]}`;
}

// Converte AAAA-MM-DD para DD/MM/AAAA
function converterDataParaBrasil(data) {
    const partes = data.split("-");

    if (partes.length !== 3) {
        return data;
    }

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Converte AAAA-MM-DD para DD/MM
function formatarDataMarco(data) {
    const partes = data.split("-");

    if (partes.length !== 3) {
        return data;
    }

    return `${partes[2]}/${partes[1]}`;
}
// Inicializa as tarefas e os marcos após carregar a página
document.addEventListener("DOMContentLoaded", function () {
    exibirTarefas();
    inicializarMarcosAcademicos();
});
