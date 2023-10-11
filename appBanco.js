const rl = require('readline-sync')

let clientes = [{
    idCliente: 100,
    nomeCliente: 'MArcelo',
    sobreNomeCliente: 'de Carli Rocha',
    agenciaCliente: '1014-0',
    contaCliente: 10000,
    senhaCliente: 12345,
    saldoInicialCliente: 12000,
    rendaMensalCliente: 1000
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

function idCliente() { return clientes.length + 100 }

function idContaCliente() { return clientes.length + 10000 }

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
            saldoAtualizado = clientes[i].saldoInicialCliente + valorDep
            clientes[i].saldoInicialCliente = saldoAtualizado

            console.log(`Valor depositado: R$${valorDep}. Valor do saldo atualizado R$${clientes[i].saldoInicialCliente}.`)

        } else {
            return 'Deposito inválido.'
        }
    }
}

// depositar(10000, 12345, 12000)
// console.log(clientes)

/*4. Uma função para sacar do dinheiro contido na conta. A função irá receber o numero da conta, a senha e valor de saque. Se valor do saque informado for maior que o saldo disponível, o sistema deverá apresentar a mensagem de "saldo insuficiente" além de apresentar saldo atual; Se o valor do saque for menor que o saldo disponível, realizar a operação de subtração dos valores e retornar a mensagem de confirmação da operação.*/

function sacar(numConta, senhaCl, valorSacado) {

    let existeCliente = false;
    let indexCliente

    for (let i = 0; i < clientes.length; i++) {
        if (numConta === clientes[i].contaCliente && senhaCl === clientes[i].senhaCliente) {
            indexCliente = i
            existeCliente = true
        } else {
            return 'Cliente não encontrado.'
        }
        if (existeCliente == true && valorSacado <= clientes[i].saldoInicialCliente) {

            saldoAtualizado = clientes[i].saldoInicialCliente - valorSacado
            clientes[i].saldoInicialCliente = saldoAtualizado
            console.log(`Valor sacado: R$${valorSacado}. Saldo atualizado R$${saldoAtualizado}.`)

        } else {
            return `Saldo insuficiente. Saldo disponível é de R$${clientes[i].saldoInicialCliente}`
        }
    }
}
// console.log(sacar(10000, 12345, 6000))

//5. Uma função que permita a emissão do extrato da conta. A função recebe o numero da conta e a senha como parâmetros. Deverá apresentar na tela, de forma organizada, os dados de: nome do cliente, numero agência, numero conta e saldo atual do cliente que está acessando a conta.

function extrato(numContaExtrato, senhaClienteExtrato) {

    for (let i = 0; i < clientes.length; i++) {

        if (numContaExtrato === clientes[i].contaCliente && senhaClienteExtrato === clientes[i].senhaCliente) {
        
            console.log(`                    
            -------------------------- EXTRATO --------------------------

                    Nome do cliente: ${clientes[i].nomeCliente} ${clientes[i].sobreNomeCliente}.
                    Agência: ${clientes[i].agenciaCliente}
                    Número da conta: ${clientes[i].agenciaCliente}
                    Saldo Atual: R$${clientes[i].saldoInicialCliente.toFixed(2)}
                    
            ---------------------------- FIM ----------------------------
            `)
            break;
        }else{
            console.log('Cliente não encontrado.')
        }
    }
}

// console.log(extrato(10000, 12345))



function emprestar(numContaEmprestimo, valorEmprestimo, qtdParcelas) {


    for (let i = 0; i < clientes.length; i++) {



        if (numContaEmprestimo === clientes[i].contaCliente && qtdParcelas <= 24) {
            
            parcelaMaxima = (clientes[i].rendaMensalCliente * 0.20)
            valorEmprestimoComJuros = valorEmprestimo + (valorEmprestimo * 0.05)
            valorParcela = valorEmprestimoComJuros / qtdParcelas

            if (valorParcela <= parcelaMaxima) {

                console.log(`

                    ******************* APROVADO *******************

                    Valor emprestado com juros: R$${valorEmprestimoComJuros}
                    Parcela mensal: R$${valorParcela}
                    Quantidade de parcelas: ${qtdParcelas} parcelas.
                    `)
            } else {
                console.log('Não concessão de empréstimo')
            }
        }
    }
}
// console.log(emprestar(10000, 1000, ))



function letreiro() {
    console.log('****** * * * Bem vindo ao banco * * * *******')
}

function menu() {

    letreiro()

    console.log('*** MENU DE ACESSO ***')

    console.log('1: DEPOSITAR: ')
    console.log('2: SACAR: ')
    console.log('3: EXTRATO: ')
    console.log('4: EMPRESTIMO: ')


    let opcao = rl.questionInt('digite uma opcao: ')

    function encerrar() {
        process.exit(0)
    }

    switch (opcao) {
        case 300:

            console.clear()
            let nome = rl.question('Primeiro nome do cliente: ')
            let sobreNome = rl.question('Sobrenome do cliente: ')
            let senha = rl.questionInt('Cliente digite sua senha: ')
            let saldoInicial = rl.questionInt('Valor de depósito inicial: ')
            let rendaMensal = rl.question('Renda mensal do cliente: ')
            console.log(cadastrar(nome, sobreNome, senha, saldoInicial, rendaMensal))
            break;

        case 400:
            console.clear()

            let numConta = rl.questionInt('Digite a sua conta: ')
            let senhaCli = rl.questionInt('Digite a sua senha: ')
            return excluirCliente(numConta, senhaCli)

        case 1:

            console.clear()

            let numContaDep = rl.questionInt('Digite a sua conta: ')
            let senhaCl = rl.questionInt('Digite a sua senha: ')
            let valorDep = rl.questionFloat('Valor a ser depositado: ')
            return depositar(numContaDep, senhaCl, valorDep)

        case 2:
            console.clear()

            let numContaSaque = rl.questionInt('Digite a sua conta: ')
            let senhaClSaque = rl.questionFloat('Digite a sua senha: ')
            let valorSacado = rl.questionFloat('Informe o valor do saque: ')
            return sacar(numContaSaque, senhaClSaque, valorSacado)

        case 3:

            let numContaExtrato = rl.questionInt('Digite a sua conta: ')
            let senhaClienteExtrato = rl.questionInt('Digite a sua senha: ')

            return extrato(numContaExtrato, senhaClienteExtrato)

        case 4:
            let numContaEmprestimo = rl.questionInt('Digite a sua conta: ')
            let valorEmprestimo = rl.questionInt('Informe o valor do emprestimo: ')
            let qtdParcelas = rl.questionInt('Informe em quantas parcelas deseja fazer (Máximo 24x): ')
            return emprestar(numContaEmprestimo, valorEmprestimo, qtdParcelas)

        case 900:
            return encerrar()
        default:
            console.log('Opção inválida. Tente novamente.')
            break;
    }
}

while (true) {
    menu()
    rl.question('Clique ENTER para continuar.')
}