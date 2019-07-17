PARA FAZER O DEPLOY NO HEROKU - Dentro da /webparking-front:

- docker build -t parkingspot .
- heroku login
- heroku container:login
- docker tag parkingspot registry.heroku.com/parkingspot-front/web
- docker push registry.heroku.com/parkingspot-front/web
- heroku container:release web -a parkingspot-front
