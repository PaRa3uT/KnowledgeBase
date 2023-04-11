# [Redis](https://redis.io/)
```
DEL key [key ...] - Removes the specified keys. A key is ignored if it does not exist. Return value Integer reply: The number of keys that were removed
GET key  - Get the value of key. If the key does not exist the special value nil is returned. An error is returned if the value stored at key is not a string, because GET only handles string values. Return value Bulk string reply: the value of key, or nil when key does not exist.
```
