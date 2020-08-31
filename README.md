# Docker hls Web RTMP

**Based on https://github.com/TareqAlqutami/rtmp-hls-server**

## To Run on Windows
1. Activate Virtualisation on CPU in BIOS
2. Download and  Install https://hub.docker.com/editions/community/docker-ce-desktop-windows/
3. Run run.bat

## To Run on Linux
2. Install Docker
3. Execute ```./run```

## Modifications

Modify the *run* file to change exported Ports etc. 

The *html* Directory contains the Served html/css/js files that can by changed if needed.

## To Stream

**Stream live RTMP content to:**
```
rtmp://<server address>/live/<stream_key>
```

**For OBS:**
```
Service: Custom...
Server: rtmp://<server address>/live/
Stream Key: <stream_key>
```

## To Watch

**To watch Stream in the Web Browser**

If no *#<stream_key>* is added it will be set to *#stream*
```
http://<server address>/#<stream_key>
```

**To watch Stream in VLC or any other rtmp player use**
```
rtmp://<server address>/live/<stream_key>
```

**Statistics etc.**
```
http://<server address>/stats
```