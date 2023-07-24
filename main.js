document.addEventListener("DOMContentLoaded", function () {
    const formContatos = document.getElementById("form-contatos");
    const tabelaContatos = document.getElementById("tabela-contatos");

    formContatos.addEventListener("submit", function (event) {
        event.preventDefault();

        const nomeContato = document.getElementById("nome-contato").value;
        const telefoneContato = document.getElementById("telefone-contato").value;

        if (nomeContato.trim() === "" || telefoneContato.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const newRow = tabelaContatos.insertRow();
        const nomeCell = newRow.insertCell(0);
        const telefoneCell = newRow.insertCell(1);

        nomeCell.textContent = nomeContato;
        telefoneCell.textContent = telefoneContato;

        document.getElementById("nome-contato").value = "";
        document.getElementById("telefone-contato").value = "";
    });
});
