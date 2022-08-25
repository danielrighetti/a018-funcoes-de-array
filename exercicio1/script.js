const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// parte a

const palavrasMaiusculas = (parametro) => {
    return {
        nome: parametro.nome.toUpperCase(),
        profissao: parametro.profissao.toUpperCase(),
        username: parametro.username.toUpperCase(),
        senha: parametro.senha.toUpperCase()
    }
}
console.log(palavrasMaiusculas(objeto))


// parte b



// parte c

const imprimirObjeto = (objeto, callback) => {
    return callback(objeto)
}

console.log(imprimirObjeto(objeto,palavrasMaiusculas))