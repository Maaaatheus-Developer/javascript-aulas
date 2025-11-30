# aula54.js - Impressão de Tabela em Nova Janela

Este código permite que o usuário imprima o conteúdo de uma tabela HTML de forma estilizada, abrindo uma nova janela para visualização e impressão.

## Funcionamento

1. **Seleção do botão**
   - `document.getElementById("btn_imp")`: Seleciona o botão de impressão pelo id.

2. **Evento de clique**
   - Ao clicar no botão, o código captura o conteúdo HTML da tabela (`document.getElementById("tabela").innerHTML`).

3. **Criação do estilo**
   - O estilo CSS é montado em uma string para formatar a tabela impressa.

4. **Abertura de nova janela**
   - `window.open()`: Abre uma nova janela do navegador para exibir o conteúdo a ser impresso.

5. **Escrita do conteúdo**
   - `win.document.write()`: Escreve o HTML, o estilo e o conteúdo da tabela na nova janela.
   - `win.document.close()`: Finaliza a escrita, permitindo que o navegador processe o conteúdo.

6. **Impressão automática**
   - `win.onload = () => { win.print(); }`: Quando o conteúdo termina de carregar, abre a tela de impressão.
   - `win.onafterprint = () => { win.close(); }`: Fecha a janela após a impressão ou cancelamento.

## Funções Utilizadas

- **window.open(url, nome, características)**: Abre uma nova janela ou aba do navegador.
- **document.write(conteúdo)**: Escreve HTML diretamente no documento da janela.
- **document.close()**: Finaliza o fluxo de escrita do documento, permitindo o carregamento.
- **window.print()**: Abre a caixa de diálogo de impressão do navegador.
- **window.close()**: Fecha a janela do navegador.
- **window.onload**: Evento disparado quando o conteúdo da janela termina de carregar.
- **window.onafterprint**: Evento disparado após a impressão ou cancelamento.

## Observação

O código garante que a janela de impressão seja aberta automaticamente e fechada após a ação do usuário, tornando o processo prático e rápido.