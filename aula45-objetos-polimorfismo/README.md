# Aula 45 - Objetos e Polimorfismo

## O que é Polimorfismo?

**Polimorfismo** é a capacidade que um objeto tem de se comportar de diferentes formas dependendo do contexto em que é utilizado. É um dos pilares da programação orientada a objetos.

### Conceito Simples:
Imagine que você tem diferentes tipos de carros (normal, esportivo, especial). Todos são carros, mas cada um se comporta de forma diferente quando você pisa no acelerador. Isso é polimorfismo!

## O que o código está fazendo?

### Classes criadas:

#### 1. **Classe Turbo**
- Define diferentes níveis de potência do turbo (0, 50, 75, 100)
- Cada estágio representa um boost de velocidade diferente

#### 2. **Classe Carro** (Classe pai)
- **Tipo 1**: Carro Normal (120 km/h base)
- **Tipo 2**: Carro Esportivo (160 km/h base) 
- **Tipo 3**: Carro Super Esportivo (200 km/h base)
- Adiciona a potência do turbo à velocidade máxima

#### 3. **Classe CarroEspecial** (Herda de Carro)
- Extende a classe Carro
- Tem uma velocidade base fixa de 300 km/h
- Adiciona turbo para velocidade extra
- **Polimorfismo em ação**: Sobrescreve o método `info()` com comportamento personalizado

### Exemplos no código:

```javascript
const c1 = new Carro(1, 0);        // Normal sem turbo = 120 km/h
const c2 = new Carro(1, 1);        // Normal com turbo = 170 km/h  
const c3 = new CarroEspecial(3);   // Especial com turbo = 400 km/h
```

### Polimorfismo demonstrado:

1. **Mesmo método, comportamentos diferentes**:
   - `c1.info()`, `c2.info()`, `c3.info()` chamam o mesmo método
   - Mas `CarroEspecial` tem sua própria versão personalizada do `info()`

2. **Diferentes implementações**:
   - Carros normais: velocidade calculada por tipo + turbo
   - Carro especial: velocidade fixa (300) + turbo

3. **Flexibilidade**:
   - O `CarroEspecial` pode escolher usar `super.info()` (comportamento da classe pai)
   - Ou usar seu próprio formato de exibição baseado em `tipoInfo`

## Benefícios do Polimorfismo:

- **Flexibilidade**: Objetos podem se comportar de forma única
- **Reutilização**: Aproveita código da classe pai quando necessário
- **Extensibilidade**: Fácil adicionar novos tipos sem quebrar código existente
- **Manutenibilidade**: Cada classe cuida de seu próprio comportamento específico

## Resultado da execução:

```
Normal
120
Turbo { potencia: 0 }
-------------
Normal
170
Turbo { potencia: 50 }
-------------
Nome: Carro Especial
Velocidade Máxima: 400
Turbo: 100
-------------
```

Cada carro exibe suas informações de forma diferente, demonstrando o polimorfismo em ação! 🚗💨