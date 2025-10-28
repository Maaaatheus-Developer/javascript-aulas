# Aula 46 - Objetos Abstract (Classes Abstratas)

## O que são Classes Abstratas?

**Classes Abstratas** são classes que servem como "modelos" ou "templates" para outras classes, mas que **não podem ser instanciadas diretamente**. É como ter uma planta arquitetônica de uma casa - você pode usar para construir várias casas diferentes, mas a planta em si não é uma casa.

### Características das Classes Abstratas:

1. **Não podem ser instanciadas** diretamente
2. **Definem estrutura básica** que outras classes devem seguir
3. **Podem ter métodos obrigatórios** que as classes filhas devem implementar
4. **Garantem consistência** na estrutura dos objetos

## O que o código está fazendo?

### Estrutura do código:

#### 1. **Classe CarroPadrao** (Classe Abstrata)
```javascript
class CarroPadrao {
  constructor() {
    // Impede instanciação direta
    if (this.constructor === CarroPadrao) {
      throw new TypeError("Esta classe não pode ser instanciada diretamente.");
    }
    
    // Força implementação dos métodos obrigatórios
    if (this.ligar === undefined) {
      throw new TypeError("É obrigatório implementar o método ligar().");
    }
    if (this.desligar === undefined) {
      throw new TypeError("É obrigatório implementar o método desligar().");
    }
    
    // Define propriedades padrão
    this.rodas = 4;
    this.portas = 4;
    this.ligado = false;
  }
}
```

**O que faz:**
- ❌ **Impede criação direta**: `new CarroPadrao()` gera erro
- ✅ **Define estrutura básica**: todo carro terá 4 rodas, 4 portas e estado ligado/desligado
- 🔒 **Força implementação**: classes filhas DEVEM ter métodos `ligar()` e `desligar()`

#### 2. **Classe Carro** (Implementa a classe abstrata)
```javascript
class Carro extends CarroPadrao {
  constructor(tipo, estagioTurbo) {
    super(); // Chama o construtor da classe abstrata
    // ... resto da implementação
  }
  
  // Métodos OBRIGATÓRIOS implementados
  ligar() {
    this.ligado = true;
  }
  desligar() {
    this.ligado = false;
  }
}
```

**O que faz:**
- ✅ **Herda de CarroPadrao**: recebe estrutura básica (rodas, portas, ligado)
- ✅ **Implementa métodos obrigatórios**: `ligar()` e `desligar()`
- ➕ **Adiciona funcionalidades próprias**: tipos de carro, turbo, velocidade

#### 3. **Classe CarroEspecial** (Herda de Carro)
- Herda tudo da classe `Carro`
- Que por sua vez herda a estrutura da classe abstrata `CarroPadrao`

### Demonstração Prática:

```javascript
const c1 = new Carro(1, 0);        // ✅ Funciona - implementa métodos obrigatórios
const c2 = new Carro(1, 1);        // ✅ Funciona
const c3 = new CarroEspecial(3);   // ✅ Funciona
// const c4 = new CarroPadrao();    // ❌ ERRO! Classe abstrata não pode ser instanciada
```

### Por que usar Classes Abstratas?

#### ✅ **Vantagens:**

1. **Consistência**: Garante que todas as classes filhas tenham a mesma estrutura básica
2. **Segurança**: Força implementação de métodos essenciais
3. **Organização**: Define um "contrato" que deve ser seguido
4. **Prevenção de erros**: Impede criação de objetos incompletos

#### 📝 **Exemplo prático:**

Se você tentar criar uma classe que herda de `CarroPadrao` mas esquece de implementar `ligar()`:

```javascript
class CarroIncompleto extends CarroPadrao {
  // Esqueceu de implementar ligar() e desligar()
}

const carro = new CarroIncompleto(); // ❌ ERRO! Métodos obrigatórios não implementados
```

## Resultado da Execução:

```
Normal
120
Turbo { potencia: 0 }
4
4
false
-------------
Normal
170
Turbo { potencia: 50 }
4
4
false
-------------
Carro Especial
400
Turbo { potencia: 100 }
4
4
false
-------------
```

Note que todos os carros têm:
- **4 rodas** (herdado da classe abstrata)
- **4 portas** (herdado da classe abstrata)  
- **Estado ligado = false** (herdado da classe abstrata)

## Conceito Resumido:

**Classe Abstrata** = "Modelo obrigatório que define o que todas as classes filhas devem ter, mas que não pode ser usado diretamente"

É como um formulário em branco que define quais campos são obrigatórios, mas você não pode enviar o formulário vazio - precisa preencher e criar uma versão completa! 📋✨