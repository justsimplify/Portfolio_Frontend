docker stop frontend
docker rm frontend
docker rmi portfolio-frontend
docker build -t portfolio-frontend .
docker run -d -p 8087:8087 --name=frontend portfolio-frontend