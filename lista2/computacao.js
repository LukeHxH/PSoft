let _disciplinas = [];

function carrega_disciplinas() {
    const promessa_disciplinas = fetch("disciplinas.json")
                                .then(response => response.json())
                                .then(disciplinas => _disciplinas = disciplinas);

    return promessa_disciplinas;
}

const disciplinas = function() { return _disciplinas; }

export {carrega_disciplinas, disciplinas};