# [RabbitMQ](https://www.rabbitmq.com)
```
rabbitmqctl list_queues name messages_ready messages_unacknowledged
rabbitmqctl delete_queue <queue_name>
rabbitmqctl list_exchanges
rabbitmqctl list_bindings
rabbitmq-diagnostics -q ping
rabbitmq-diagnostics -q status
rabbitmq-diagnostics -q alarms
rabbitmq-diagnostics -q check_running && rabbitmq-diagnostics -q check_local_alarms
rabbitmq-diagnostics -q memory_breakdown --unit "MB"
rabbitmq-diagnostics -q listeners
rabbitmq-diagnostics -q check_port_connectivity
rabbitmq-diagnostics -q check_virtual_hosts
rabbitmq-plugins -q list --enabled --minimal
rabbitmq-plugins -q is_enabled rabbitmq_shovel
rabbitmq-plugins enable rabbitmq_mqtt
```

```
rabbitmq-plugins enable rabbitmq_management
rabbitmqctl add_user mqtt-test mqtt-test
rabbitmqctl set_permissions -p / mqtt-test ".*" ".*" ".*"
rabbitmqctl set_user_tags mqtt-test management
```
