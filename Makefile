deploy:
	docker compose up -d

clean:
	docker compose down -v && docker rmi homehub:latest
