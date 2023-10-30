# Use an official NGINX image as the base image
FROM --platform=linux/amd64 nginx:latest

# Define the content of the index.html file directly in the Dockerfile
RUN echo '<!DOCTYPE html> \
<html> \
<head> \
    <title>Hello, World!</title> \
</head> \
<body> \
    <h1>Hello, World! This is served using NGINX in a Docker container.</h1> \
</body> \
</html>' > /usr/share/nginx/html/index.html

# Expose port 80 to allow incoming traffic
EXPOSE 80
