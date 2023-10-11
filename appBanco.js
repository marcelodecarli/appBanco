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

function idCliente() { return clientes.length + 100 } // Função que incrementa automaticamente o ID do cliente

function idContaCliente() { return clientes.length + 10000 } // Função que incrementa automaticamente o número da conta

// Função para realizar cadastro do cliente
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


//Função para realizar a exclusão do cliente
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

//Função para realização de depósito
function depositar(numConta, senhaCl, valorDep) {

    for (let i = 0; i < clientes.length; i++) {
        if (numConta === clientes[i].contaCliente && senhaCl === clientes[i].senhaCliente) {
            saldoAtualizado = clientes[i].saldoInicialCliente + valorDep
            clientes[i].saldoInicialCliente = saldoAtualizado

            console.log(`Valor depositado: R$${valorDep}. Valor do saldo atualizado R$${clientes[i].saldoInicialCliente}.`)

        } else {
            console.log('Deposito inválido.')
        }
    }
}

// depositar(10000, 12345, 12000)
// console.log(clientes)

//Função para realizar o saque
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

//Função que realiza o extrato do cliente
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
        } else {
            console.log('Cliente não encontrado.')
        }
    }
}

// console.log(extrato(10000, 12345))


//Função para pedir empréstimo
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

//Função que exibe as opções para o cliente
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
        case 300: //Função cadastrar será somente para usuários internos, não aparecerá na tela de opções do cliente

            console.clear()
            let nome = rl.question('Primeiro nome do cliente: ')
            let sobreNome = rl.question('Sobrenome do cliente: ')
            let senha = rl.questionInt('Cliente digite sua senha: ')
            let saldoInicial = rl.questionInt('Valor de depósito inicial: ')
            let rendaMensal = rl.question('Renda mensal do cliente: ')
            console.log(cadastrar(nome, sobreNome, senha, saldoInicial, rendaMensal))
            break;

        case 400:
            console.clear() //Função excluir será somente para usuários internos, não aparecerá na tela de opções do cliente

            let numConta = rl.questionInt('Digite a sua conta: ')
            let senhaCli = rl.questionInt('Digite a sua senha: ')
            return excluirCliente(numConta, senhaCli)

        case 1:

            console.clear() 

            let numContaDep = rl.questionInt('Digite a sua conta: ')
            let senhaCl = rl.questionInt('Digite a sua senha: ')
            let valorDep = rl.questionFloat('Valor a ser depositado: ')
            return depositar(numContaDep, senhaCl, valorDep) //Chamada da função depositar

        case 2:
            console.clear()

            let numContaSaque = rl.questionInt('Digite a sua conta: ')
            let senhaClSaque = rl.questionFloat('Digite a sua senha: ')
            let valorSacado = rl.questionFloat('Informe o valor do saque: ')
            return sacar(numContaSaque, senhaClSaque, valorSacado) //Chamada da função sacar

        case 3:

            console.clear()

            let numContaExtrato = rl.questionInt('Digite a sua conta: ')
            let senhaClienteExtrato = rl.questionInt('Digite a sua senha: ')

            return extrato(numContaExtrato, senhaClienteExtrato) //Chamada da função extrato

        case 4:
            console.clear()

            let numContaEmprestimo = rl.questionInt('Digite a sua conta: ')
            let valorEmprestimo = rl.questionInt('Informe o valor do emprestimo: ')
            let qtdParcelas = rl.questionInt('Informe em quantas parcelas deseja fazer (Máximo 24x): ')
            return emprestar(numContaEmprestimo, valorEmprestimo, qtdParcelas) //Chamada da função emprestar

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