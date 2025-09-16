Exercício 4: Sistema de Veículos
Enunciado: Crie um sistema de veículos:

Classe Veiculo (classe pai):

Propriedades: marca, modelo, ano, #combustivel (privado)
Método: abastecer(litros) - adiciona combustível
Método: consultarCombustivel() - retorna combustível atual
Método: acelerar() - consome 1 litro (se tiver combustível)
Método: info() - retorna informações do veículo
Classe Carro (herda de Veiculo):

Propriedade adicional: portas (número de portas)
Sobrescrever acelerar(): consome 1 litro e retorna "Vruum! 🚗"
Sobrescrever info() para incluir número de portas
Classe Moto (herda de Veiculo):

Propriedade adicional: cilindrada
Sobrescrever acelerar(): consome 0.5 litros e retorna "Vruum vruum! 🏍️"
Sobrescrever info() para incluir cilindrada