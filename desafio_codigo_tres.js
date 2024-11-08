class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    atacar() {
      let ataque
  

      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia'
          break
        case 'guerreiro':
          ataque = 'usou espada'
          break
        case 'monge':
          ataque = 'usou artes marciais'
          break
        case 'ninja':
          ataque = 'usou shuriken'
          break
        default:
          ataque = 'não possui um ataque definido'
          break
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
  }
  
  const heroi1 = new Heroi('Thiago', 28, 'mago')
  const heroi2 = new Heroi('Rodrigo', 40, 'guerreiro')
  const heroi3 = new Heroi('Andre', 35, 'monge')
  const heroi4 = new Heroi('Raquel', 38, 'ninja')
  
  heroi1.atacar()
  heroi2.atacar()
  heroi3.atacar()
  heroi4.atacar()
  