FROM baseImage

# Path: Docker\Works\.dockerignore

# Path: Docker\Works\docker-compose.yml
version: '3.7'
services:
  web:
    build: .
    ports:
      - "80:80"
    volumes:
      - .:/app
    depends_on:
      - db
  db:
    image: mysql:5.7
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: test
      MYSQL_USER: test
      MYSQL_PASSWORD: test
    volumes:
      - ./db:/var/lib/mysql



# Path: Docker\Works\docker-compose.override.yml
version: '3.7'
services:
  web:
    ports:
      - "8080:80"
    volumes:
      - .:/app
    depends_on:
      - db
  db:
    image: mysql:5.7
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: test
      MYSQL_USER: test
      MYSQL_PASSWORD: test
    volumes:
      - ./db:/var/lib/mysql

      