db:
	docker-compose up -d

laravel:
	cd api &&\
	composer install &&\
	php artisan migrate:fresh &&\
	php artisan serve

vue:
	cd client &&\
	yarn &&\
	yarn serve