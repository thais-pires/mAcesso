let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const pessoa = new Pessoa("Wagner", 40, new Date(1983, 4, 11));
const pessoaFisica = new PessoaFisica("Guga", 50, new Date(1973, 5, 15), "34563453452");
const pessoaJuridica = new PessoaJuridica("WAG Corp", 3, new Date(2020, 2, 22), "23432423423");

console.log("PESSOA - Nome: " + pessoa.nome + ", Idade: " + pessoa.idade + ", Data Nascimento: " + pessoa.dataNascimento.toDateString());
console.log("PFisica - Nome: " + pessoaFisica.nome + ", Idade: " + pessoaFisica.idade + ", Data Nascimento: " + pessoaFisica.dataNascimento.toDateString() + ", CPF: " + pessoaFisica.cpf);
console.log("PJuridica - Nome: " + pessoaJuridica.nome + ", Idade: " + pessoaJuridica.idade + ", Data Nascimento: " + pessoaJuridica.dataNascimento.toDateString() + ", CNPJ: " + pessoaJuridica.cnpj);

