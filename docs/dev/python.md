# Python

```
Максимально избегайте переопределений, наследований и неявных трюков, 
демонстрирующих ваш ум. Пишите чистые функции, их проще объяснить. Любая
 функция, которая не является чистой, должна быть классом. Любая 
конструкция кода, имеющая другую задачу, должна отличаться именем
```

## DB Drivers
MySQL / MariaDB:
- [PyMySQL](https://github.com/PyMySQL/PyMySQL/)

Redis:
- Redis
- aioredis

ClickHouse:
- [asynch](https://github.com/long2ice/asynch)
- [aioch](https://github.com/mymarilyn/aioch)
- [aiochclient](https://github.com/maximdanilchenko/aiochclient)
- [clickhouse-driver](https://github.com/mymarilyn/clickhouse-driver)

PostgreSQL:
- asyncpg
- [Psycopg 3](https://www.psycopg.org/psycopg3/docs/index.html)

SQLite:

Firebird:
- fdb

## Numpy
## Numpy Finance
```
print(npf.fv(rate=0, nper=3, pmt=0, pv=-100))  # 100
```

```
import numpy_financial as npf

# Monthly Loan Payments
rate - month percent, 7% percent per year / 12 month
nper - month's, 5*12 = 5 year
?pv - present value
?fv - future value
npf.pmt(rate=0.07/12, nper5*12, pv=100000, fv=0)
```

```
import numpy_financial as npf

# Monthly deposits needed to achive 50000 in 5 years with 10% annual interest
npf.pmt(rate=0.10/12, nper=5*12, pv=0, fv=50000)
```

```
import numpy_financial as npf

# Internal Rate of Return
cashflow = [-5000, 500, 700, 1000, 3000]
npf.irr(cashflow)
```

## Matplotlib
```
import matplotlib.pyplot as plt

rev = [18000, 25000, 20000, 45000, 19500]
plt.plot(rev)
plt.savefig('plot.png')
```
```
import matplotlib.pyplot as plt

rev = [18000, 25000, 20000, 45000, 32000]
months = ['June', 'July', 'August', 'September', 'October']
plt.plot(months, rev)
```
## Pandas
```
import pandas as pd

prices = [42.8, 102.03, 240.38, 80.9]
s = pd.Series(prices)
print(s.describe())

data = {
  'date': ['2021-06-10', '2021-06-11', '2021-06-12', '2021-06-13'],
  'prices': [42.8, 102.03, 240.38, 80.9]
}
df = pd.DataFrame(data)
print(df)
```

```
import pandas as pd

data = pd.read_html('https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')
df = data[0]
print(df)
```


## Занимательные фигуры на Python в одну строку
```
# Квадрат
print("\n".join("* " * 4 for i in range(4)))
# ---
print(*["* " * 4 for i in range(4)], sep='\n')

# Прямоугольный треугольник
print("\n".join("* " * i for i in range(7)))
# ---
print(*["* " * i for i in range(7)], sep='\n')

# Перевёрнутый прямоугольный треугольник
print("\n".join("* " * i for i in range(7, 0, -1)))
# ---
print(*["* " * i for i in range(7, 0, -1)], sep='\n')

# Пирамида
print("\n".join(('* ' * i + '*').rjust(7 * 2 + i) for i in range(7)))
# ---
print(*[" " * (8-i) + " *" * i for i in range(1, 8)], sep='\n')

# Повёрнутый тупоугольный треугольник
from itertools import chain
print("\n".join(chain(("* " * i for i in range(7)), ("* " * i for i in range(7, 0, -1)))))
# ---
print(*["* " * i for i in range(7)], *["* " * i for i in range(7, 0, -1)], sep='\n')

# Ромб
from itertools import chain
print("\n".join(chain((('* ' * i + '*').rjust(7 * 2 + i) for i in range(6)), (('* ' * i + '*').rjust(7 * 2 + i) for i in range(6, -1, -1)))))
# ---
print("\n".join(*[(*(('* ' * i + '*').rjust(7 * 2 + i) for i in range(6)), *(('* ' * i + '*').rjust(7 * 2 + i) for i in range(6, -1, -1)))]))
# ---
print(*[('* ' * i + '*').rjust(7 * 2 + i) for i in range(6)], *[('* ' * i + '*').rjust(7 * 2 + i) for i in range(6, -1, -1)], sep='\n')

# Песочные часы
from itertools import chain
print("\n".join(chain((('* ' * i + '*').rjust(7 * 2 + i) for i in range(6, 0, -1)), (('* ' * i + '*').rjust(7 * 2 + i) for i in range(7)))))
# ---
print(*[('* ' * i + '*').rjust(7 * 2 + i) for i in range(6, 0, -1)], *[('* ' * i + '*').rjust(7 * 2 + i) for i in range(7)], sep='\n')

# Ель
from itertools import chain
print("\n".join(chain((('* ' * i + '*').rjust(7 * 2 + i) for i in range(5)), (('* ' * i + '*').rjust(7 * 2 + i) for i in range(1, 7)), (('* ' * i + '*').rjust(7 * 2 + i) for i in range(1, 9)))))
# ---
print(*[('* ' * i + '*').rjust(7 * 2 + i) for i in range(5)], *[('* ' * i + '*').rjust(7 * 2 + i) for i in range(1, 7)], *[('* ' * i + '*').rjust(7 * 2 + i) for i in range(1, 9)], sep='\n')

# Сердце
print('\n'.join(' '.join(*zip(*row)) for row in ([["*" if row==0 and col%3!=0 or row==1 and col%3==0 or row-col==2 or row+col==8 else " " for col in range(7)] for row in range(6)])))
```
