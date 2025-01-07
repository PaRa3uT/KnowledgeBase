# [Go](https://go.dev/)
```
https://pkg.go.dev/search?q=quote
go build (скомпилировать код и получить бинарник)
go run (скомпилировать и запустить код)

go mod init example.com/greetings (создать файл со списком зависимойстей)
go mod tidy (актуализировать файл со списком зависимостей)
go get (скачать зависимости)

go env (вывести список переменных окружения, используемых Go)
go vet (прогнать линтеры)
go fmt (прогнать автоформатирование кода)

go test (запустить юнит тесты или бенчмарки)
go test -coverprofile=c.out ()
go tool cover -html=c.out (собрать отчёт покрытии кода после юнит-тестов)
```

```
Function start with lower case is an unexport function. 
An unexport function can be used only inside the package. 
You have to export getRoute function by changing the function name to GetRoute
```