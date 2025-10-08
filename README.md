# 🎲 Sorteador de Números

Um sorteador de números aleatórios desenvolvido como desafio prático do curso de Lógica de Programação da Alura.

![Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/Alura-0055FF?style=for-the-badge&logo=alura&logoColor=white)

## 📋 Sobre o Projeto

Este é um desafio prático do curso **"Lógica de Programação: Explore Funções e Listas"** da [Alura](https://www.alura.com.br/).

O projeto foi fornecido com HTML e CSS prontos, e o desafio consistiu em **implementar toda a lógica JavaScript** para criar um sorteador de números aleatórios sem repetição. O foco foi aplicar conceitos de lógica de programação, funções, manipulação do DOM e validações.

## ✨ Funcionalidades

- ✅ Sorteia números aleatórios sem repetição
- ✅ Define quantidade de números a sortear
- ✅ Define intervalo customizado (de/até)
- ✅ Validações de entrada:
  - Verifica se "De" é menor que "Até"
  - Verifica se a quantidade cabe no intervalo
- ✅ Botão de reiniciar para limpar os campos
- ✅ Interface responsiva e moderna
- ✅ Design com gradiente azul e efeitos visuais

## 🚀 Como Usar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/sorteador-numeros.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd sorteador-numeros
   ```

3. **Abra o arquivo `index.html` no seu navegador**

   Ou utilize a extensão Live Server do VS Code para um ambiente de desenvolvimento local.

## 🎮 Instruções de Uso

1. Digite a **quantidade de números** que deseja sortear
2. Informe o número inicial no campo **"Do número"**
3. Informe o número final no campo **"Até o número"**
4. Clique em **"Sortear"** para gerar os números aleatórios
5. Use **"Reiniciar"** para limpar e fazer um novo sorteio

### Exemplo:

- Quantidade: `5`
- Do número: `1`
- Até o número: `60`
- Resultado: `[3, 15, 27, 42, 58]`

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura fornecida pelo curso
- **CSS3** - Estilização fornecida pelo curso
- **JavaScript (Vanilla)** - Lógica implementada como desafio
- **Google Fonts** - Tipografia (Chakra Petch e Inter)

## 📁 Estrutura do Projeto

```
sorteador-numeros/
│
├── index.html          # Página principal
├── app.js              # Lógica JavaScript
├── style.css           # Estilos CSS
├── img/                # Imagens do projeto
│   ├── ia.png
│   ├── code.png
│   └── Ruido.png
└── README.md           # Documentação
```

## 🧩 Principais Funções (JavaScript implementado)

### `sortear()`

Função principal que:

- Captura valores dos inputs
- Valida as entradas (de < até e quantidade válida)
- Gera números aleatórios únicos usando loop `while`
- Exibe o resultado na tela

### `obterNumeroAleatorio(min, max)`

Gera um número aleatório entre min e max (inclusivo) usando `Math.random()`

### `alterarStatusBotao()`

Alterna o estado visual do botão "Reiniciar" manipulando classes CSS

### `reiniciar()`

Limpa todos os campos e reseta o estado inicial da aplicação

## 🎨 Preview

_Aplicação para sortear números aleatórios sem repetição_

## 🔮 Possíveis Melhorias

Ideias para evoluir o projeto:

- Adicionar validação para campos vazios (isNaN)
- Substituir `alert()` por feedback visual na página
- Opção de ordenar números sorteados
- Animações nos resultados

## 👨‍💻 Sobre

Desafio prático do curso **"Lógica de Programação: Explore Funções e Listas"** da [Alura](https://www.alura.com.br/).

**Estrutura fornecida:** HTML e CSS  
**Desafio:** Implementar toda a lógica JavaScript

### Conceitos aplicados:

- ✅ Manipulação do DOM (`getElementById`, `innerHTML`)
- ✅ Criação e uso de funções
- ✅ Validações de entrada de dados
- ✅ Estruturas de repetição (`while`)
- ✅ Geração de números aleatórios com `Math.random()`
- ✅ Trabalho com arrays e método `includes()`
- ✅ Controle de classes CSS via JavaScript

### Desenvolvido por:

**Ricardo S. Linhares**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ricardoslinhares)

## 📝 Licença

Este projeto faz parte do material educacional da Alura.

---

⭐ Projeto desenvolvido como prática de lógica de programação
