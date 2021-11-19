# Zabbix

Предпочтительнее выбирать активный агент  
Что бы в элементах данных отбрасывались не изменённые данные, в "Элементах данных" добавляем предобработку "Тротлинг" -> "Отбрасывать неизменившиеся с периодическим контролем" = 86400  
В триггерах в имени {HOST.HOST}  

Перезапуск подов в k8s  
```
ЭД  
  Имя  
    Kube перезапуск подов
  Ключ  
    system.run["sudo kubectl get pods -n mts-ermir-prod-dmz --sort-by='.metadata.creationTimestamp' -o jsonpath='{range .items[*]} {.metadata.creationTimestamp}{\"\n\"}{end}'"]
Триггер  
  Имя  
    Произошёл рестарт pods на {HOST.HOST}
  Выражение  
    {Template app Kube:system.run["sudo kubectl get pods -n mts-ermir-prod-dmz --sort-by='.metadata.creationTimestamp' -o jsonpath='{range .items[*]} {.metadata.creationTimestamp}{\"\n\"}{end}'"].diff()}=1  
```
