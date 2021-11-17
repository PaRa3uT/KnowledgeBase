# Python

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
