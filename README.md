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

This Server can handle multiple Streams at once. Each Stream must be assigned to an distinct *<stream_key>* which can be freely selected. It must be an arbitrary string containing letters or numbers.

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
```
http://<server address>/#<stream_key>
```

If no #<stream_key> is added the active Streams are listed and the user can select one by clicking the button in the header.

**To watch Stream in VLC or any other rtmp player use**
```
rtmp://<server address>/live/<stream_key>
```

**Statistics etc.**
```
http://<server address>/stats
```