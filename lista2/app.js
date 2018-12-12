import {disciplinas, carrega_disciplinas} from "./computacao.js"

function show_fluxograma(_disciplinas) {
    var $fluxograma = document.querySelector("#fluxograma");

    _disciplinas.forEach(disciplina => {
        var $disciplina = criaVisuDisciplina(disciplina);
        $fluxograma.appendChild($disciplina);
    });
};

function criaVisuDisciplina(disciplina) {
    let $disciplina = document.createElement("div");

    $disciplina.classList.add("disciplina");
    $disciplina.style.gridColumn = disciplina.periodo;
    $disciplina.innerHTML = `
    <p class="nome">${disciplina.nome}</p>
    <div class="dados">
        <span>Créditos: ${disciplina.creditos}</p>
        <span>Período: ${disciplina.periodo}</p>
    </div>`;

    return $disciplina;
}

carrega_disciplinas().then(function () {
    show_fluxograma(disciplinas());
});