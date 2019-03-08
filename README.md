# Geofences e Timetrakings

MyWork Challenge

**Setup:**

​	Ruby - 2.5.1

​	Rails - 5.2.2

​	PostgreSQL - 11.2

​	Bootstrap - 4.3.1

​	jQuery - 3.3.1

​	Popper.js - 1.14.7

**Install:**

Clone the project

```shell
git clone https://github.com/joathan/challenge-mywork.git
```

Enter the project folder

```shell
cd challenge-mywork
```

Run to download the gems

```sh
bundle install
```

Run to install bootstrap, jquery, and popper.js

```shell
npm install
```

Run to create the credentials (* I used atom as the default editor *)

```shell
EDITOR=atom rails credentials:edit
```

Add the end of the ***xxx.credentials.yml*** file to the bottom line.

```yaml
google_maps_api_key: AIzaSyAWWPJ-0J2NFBY6JycCjSF5d1hRvd1MaNM
```

> *I used my google maps API, it will soon be deactivated.*

Edit the database file, with the data of your server.

***challenge-mywork/config/database.yml***

```yaml
default: &default
  adapter: postgresql     # Database to be used
  encoding: unicode		
  username: joathan       # User of your database
  password:               # Password for your database
  host: localhost         
  port: 5432              # Default database port
...
```

Run the commands, to delete, create the database, and run the migrations.

```ruby
rails db:drop db:create db:migrate
```

Run the command to run the server

```ruby
rails s
```

Go to:

```
http://localhost:3000
```

**Considerations:**

​	The gem **geokit-rails** was used in order to facilitate the calculation of the distance between two points.

​	**Yarn** was used to facilitate the management of **Bootstrap**, **jQuery** and **Popper.js**





#### pt-BR

------

Desafio MyWork.

**Setup:**

​	Ruby - 2.5.1

​	Rails - 5.2.2

​	PostgreSQL - 11.2

​	Bootstrap - 4.3.1

​	jQuery - 3.3.1

​	Popper.js - 1.14.7

**Instalação:**

Clonar o projeto

```shell
git clone https://github.com/joathan/challenge-mywork.git
```

Entre na pasta do projeto

```shell
cd challenge-mywork
```

Execute para baixar as gems

```sh
bundle install
```

Execute para instalar bootstrap, jquery e popper.js

```shell
npm install
```

Execute para criar as credenciais (*Usei o atom como editor padrão*)

```shell
EDITOR=atom rails credentials:edit
```

Adicione no final do arquivo ***xxx.credentials.yml*** a linha a baixo.

```yaml
google_maps_api_key: AIzaSyAWWPJ-0J2NFBY6JycCjSF5d1hRvd1MaNM
```

> *Usei minha API do google maps, em breve será desativada.*

Edite o arquivo do banco de dados, com os dados do seu servidor.

***challenge-mywork/config/database.yml***

```yaml
default: &default
  adapter: postgresql      # Banco de dados a ser utilizado
  encoding: unicode		
  username: joathan        # Usuário do seu banco de dados
  password:                # Senha do seu banco de dados
  host: localhost		
  port: 5432               # Porta padrão do banco de dados
...
```

Execute os comandos a baixo, para excluir, criar o banco de dados e rodar as migrações.

```ruby
rails db:drop db:create db:migrate
```

Execute o comando para rodar o servidor

```ruby
rails s
```

Acesse:

```
http://localhost:3000
```

**Considerações:**

​	A gem **geokit-rails** foi utilizada no intuito de facilitar o cálculo de distância entre dois pontos.

​	Foi utilizado o **yarn**, para facilitar o gerenciamento do **Bootstrap**, **jQuery** e **Popper.js**