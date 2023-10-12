# Projeto final cadeira Algoritmos - TDS-SenacRS 

Desafio Final!

Chegamos ao último desafio da UC de Fundamenos de Algoritmo!  
Neste desafio, você deverá implementar um *"App Bancário"* para gerenciamento de contas, saldos e empréstimos de clientes em cadastrados no aplicativo.
O programa deverá ser implementado utilzando a linguagem JavaScript, considerando os conhecimentos de programação adquiridos até o momento (objetos, funções, vetores, estruturas condicionais, estruturas de repetição, declaração de variáveis e demais métodos praticados).
## O aplicativo deverá conter: 

* 1 - Uma função para cadastrar Clientes: que recebe os atributos de id, nome, sobrenome, agencia, conta, senha, saldoInicial, rendaMensal. O ID deverá ser atribuido automaticamente pelo algoritmo, com número inicial igual a 100. A numero da agência deverá ser o mesmo para todos clientes (n° 1014-0), porém o numero da conta deverá iniciar em 10.000 e será incrementado à medida em que forem adicionados novos clientes (exemplo: 10.001, 10.002...).

* 2 - Uma função para excluir cadasto de cliente. A função deverá receber como parâmetro o número da conta do cliente e a senha . Realizar a exclusão somente do registro da conta informada.

* 3 - Uma funçao para depositar dinheiro na conta. A função deve receber como parâmetro o número da conta do cliente, a senha e o valor do deposito. A função deve deve realizar a soma do valor depositado, no saldo atual da conta. Ao final, deverá enviar uma mensagem de confirmação de depósito e apresentar o novo saldo na conta do cliente.

* 4 - Uma função para sacar do dinheiro contido na conta. A função irá receber o numero da conta, a senha e valor de saque. Se valor do saque informado for maior que o saldo disponível, o sistema deverá apresentar a mensagem de "saldo insuficiente" além de apresentar saldo atual; Se o valor do saque for menor que o saldo disponível, realizar a operação de subtração dos valores e retornar a mensagem de confirmação da operação.

* 5 - Uma função que permita a emissão do extrato da conta. A função recebe o numero da conta e a senha como parâmetros. Deverá apresentar na tela, de forma organizada, os dados de: nome do cliente, numero agência, numero conta e saldo atual do cliente que está acessando a conta.

* 6 - Uma função que permita o banco emprestar dinheiro. A função, recebe o numero da conta, o valor do empréstimo e a quantidade de parcelas de prazo. Deverá ser aplicada uma taxa de 5% de juros sobre o valor solicitado de empréstimo. O limite de parcelas informado deve ser menor ou igual a 24 meses. Se o valor da prestaçao (considerando juros) for maior que 20% da renda mensal, o sistema deverá retornar uma mensagem de 'não concessão de empréstimo', caso contrário, validar o empréstimo informado o valor mensal a ser pago e a quantidade de prestações contratadas.

* 7 - O sistema deverá ser acessado por meio de um menu, com a impressão de um cabecalio em conjunto com as opções: 1. Depositar, 2. Sacar, 3. Extrato. O usuário deverá digitar o mumero correspondente a opção. O programa deverá solicitar os parâmetros das funções e realizar as operações requeridas. As funções relativas a cadastrar cliente e excluir cliente deverão estar ocultas do menu do usuário, sendo acessadas pelos numeros 300 e 400 respectivamente. O número 900 encerra a aplicação.