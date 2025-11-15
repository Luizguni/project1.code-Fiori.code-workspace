# 📘 Project1 Fiori App

Aplicação SAP Fiori desenvolvida utilizando SAPUI5 e estruturada no VS Code com suporte ao Fiori Tools.  
O projeto demonstra a arquitetura padrão UI5 com Component, Manifest, MVC e modelagem modular.

---

## 🔍 Visão Geral

Este repositório contém uma aplicação Fiori criada para fins de estudo, prática e evolução técnica na stack SAPUI5.  
A aplicação segue boas práticas recomendadas pela SAP e pode ser executada localmente ou integrada ao SAP BTP e SAP Gateway.

---

## 📂 Estrutura do Projeto

project1/
│
├── webapp/
│ ├── controller/
│ │ └── Main.controller.js
│ ├── view/
│ │ └── Main.view.xml
│ ├── i18n/
│ │ └── i18n.properties
│ ├── model/
│ │ └── models.js
│ ├── Component.js
│ ├── index.html
│ ├── manifest.json
│ └── style.css
│
├── ui5.yaml
└── package.json


Principais pontos  
• `Component.js` gerencia inicialização, router e modelos.  
• `manifest.json` contém metadata, rotas, configurações e definições da aplicação.  
• Views em XML no padrão MVC.  
• Lógica encapsulada em controllers JavaScript.  
• Recursos de internacionalização centralizados no i18n.

---

## 🚀 Como Executar Localmente

### Pré requisitos

Node.js instalado  
UI5 CLI instalada globalmente  
VS Code com SAP Fiori Tools

Instalação da UI5 CLI:

npm install --global @ui5/cli

### Rodar a aplicação

ui5 serve --open

A aplicação será aberta no navegador em modo de desenvolvimento.

---

## 🧩 Tecnologias Utilizadas

SAPUI5  
SAP Fiori Elements  
JavaScript ES6  
UI5 CLI  
Fiori Tools no VS Code

---

## 🧱 Arquitetura UI5

A aplicação segue o padrão MVC com:

• Views XML  
• Controllers JavaScript  
• Models no formato JSON ou ResourceModel  
• Router configurado no `manifest.json`  
• Inicialização feita no `Component.js` com suporte a carregamento assíncrono

Essa abordagem garante modularidade, legibilidade e alta extensibilidade.

---

## 🧪 Melhorias Futuras

• Integração com serviços OData  
• Criação de fragments reaproveitáveis  
• Testes QUnit e OPA5  
• Deploy no SAP BTP  
• Conexão com SAP Gateway

---

## 📌 Como Contribuir

Clonar o repositório:

git clone https://github.com/Luizguni/project1.code-Fiori.code-workspace.git

Criar uma nova branch:

git checkout -b feature_nome

Enviar alterações:

git add .
git commit -m "Descrição da alteração"
git push origin feature_nome


## 📄 Licença

Projeto disponível para fins de estudo e demonstração técnica.


