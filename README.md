# 🤖 ReUseBot

Chatbot criado com **IBM Watson Assistant** para automatizar tarefas e orientar usuários da plataforma **ReUse**.

---

## 💡 Funcionalidades

- Pausar anúncios  
- Reativar anúncios  
- Ver status das trocas  
- Instruções para cadastrar um item  
- Lista de itens permitidos e proibidos  
- Orientação para falar com outro usuário  

---

## ⚙️ Como usar

1. **Importar o assistente no IBM Watson Assistant**
   - Crie um novo Assistant no painel da IBM Cloud.
   - Importe o arquivo `assistant.json` com os fluxos do ReUseBot.
   - Publique e teste no botão *Preview*.

2. **Rodar o servidor simulado (mock)**
   ```bash
   npm install express cors
   node server.js
   ```

3. **Configurar os Webhooks**
   - No Watson Assistant → *Actions* → *Call API*, use as URLs:
     - `http://localhost:3000/pause`
     - `http://localhost:3000/resume`
     - `http://localhost:3000/trades`

4. **Testar**
   - Acesse o chat no Preview do Watson.
   - Use frases como:
     - “Quero pausar o anúncio 1234”
     - “Ver status das minhas trocas”

---

## 📁 Estrutura do Projeto

```
reuse-bot/
├─ assistant.json          # Fluxos exportados do Watson Assistant
├─ server.js               # Servidor simulado (mock)
├─ README.md               # Este arquivo
└─ docs/
   └─ ReUseBot_Trabalho.pdf
```

---

## 🧩 Tecnologias Usadas
- IBM Watson Assistant
- Node.js + Express
- JSON / API Mock

---

## 📚 Autor
Desenvolvido como parte da atividade prática do projeto **ReUse**, integrando automação e suporte ao usuário com IA.
