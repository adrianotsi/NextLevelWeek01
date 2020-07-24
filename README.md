# Ecoleta
Repositório criado para armazenar o projeto Ecoleta Desenvolvido durante a Next Level Week 01
### 🤔 Anotações

### 🚀 Tecnologias e Bibliotecas Utilizadas:
- [Node JS](https://nodejs.org/en/) 
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Celebrate](https://github.com/arb/celebrate) - Para validações
- [KnexJS](http://knexjs.org/) - Query builder

#### :bulb: Utilizando KnexJS :
Join no Knex:
```
Knex('items')
	.join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
```

Equivale a: 
```
SELECT * FROM items
JOIN point_items
ON items.id = point_items.item_id
WHERE point_items.point_id = {ìd}
```
### :memo: Comandos úteis com knex JS
- npm run knex:migrate = Cria as migrations;
- npm run knex:seed = Envia seeds para o banco
- npx knex = Lista todos os comandos;  
- npx knex migrate:rollback = Defaz último comando latest;
- npx Knex migrate:status = Lista migations já executadas.

#### :mag_right: Observações sobre métodos de request:
- request.params = Algo obrigatório a ser passado na url;
- request.body = Para criação e edição de dados;
- Rrequest.query = Filtros, paginação, etc....

>CORS: Define quais endereços externos terão acesso a api/aplicação. 


### :book: Conceitos do React e Typescript:
- React.FC = Function component, um componente criado em formato de função, ;
- Generic = Tipo do typescript que pode receber um parâmetro

## :exclamation: Erros que tive no desenvolvimento:

- Ação: Abrir banco de dados SQLite pela extensão recomendada
```
Failed to open database: Database failed to open: SQLite process failed to start. The argument 'file' cannot be empty. Received.
```
- Solução:
Excecutar o comando
```
sudo apt-get install sqlite
```
