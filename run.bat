docker run -d -p 1935:1935 -p 80:8080 -v "%cd%\nginx.conf":/etc/nginx/nginx.conf -v "%cd%\html":/web --restart unless-stopped --name docker-hls-web-rtmp alqutami/rtmp-hls

PAUSE