# Docker hls Web RTMP

**Based on https://github.com/TareqAlqutami/rtmp-hls-server**

## To run the server
```
./run
```

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