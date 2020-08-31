docker run --rm -d -p 1935:1935 -p 80:8080 -v %cd%\nginx.conf:/etc/nginx/nginx.conf -v %cd%\html:/web --name docker-hls-web-rtmp alqutami/rtmp-hls

PAUSE