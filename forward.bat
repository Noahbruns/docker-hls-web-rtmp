@echo off
set /p key="Enter Local Key: "
set /p yt="Enter Youtube ID: "

@echo on

docker exec -it docker-hls-web-rtmp ffmpeg -i rtmp://localhost/live/%key% -f flv rtmp://x.rtmp.youtube.com/live2/%yt%