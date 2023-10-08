let clientes = []

function idCliente() {
    return clientes.length + 100
}

function idContaCliente() {
    return clientes.length + 10000
}

function cadastrar(nome, sobreNome, senha, saldoInicial, rendaMensal) {
    let cadastro = {
        idCliente: idCliente(),
        nomeCliente: nome,
        sobreNomeCliente: sobreNome,
        agenciaCliente: '1014-0',
        contaCliente: idContaCliente(),
        senhaCliente: senha,
        saldoInicialCliente: saldoInicial,
        rendaMensalCliente: rendaMensal
    }
    clientes.push(cadastro)
    return clientes
}

// cadastrar('MArcelo', 'de Carli Rocha', 12345, 12000, 2540 )
// cadastrar('Edilson', 'Santos', 54321, 600, 4000 )
//  console.log(clientes)



function excluirCliente(numConta, senhaCli) {

    let existeCliente = false;
    let indexCliente

    for (let i = 0; i < clientes.length; i++) {

        if (numConta === clientes[i].contaCliente && senhaCli === clientes[i].senhaCliente) {
            indexCliente = i
            existeCliente = true
        }
    }
    if (existeCliente === true) {
        clientes.splice(indexCliente, 1)
        console.log(`Cliente excluido com sucesso! ID: ${indexCliente}.`)
    } else {
        console.log("Cliente não encontrado! ")

    }

}
// console.log('--------------------------------------------------------------')
// excluirCliente(10000,12345)
// console.log(clientes)

function depositar(numConta, senhaCl, valorDep) {

    if (numConta === clientes.idContaCliente && senhaCl === clientes.senhaCliente) {
        saldoAtualizado = clientes.saldoInicialCliente + valorDep

        return clientes.saldoInicialCliente = saldoAtualizado
    } else {
        return 'Falha no depósito.'
    }
}