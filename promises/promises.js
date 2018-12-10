let promise = new Promise(function(resolve, reject) {
    // a função é executada automatidcamente quando a promessa é criada

    // depois de 2 segundos, o trabalho é feito
    setTimeout(() => resolve("lalalalala"), 2000);
});

