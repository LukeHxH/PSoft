function throw_coin() {
    return Math.random();
}

let promise = new Promise(function(resolve, reject) {
    // a função é executada automatidcamente quando a promessa é criada

    // depois de 2 segundos, o trabalho é feito
    setTimeout(() => resolve("feito!"), 2000);
});

promise.then(alert);