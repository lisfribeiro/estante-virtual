# ESTANTE VIRTUAL 
### :dart: :running_woman: Jogos Olímpicos 
O intuito desse projeto é construir uma API REST em **TypeScript** para o COB (Comitê Olímpico Brasileiro), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

- 100m rasos: Menor tempo vence
- Lançamento de Dardo: Maior distância vence

Acesse o desafio clicando [aqui](https://github.com/estantevirtual/teste_ev).

<br>

## 🔗 Link Documentação
 - Acesse a documentação clicando [aqui](https://documenter.getpostman.com/view/20352183/VUjLJS4p).
 
## 🔗 Link Heroku
- Acesse o deploy clicando [aqui](https://shaw-estante-virtual.herokuapp.com/).

<br>

## Requisitos & Funcionalidades
✅ Criar uma competição; <br>
✅ Criar um atleta; <br>
✅ Buscar todas as competições; <br>
✅ Buscar todos os atletas; <br>
✅ Cadastrar resultados para uma competição (todos os campos são obrigatórios); <br>
✅ Finalizar uma competição; <br>
✅ Retornar o ranking da competição, exibindo a posição final de cada atleta; <br>
✅ A API não deve aceitar cadastros de resultados se a competição já estiver encerrada; <br>
✅ A API pode retornar o ranking/resultado parcial, caso a disputa ainda não estiver encerrada; <br>
✅ No caso da competição do lançamento de dardos, cada atleta terá 3 chances, e o resultado da competição deverá levar em conta o lançamento mais distante de cada atleta. <br>
✅ Testes unitários realizados. 

<br>

## Ferramentas
- typescript;
- cors;
- dotenv;
- express;
- jest;
- knex;
- mysql;
- ts-jest;
- uuid.

<br>

## Acessar Projeto Localmente

- Clonar o repositório:
```
$ git clone LinkDoRepositorio
```

- Acessar parte back-end:
```
$ cd back-end
```

- Instalar dependências do back-end:
```
$ npm install
```

- Executar projeto back-end:
```
 $ npm start / npm run dev
 ```

 Criar um arquivo .env e inserir os seguintes dados sensíveis: <br>
 ```DB_HOST = ``` <br>
 ```DB_USER = ``` <br>
``` DB_PASS = ``` <br>
 ```DB_SCHEMA = ``` <br>
``` DB_PORT = ``` 

<br>

## 👩🏻‍💻 Desenvolvedora
[<img src="https://avatars.githubusercontent.com/u/99182969?v=4" width=115><br><sub>Lis Fernanda Ribeiro dos Santos</sub>](https://github.com/lisfribeiro) |
| :---: |
