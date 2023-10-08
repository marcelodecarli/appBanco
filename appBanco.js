let clientes = [{
    idCliente: 100,
    nomeCliente: 'MArcelo',
    sobreNomeCliente: 'de Carli Rocha',
    agenciaCliente: '1014-0',
    contaCliente: 10000,
    senhaCliente: 12345,
    saldoInicialCliente: 12000,
    rendaMensalCliente: 2540
},
{
    idCliente: 101,
    nomeCliente: 'Edilson',
    sobreNomeCliente: 'Santos',
    agenciaCliente: '1014-0',
    contaCliente: 10001,
    senhaCliente: 54321,
    saldoInicialCliente: 600,
    rendaMensalCliente: 4000
}]

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

    let existeCliente = false;
    let indexCliente

    for (let i = 0; i < clientes.length; i++) {        
        if (numConta === clientes[i].contaCliente && senhaCl === clientes[i].senhaCliente) {
            indexCliente = i
            existeCliente = true
        } 
        if (existeCliente == true) {
            saldoAtualizado = clientes[i].saldoInicialCliente + valorDep

            clientes[i].saldoInicialCliente = saldoAtualizado
        }else{
            return 'Deposito inválido.'
        }
    }
}

// depositar(10000, 12345, 12000)
// console.log(clientes)

