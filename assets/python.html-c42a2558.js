import{_ as a,r as s,o as t,c as d,a as i,b as n,d as r,e as l}from"./app-9ee1dfa4.js";const o={},u=l(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><h2 id="pip-blacklist-packages" tabindex="-1"><a class="header-anchor" href="#pip-blacklist-packages" aria-hidden="true">#</a> pip blacklist packages^</h2><ul><li>importantpackage</li><li>important-package</li><li>pptest</li><li>ipboards</li><li>owlmoon</li><li>DiscordSafety</li><li>yiffparty</li><li>trrfab</li><li>10Cent10</li><li>yandex-yt</li><li>baeutifulsoup4, beautifulsup4, cloorama, cryptograpyh, crpytography, djangoo, hello-world-exampl, hello-world-example, ipyhton, mail-validator, mysql-connector-pyhton, notebok, pyautogiu, pygaem, pytorhc, python-dateuti, python-flask, python3-flask, pyyalm, rqeuests, slenium, sqlachemy, sqlalcemy, tkniter, urlllib</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Максимально избегайте переопределений, наследований и неявных трюков, 
демонстрирующих ваш ум. Пишите чистые функции, их проще объяснить. Любая
 функция, которая не является чистой, должна быть классом. Любая 
конструкция кода, имеющая другую задачу, должна отличаться именем
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gui" tabindex="-1"><a class="header-anchor" href="#gui" aria-hidden="true">#</a> GUI</h2>`,5),c={href:"https://build-system.fman.io/qt-designer-download",target:"_blank",rel:"noopener noreferrer"},v=i("br",null,null,-1),m=i("br",null,null,-1),p=i("br",null,null,-1),h=i("br",null,null,-1),b=i("h2",{id:"db-drivers",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#db-drivers","aria-hidden":"true"},"#"),n(" DB Drivers")],-1),g=i("p",null,"MySQL / MariaDB:",-1),f={href:"https://github.com/PyMySQL/PyMySQL/",target:"_blank",rel:"noopener noreferrer"},_=i("p",null,"Redis:",-1),y=i("ul",null,[i("li",null,"Redis"),i("li",null,"aioredis")],-1),x=i("p",null,"ClickHouse:",-1),q={href:"https://github.com/long2ice/asynch",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/mymarilyn/aioch",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/maximdanilchenko/aiochclient",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/mymarilyn/clickhouse-driver",target:"_blank",rel:"noopener noreferrer"},P=i("p",null,"PostgreSQL:",-1),S=i("li",null,"asyncpg",-1),L={href:"https://www.psycopg.org/psycopg3/docs/index.html",target:"_blank",rel:"noopener noreferrer"},M=i("p",null,"SQLite:",-1),Q=i("p",null,"Firebird:",-1),D=i("ul",null,[i("li",null,"fdb")],-1),N=i("h2",{id:"интересные-пакеты",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#интересные-пакеты","aria-hidden":"true"},"#"),n(" Интересные пакеты")],-1),B={href:"https://developers.google.com/optimization",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/taichi-dev/taichi",target:"_blank",rel:"noopener noreferrer"},I=l(`<h2 id="numpy" tabindex="-1"><a class="header-anchor" href="#numpy" aria-hidden="true">#</a> Numpy</h2><h2 id="numpy-finance" tabindex="-1"><a class="header-anchor" href="#numpy-finance" aria-hidden="true">#</a> Numpy Finance</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>print(npf.fv(rate=0, nper=3, pmt=0, pv=-100))  # 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import numpy_financial as npf

# Monthly Loan Payments
rate - month percent, 7% percent per year / 12 month
nper - month&#39;s, 5*12 = 5 year
?pv - present value
?fv - future value
npf.pmt(rate=0.07/12, nper5*12, pv=100000, fv=0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import numpy_financial as npf

# Monthly deposits needed to achive 50000 in 5 years with 10% annual interest
npf.pmt(rate=0.10/12, nper=5*12, pv=0, fv=50000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import numpy_financial as npf

# Internal Rate of Return
cashflow = [-5000, 500, 700, 1000, 3000]
npf.irr(cashflow)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="matplotlib" tabindex="-1"><a class="header-anchor" href="#matplotlib" aria-hidden="true">#</a> Matplotlib</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import matplotlib.pyplot as plt

rev = [18000, 25000, 20000, 45000, 19500]
plt.plot(rev)
plt.savefig(&#39;plot.png&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import matplotlib.pyplot as plt

rev = [18000, 25000, 20000, 45000, 32000]
months = [&#39;June&#39;, &#39;July&#39;, &#39;August&#39;, &#39;September&#39;, &#39;October&#39;]
plt.plot(months, rev)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import pandas as pd

prices = [42.8, 102.03, 240.38, 80.9]
s = pd.Series(prices)
print(s.describe())

data = {
  &#39;date&#39;: [&#39;2021-06-10&#39;, &#39;2021-06-11&#39;, &#39;2021-06-12&#39;, &#39;2021-06-13&#39;],
  &#39;prices&#39;: [42.8, 102.03, 240.38, 80.9]
}
df = pd.DataFrame(data)
print(df)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import pandas as pd

data = pd.read_html(&#39;https://en.wikipedia.org/wiki/List_of_S%26P_500_companies&#39;)
df = data[0]
print(df)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="занимательные-фигуры-на-python-в-одну-строку" tabindex="-1"><a class="header-anchor" href="#занимательные-фигуры-на-python-в-одну-строку" aria-hidden="true">#</a> Занимательные фигуры на Python в одну строку</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Квадрат
print(&quot;\\n&quot;.join(&quot;* &quot; * 4 for i in range(4)))
# ---
print(*[&quot;* &quot; * 4 for i in range(4)], sep=&#39;\\n&#39;)

# Прямоугольный треугольник
print(&quot;\\n&quot;.join(&quot;* &quot; * i for i in range(7)))
# ---
print(*[&quot;* &quot; * i for i in range(7)], sep=&#39;\\n&#39;)

# Перевёрнутый прямоугольный треугольник
print(&quot;\\n&quot;.join(&quot;* &quot; * i for i in range(7, 0, -1)))
# ---
print(*[&quot;* &quot; * i for i in range(7, 0, -1)], sep=&#39;\\n&#39;)

# Пирамида
print(&quot;\\n&quot;.join((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(7)))
# ---
print(*[&quot; &quot; * (8-i) + &quot; *&quot; * i for i in range(1, 8)], sep=&#39;\\n&#39;)

# Повёрнутый тупоугольный треугольник
from itertools import chain
print(&quot;\\n&quot;.join(chain((&quot;* &quot; * i for i in range(7)), (&quot;* &quot; * i for i in range(7, 0, -1)))))
# ---
print(*[&quot;* &quot; * i for i in range(7)], *[&quot;* &quot; * i for i in range(7, 0, -1)], sep=&#39;\\n&#39;)

# Ромб
from itertools import chain
print(&quot;\\n&quot;.join(chain(((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6)), ((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6, -1, -1)))))
# ---
print(&quot;\\n&quot;.join(*[(*((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6)), *((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6, -1, -1)))]))
# ---
print(*[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6)], *[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6, -1, -1)], sep=&#39;\\n&#39;)

# Песочные часы
from itertools import chain
print(&quot;\\n&quot;.join(chain(((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6, 0, -1)), ((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(7)))))
# ---
print(*[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6, 0, -1)], *[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(7)], sep=&#39;\\n&#39;)

# Ель
from itertools import chain
print(&quot;\\n&quot;.join(chain(((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(5)), ((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(1, 7)), ((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(1, 9)))))
# ---
print(*[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(5)], *[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(1, 7)], *[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(1, 9)], sep=&#39;\\n&#39;)

# Сердце
print(&#39;\\n&#39;.join(&#39; &#39;.join(*zip(*row)) for row in ([[&quot;*&quot; if row==0 and col%3!=0 or row==1 and col%3==0 or row-col==2 or row+col==8 else &quot; &quot; for col in range(7)] for row in range(6)])))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function V(C,E){const e=s("ExternalLinkIcon");return t(),d("div",null,[u,i("p",null,[n("PyQt5 + "),i("a",c,[n("Qt Designer"),r(e)]),v,n(" kivy"),m,n(" tkinter"),p,n(" WxPython"),h,n(" Pyforms")]),b,g,i("ul",null,[i("li",null,[i("a",f,[n("PyMySQL"),r(e)])])]),_,y,x,i("ul",null,[i("li",null,[i("a",q,[n("asynch"),r(e)])]),i("li",null,[i("a",k,[n("aioch"),r(e)])]),i("li",null,[i("a",j,[n("aiochclient"),r(e)])]),i("li",null,[i("a",w,[n("clickhouse-driver"),r(e)])])]),P,i("ul",null,[S,i("li",null,[i("a",L,[n("Psycopg 3"),r(e)])])]),M,Q,D,N,i("ul",null,[i("li",null,[i("a",B,[n("Google OR-Tools"),r(e)]),n(" - комбинаторная оптимизация, линейное программирование, решатель, поиск оптимальных значений")]),i("li",null,[i("a",R,[n("Taichi"),r(e)]),n(" -")])]),I])}const T=a(o,[["render",V],["__file","python.html.vue"]]);export{T as default};
