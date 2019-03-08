# Geofences e Timetrakings

MyWork Challenge

**Setup:**

​	Ruby - 2.5.1

​	Rails - 5.2.2

​	PostgreSQL - 11.2

​	Bootstrap - 4.3.1

​	jQuery - 3.3.1

​	Popper.js - 1.14.7

**GEMs:**

Add to file challenge-mywork/Gemfile

```shell
gem 'geokit-rails'
```

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

Edit the database file, with the data of your server.

challenge-mywork/config/database.yml***

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

**GEMs:**

Adicione no arquivo challenge-mywork/Gemfile

```shell
gem 'geokit-rails'
```

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

Edite o arquivo do banco de dados, com os dados do seu servidor.

***challenge-mywork/config/database.yml***

```yaml
default: &default
  adapter: postgresql      # Banco de dados a ser utilizado
  encoding: unicode		
  username: joathan	       # Usuário do seu banco de dados
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