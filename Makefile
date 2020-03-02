up:
	docker-composer up

migrate:
	docker exec -it api php artisan migrate:fresh