# 🌟 Aula 07: Break e Continue

## 🎯 Objetivo
Aprender a controlar o fluxo de execução em loops usando os comandos `break` (para interromper loops) e `continue` (para pular iterações), otimizando a lógica e performance do código.

## 📚 Conceitos Fundamentais

### 🔧 Comandos de Controle de Fluxo
Ferramentas para controlar quando e como os loops executam.

### 📊 Break vs Continue
| Comando | Ação | Efeito | Quando usar |
|---------|------|--------|-------------|
| `break` | Para o loop | Sai completamente | Condição de parada encontrada |
| `continue` | Pula iteração | Vai para próxima iteração | Ignorar valores específicos |

## 🚀 Implementação

### 📝 Arquivo: `aula07.js`
```javascript
let n = 0;
let max = 1000;

// Exemplo com BREAK - para o loop completamente
while(n < max) {
    console.log('CFB Cursos - ' + n);
    if(n > 8) {
        break;  // 🛑 Para o loop quando n > 8
    }
    n++;
}

// Exemplo com CONTINUE - conta números pares
let pares = 0;
for (let i = 0; i < max; i++) {
    if (i % 2 !== 0) {   // Se é ímpar
        continue;        // ⏭️ Pula para próxima iteração
    }
    pares++;            // Conta apenas os pares
}

console.log("Quantidade de números pares: " + pares);
```

## 🧪 Experimentação

### 🔬 Teste 1: Break em Busca
```javascript
const numeros = [1, 5, 8, 12, 15, 20, 25];
const procurado = 12;

for (let i = 0; i < numeros.length; i++) {
    console.log(`Verificando: ${numeros[i]}`);
    
    if (numeros[i] === procurado) {
        console.log(`✅ Encontrado ${procurado} na posição ${i}!`);
        break;  // Para a busca quando encontra
    }
}
```

### 🔬 Teste 2: Continue com Filtros
```javascript
const idades = [15, 22, 17, 30, 45, 16, 25];

console.log("Pessoas maiores de idade:");
for (let idade of idades) {
    if (idade < 18) {
        continue;  // Pula menores de idade
    }
    console.log(`${idade} anos - Maior de idade ✅`);
}
```

### 🔬 Teste 3: Break e Continue Juntos
```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;  // Pula múltiplos de 3
    }
    
    if (i > 15) {
        break;     // Para quando passa de 15
    }
    
    console.log(i);  // Mostra apenas: 1,2,4,5,7,8,10,11,13,14
}
```

## 💡 Casos de Uso Práticos

### ✅ Use Break quando:
- Encontrar o item procurado em uma busca
- Atingir um limite específico
- Encontrar uma condição de erro
- Validar dados até primeiro erro
- Sair de loops infinitos controlados

### ✅ Use Continue quando:
- Filtrar dados em processamento
- Pular valores inválidos
- Processar apenas itens específicos
- Ignorar casos especiais
- Otimizar performance pulando processamento desnecessário

### 📋 Exemplos Práticos
```javascript
// Busca por usuário específico
const usuarios = [{id: 1, nome: "Ana"}, {id: 2, nome: "João"}];
const idProcurado = 2;

for (let usuario of usuarios) {
    if (usuario.id === idProcurado) {
        console.log(`Usuário encontrado: ${usuario.nome}`);
        break;  // Para quando encontra
    }
}

// Processar apenas arquivos válidos
const arquivos = ["doc.pdf", "temp.tmp", "img.jpg", "backup.bak"];

for (let arquivo of arquivos) {
    if (arquivo.includes(".tmp") || arquivo.includes(".bak")) {
        continue;  // Pula arquivos temporários
    }
    console.log(`Processando: ${arquivo}`);
}
```

## ⚠️ Pegadinhas Comuns

### 🐛 Break em Loops Aninhados
```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            break;  // ❌ Só sai do loop interno!
        }
        console.log(`i:${i}, j:${j}`);
    }
}
```

### ✅ Solução: Labels ou Flags
```javascript
// Usando label
externo: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            break externo;  // ✅ Sai de ambos os loops
        }
        console.log(`i:${i}, j:${j}`);
    }
}

// Usando flag
let parar = false;
for (let i = 0; i < 3 && !parar; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            parar = true;
            break;
        }
        console.log(`i:${i}, j:${j}`);
    }
}
```

### 🐛 Continue sem Incremento
```javascript
let i = 0;
while (i < 10) {
    if (i % 2 === 0) {
        continue;  // ❌ Não incrementa i, loop infinito!
    }
    console.log(i);
    i++;
}
```

### ✅ Solução: Incrementar Antes
```javascript
let i = 0;
while (i < 10) {
    i++;  // ✅ Incrementa primeiro
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
```

## 🔧 Comandos Relacionados

| Comando | Escopo | Efeito | Uso comum |
|---------|---------|--------|-----------|
| `break` | Loop atual | Para completamente | Busca, condições de parada |
| `continue` | Iteração atual | Pula para próxima | Filtros, validações |
| `return` | Função | Sai da função | Retornar valores/sair cedo |
| `throw` | Bloco try/catch | Lança exceção | Tratamento de erros |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - break](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/break)
- [MDN - continue](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/continue)

### 🎯 Próximas Aulas
- **Aula 08**: Introdução a Funções - Organizando código em blocos reutilizáveis

---

## 📋 Checklist de Aprendizado

- [ ] Entendi a diferença entre break e continue
- [ ] Sei quando usar cada comando
- [ ] Consigo aplicar em buscas e filtros
- [ ] Evito loops infinitos com continue
- [ ] Compreendo o comportamento em loops aninhados
- [ ] Posso otimizar loops com esses comandos

**🎉 Parabéns! Você dominou Break e Continue!**
