# 🌟 Aula 06: Loop Do...While

## 🎯 Objetivo
Entender a estrutura `do...while`, que executa o bloco de código ANTES de verificar a condição, garantindo pelo menos uma execução mesmo quando a condição é falsa desde o início.

## 📚 Conceitos Fundamentais

### 🔧 Loop Do...While
Uma estrutura de repetição que executa o código PRIMEIRO e depois verifica a condição. Garante ao menos uma execução do bloco.

### 📊 Comparação While vs Do...While
| Característica | While | Do...While |
|----------------|-------|-------------|
| Verificação | Antes de executar | Depois de executar |
| Execução mínima | 0 vezes | 1 vez (sempre) |
| Sintaxe | `while(condição) {}` | `do {} while(condição);` |
| Uso ideal | Pode não executar | Deve executar ao menos uma vez |

## 🚀 Implementação

### 📝 Arquivo: `aula06.js`
```javascript
let n = 10;  // Variável iniciada em 10

do {
    console.log("CFB Cursos");  // Executa primeiro
    n++;                        // Incrementa n
} while (n < 10);               // Verifica depois (condição falsa)

console.log('Fim do programa');

// Resultado: "CFB Cursos" é exibido UMA vez, mesmo com condição falsa!
```

## 🧪 Experimentação

### 🔬 Teste 1: Comparação Direta
```javascript
// While tradicional - não executa
let a = 10;
while (a < 5) {
    console.log("While: não vai executar");
}

// Do...While - executa pelo menos uma vez
let b = 10;
do {
    console.log("Do...While: executa uma vez!");
    b++;
} while (b < 5);
```

### 🔬 Teste 2: Menu de Opções
```javascript
let opcao;
do {
    console.log("=== MENU ===");
    console.log("1. Opção A");
    console.log("2. Opção B");
    console.log("0. Sair");
    
    // opcao = prompt("Escolha uma opção:"); // Em navegador
    opcao = 0; // Simulando para exemplo
    
    if (opcao === 1) console.log("Você escolheu A");
    if (opcao === 2) console.log("Você escolheu B");
    
} while (opcao !== 0);
```

### 🔬 Teste 3: Validação de Input
```javascript
let numero;
do {
    // numero = prompt("Digite um número entre 1 e 10:");
    numero = Math.floor(Math.random() * 15) + 1; // Simulando
    console.log(`Tentativa: ${numero}`);
    
    if (numero < 1 || numero > 10) {
        console.log("Número inválido! Tente novamente.");
    }
} while (numero < 1 || numero > 10);

console.log(`Número válido: ${numero}`);
```

## 💡 Casos de Uso Práticos

### ✅ Quando Usar Do...While
- Menus interativos (mostrar pelo menos uma vez)
- Validação de entrada do usuário
- Jogos (primeira rodada sempre executa)
- Processos que devem rodar ao menos uma vez
- Algoritmos que precisam de uma tentativa inicial

### ✅ Exemplos Práticos
```javascript
// Login - pelo menos uma tentativa
let senha;
do {
    senha = "123456"; // Em sistema real: prompt()
    if (senha !== "senha123") {
        console.log("Senha incorreta!");
    }
} while (senha !== "senha123");

// Jogo - pelo menos uma partida
let jogarNovamente;
do {
    console.log("🎮 Iniciando jogo...");
    // ... lógica do jogo ...
    jogarNovamente = false; // Em sistema real: confirm()
} while (jogarNovamente);
```

### ❌ Quando NÃO Usar
- Quando não há certeza se deve executar
- Para loops com contadores simples
- Quando while tradicional é mais claro

## ⚠️ Pegadinhas Comuns

### 🐛 Esquecer o Ponto e Vírgula
```javascript
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5)  // ❌ Faltou ; no final!
```

### ✅ Sintaxe Correta
```javascript
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5);  // ✅ Ponto e vírgula obrigatório!
```

### 🐛 Confundir com While
```javascript
// ❌ Pensando que é while comum
let n = 10;
do {
    console.log("Vai executar?"); // Sim! Sempre executa uma vez
} while (n < 5); // Mesmo sendo falso
```

## 🔧 Estruturas Relacionadas

| Estrutura | Execução Mínima | Verificação | Uso |
|-----------|-----------------|-------------|-----|
| `while` | 0 vezes | Antes | Pode não executar |
| `do...while` | 1 vez | Depois | Deve executar ao menos uma vez |
| `for` | 0 vezes | Antes | Contador conhecido |
| `for...of` | 0 vezes | Implícita | Iteração sobre valores |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - do...while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while)
- [JavaScript.info - Loops](https://javascript.info/while-for)

### 🎯 Próximas Aulas
- **Aula 07**: Break e Continue - Controle de fluxo em loops

---

## 📋 Checklist de Aprendizado

- [ ] Entendi a diferença entre while e do...while
- [ ] Sei quando usar do...while vs while
- [ ] Lembro da sintaxe correta (com ponto e vírgula)
- [ ] Consigo aplicar em menus e validações
- [ ] Entendo que executa pelo menos uma vez
- [ ] Posso criar loops de validação eficientes

**🎉 Parabéns! Você dominou o Loop Do...While!**
