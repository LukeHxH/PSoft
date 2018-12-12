var _disciplinas = [];

function carrega_disciplinas() {
    const promise = fetch("disciplinas.json")
                    .then(response => response.json())
                    .then(disciplina => _disciplinas = disciplina);

    return promise;
}

const disciplinas = function() { return _disciplinas; }

export {carrega_disciplinas, disciplinas};