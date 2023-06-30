run:
	docker run -d -p 3000:3000 -v an:/app/public --name anevocontainer anevoimage:1.0.0.1
stop:
	docker stop anevocontainer