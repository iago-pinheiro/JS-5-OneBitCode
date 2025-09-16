Enunciado: Crie um sistema de funcionários de uma empresa:

Classe Funcionario (classe pai):

Propriedades: nome, cargo, #salarioBase (privado)
Método: apresentar() - retorna informações do funcionário
Método: consultarSalario() - retorna o salário base
Método: calcularSalario() - retorna o salário base (será sobrescrito)
Classe Vendedor (herda de Funcionario):

Propriedade adicional: vendas (número de vendas no mês)
Sobrescrever calcularSalario(): salário base + (vendas * 100)
Método: registrarVenda() - adiciona 1 à propriedade vendas
Classe Gerente (herda de Funcionario):

Propriedade adicional: bonus (valor fixo de bônus)
Sobrescrever calcularSalario(): salário base + bonus
Método: definirBonus(valor) - altera o valor do bônus