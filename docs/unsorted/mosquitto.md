# [Mosquitto](https://mosquitto.org/)
1.6.9 (default) bind websockets port on windows
2.0.14 (default) don't bind websocket port on Windows
```
mosquitto
mosquitto -v -c mosquitto.conf
mosquitto_sub -t test/topic -v
mosquitto_pub -t test/topic -m 'hello world'
```
