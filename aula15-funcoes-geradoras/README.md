# 🌟 Aula 15: Funções Geradoras

## 🎯 Objetivo
Dominar funções geradoras (generator functions) em JavaScript, aprendendo a usar `function*` e `yield` para criar iteradores customizados e controlar a execução de forma pausada e retomável.

## 📚 Conceitos Fundamentais

### 🔧 Generator Functions
Funções especiais que podem ser pausadas e retomadas, produzindo uma sequência de valores sob demanda usando `yield`.

### 📊 Sintaxe de Generators
| Elemento | Descrição | Exemplo |
|----------|-----------|---------|
| `function*` | Declara generator | `function* meuGenerator() {}` |
| `yield` | Pausa e retorna valor | `yield valor;` |
| `next()` | Avança para próximo yield | `gen.next()` |
| `return` | Finaliza generator | `return valor;` |

## 🚀 Implementação

### 📝 Arquivo: `aula15.js`
```javascript
// Generator básico
function* meuPrimeiroGenerator() {
    console.log("Iniciando generator");
    yield 1;
    console.log("Continuando...");
    yield 2;
    console.log("Quase terminando...");
    yield 3;
    console.log("Finalizando");
    return "Concluído";
}

const gen = meuPrimeiroGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: "Concluído", done: true }

// Generator infinito
function* numerosPares() {
    let numero = 0;
    while (true) {
        yield numero;
        numero += 2;
    }
}

const pares = numerosPares();
console.log(pares.next().value); // 0
console.log(pares.next().value); // 2
console.log(pares.next().value); // 4

// Generator com parâmetros
function* contador(inicio = 0, fim = 10) {
    for (let i = inicio; i <= fim; i++) {
        yield i;
    }
}

// Usando for...of com generator
for (let numero of contador(5, 8)) {
    console.log(numero); // 5, 6, 7, 8
}

// Generator que recebe valores
function* dialogo() {
    const nome = yield "Qual é o seu nome?";
    const idade = yield `Olá ${nome}! Qual sua idade?`;
    return `${nome}, você tem ${idade} anos!`;
}

const conversa = dialogo();
console.log(conversa.next().value);        // "Qual é o seu nome?"
console.log(conversa.next("Ana").value);   // "Olá Ana! Qual sua idade?"
console.log(conversa.next("25").value);    // "Ana, você tem 25 anos!"
```

## 🧪 Experimentação

### 🔬 Teste 1: Generator Fibonacci
```javascript
function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
const primeiros10 = [];
for (let i = 0; i < 10; i++) {
    primeiros10.push(fib.next().value);
}
console.log(primeiros10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### 🔬 Teste 2: Generator para Arrays
```javascript
function* percorrerArray(array) {
    for (let i = 0; i < array.length; i++) {
        yield {
            indice: i,
            valor: array[i],
            porcentagem: ((i + 1) / array.length * 100).toFixed(1) + "%"
        };
    }
}

const frutas = ["maçã", "banana", "laranja"];
for (let item of percorrerArray(frutas)) {
    console.log(`${item.indice}: ${item.valor} (${item.porcentagem})`);
}
```

### 🔬 Teste 3: Generator para Paginação
```javascript
function* paginar(dados, tamanhoPagina) {
    for (let i = 0; i < dados.length; i += tamanhoPagina) {
        yield dados.slice(i, i + tamanhoPagina);
    }
}

const numeros = Array.from({length: 20}, (_, i) => i + 1);
const paginas = paginar(numeros, 5);

console.log(paginas.next().value); // [1, 2, 3, 4, 5]
console.log(paginas.next().value); // [6, 7, 8, 9, 10]
console.log(paginas.next().value); // [11, 12, 13, 14, 15]
```

## 💡 Casos de Uso Práticos

### ✅ Use Generators quando:
- Precisar de iteração sob demanda (lazy evaluation)
- Trabalhar com sequências infinitas
- Implementar máquinas de estado
- Criar fluxos de dados assíncronos
- Economizar memória com grandes datasets

### ✅ Exemplos Práticos
```javascript
// Sistema de IDs únicos
function* gerarIds() {
    let id = 1;
    while (true) {
        yield `ID_${id.toString().padStart(6, '0')}`;
        id++;
    }
}

const geradorId = gerarIds();
console.log(geradorId.next().value); // "ID_000001"
console.log(geradorId.next().value); // "ID_000002"

// Leitor de arquivo linha por linha (simulado)
function* lerLinhas(conteudo) {
    const linhas = conteudo.split('\n');
    for (let linha of linhas) {
        if (linha.trim()) {
            yield linha.trim();
        }
    }
}

const arquivo = "linha 1\n\nlinha 3\nlinha 4\n";
for (let linha of lerLinhas(arquivo)) {
    console.log(`Processando: ${linha}`);
}

// State Machine simples
function* maquinaEstado() {
    let estado = "inicio";
    
    while (true) {
        switch (estado) {
            case "inicio":
                const acao = yield "Estado: início";
                estado = acao === "play" ? "reproduzindo" : "parado";
                break;
                
            case "reproduzindo":
                const comando = yield "Estado: reproduzindo";
                estado = comando === "pause" ? "pausado" : 
                        comando === "stop" ? "parado" : "reproduzindo";
                break;
                
            case "pausado":
                const retomada = yield "Estado: pausado";
                estado = retomada === "play" ? "reproduzindo" : "parado";
                break;
                
            case "parado":
                const reinicio = yield "Estado: parado";
                estado = reinicio === "play" ? "reproduzindo" : "parado";
                break;
        }
    }
}

const player = maquinaEstado();
console.log(player.next().value);           // "Estado: início"
console.log(player.next("play").value);     // "Estado: reproduzindo"
console.log(player.next("pause").value);    // "Estado: pausado"
```

## ⚠️ Pegadinhas Comuns

### 🐛 Esquecer do Asterisco
```javascript
// ❌ Função normal, não generator
function meuGenerator() {
    yield 1; // SyntaxError!
}

// ✅ Generator function
function* meuGenerator() {
    yield 1; // Funciona!
}
```

### 🐛 Não Verificar done
```javascript
function* pequeno() {
    yield 1;
    yield 2;
}

const gen = pequeno();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next()); // { value: undefined, done: true }

// ✅ Melhor: verificar done
function usarGenerator(generator) {
    let resultado = generator.next();
    while (!resultado.done) {
        console.log(resultado.value);
        resultado = generator.next();
    }
}
```

### 🐛 Generators não são Reutilizáveis
```javascript
function* contador() {
    yield 1;
    yield 2;
}

const gen1 = contador();
console.log([...gen1]); // [1, 2]
console.log([...gen1]); // [] - vazio! Generator foi consumido

// ✅ Criar nova instância
const gen2 = contador();
console.log([...gen2]); // [1, 2]
```

## 🔧 Métodos de Generator

| Método | Descrição | Uso |
|--------|-----------|-----|
| `next(valor)` | Avança para próximo yield | `gen.next()` |
| `return(valor)` | Força conclusão | `gen.return("fim")` |
| `throw(erro)` | Lança erro no generator | `gen.throw(new Error())` |
| `Symbol.iterator` | Torna iterável | `for...of` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - Generators](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*)
- [JavaScript.info - Generators](https://javascript.info/generators)

### 🎯 Próximas Aulas
- **Aula 16**: Método Map - Transformando arrays

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito de generator functions
- [ ] Sei usar function* e yield
- [ ] Compreendo o objeto retornado por next()
- [ ] Consigo criar generators infinitos
- [ ] Sei usar generators com for...of
- [ ] Entendo quando usar generators vs arrays normais

**🎉 Parabéns! Você dominou Funções Geradoras!**
