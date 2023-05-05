start:
	@docker-compose up -d

develop:
	@docker-compose up
	
stop:
	@docker-compose down

reset:
	@docker rmi $(shell docker images -q)
	@docker volume rm $(shell docker volume ls -q)
