# Bê - A Assistente de Finanças Pessoais da Bemobi

Bê é uma assistente financeira pessoal que ajuda os usuários a monitorar suas contas, prever gastos e receber recomendações inteligentes sobre como administrar melhor seu dinheiro. Ela oferece insights personalizados sobre pagamentos, saldo disponível e cortes de gastos, tudo de maneira simples e prática.

---

## Funcionalidades Atuais

- **Tela de Boas-vindas**: Mostra o nome do usuário e informações do contrato.
- **Atualizações e Notificações**: Exibe novidades, alertas de saldo insuficiente e mensagens da Bê.
- **Assistência da Bê**: Painel interativo com dicas de gastos, contas a pagar e sugestões de economia.
- **Quick Cards**: Acesso rápido a ações como "Upgrade de plano", "Contratar Serviços" e "Negociar Débitos".
- **Saldo Atual**: Visualização do saldo disponível, status das contas e botão para pagar imediatamente.
- **Dropdown Interativo**: Insights podem ser expandidos ou recolhidos com animações suaves.
- **Integração com Backend**: Busca dados dinâmicos da API (`/usuario`, `/contas`, `/analise`) para substituir os mocks.
- **Responsividade e Usabilidade**: Layout adaptado para desktop e mobile, com ícones e emojis para facilitar a leitura.

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas
- **CSS**: Estilização, layout e responsividade
- **JavaScript (Vanilla)**: Interatividade, fetch da API e manipulação do DOM
- **Integração com Backend**: Consome rotas RESTful do backend Node.js/Express

---

## Backend

O backend do projeto **Bê da Bemobi** é responsável por fornecer os dados, realizar análises financeiras e gerar insights para a assistente Bê.

- Repositório Backend: [Bemobi-Hackaton-Backend](https://github.com/Caiorossi00/Bemobi-Hackaton-backend)  
- Estrutura: Node.js, Express.js  
- Fornece rotas RESTful para o frontend consumir:  
  - `/usuario` → retorna os dados do usuário  
  - `/contas` → retorna a lista de contas  
  - `/analise` → retorna insights financeiros e sugestões de corte
- Possível evolução: integração com banco de dados real (SQL/NoSQL) e uso de Machine Learning/IA para análises inteligentes


## Acesse o Projeto

Você pode visualizar a aplicação em funcionamento através do seguinte link:

[Deploy](https://caiorossi00.github.io/Bemobi-Hackaton-frontend/)

<img src="https://github.com/Caiorossi00/Bemobi-Hackaton-frontend/blob/main/UI.png?raw=true" alt="Frontend Preview" width="600"/>

