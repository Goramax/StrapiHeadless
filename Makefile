up :
	docker compose up -d

stop :
	docker compose stop

start :
	docker compose start

remove :
	docker-compose down -v --rmi local --remove-orphans
	docker image prune -a -f