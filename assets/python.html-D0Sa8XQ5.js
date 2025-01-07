import{_ as s,c as i,b as e,o as a}from"./app-BsHIgujo.js";const l={};function r(t,n){return a(),i("div",null,n[0]||(n[0]=[e(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h1><h2 id="pip-blacklist-packages" tabindex="-1"><a class="header-anchor" href="#pip-blacklist-packages"><span>pip blacklist packages^</span></a></h2><ul><li>importantpackage</li><li>important-package</li><li>pptest</li><li>ipboards</li><li>owlmoon</li><li>DiscordSafety</li><li>yiffparty</li><li>trrfab</li><li>10Cent10</li><li>yandex-yt</li><li>baeutifulsoup4, beautifulsup4, cloorama, cryptograpyh, crpytography, djangoo, hello-world-exampl, hello-world-example, ipyhton, mail-validator, mysql-connector-pyhton, notebok, pyautogiu, pygaem, pytorhc, python-dateuti, python-flask, python3-flask, pyyalm, rqeuests, slenium, sqlachemy, sqlalcemy, tkniter, urlllib</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Максимально избегайте переопределений, наследований и неявных трюков, </span>
<span class="line">демонстрирующих ваш ум. Пишите чистые функции, их проще объяснить. Любая</span>
<span class="line"> функция, которая не является чистой, должна быть классом. Любая </span>
<span class="line">конструкция кода, имеющая другую задачу, должна отличаться именем</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gui" tabindex="-1"><a class="header-anchor" href="#gui"><span>GUI</span></a></h2><p>PyQt5 + <a href="https://build-system.fman.io/qt-designer-download" target="_blank" rel="noopener noreferrer">Qt Designer</a><br> kivy<br> tkinter<br> WxPython<br> Pyforms</p><h2 id="db-drivers" tabindex="-1"><a class="header-anchor" href="#db-drivers"><span>DB Drivers</span></a></h2><p>MySQL / MariaDB:</p><ul><li><a href="https://github.com/PyMySQL/PyMySQL/" target="_blank" rel="noopener noreferrer">PyMySQL</a></li></ul><p>Redis:</p><ul><li>Redis</li><li>aioredis</li></ul><p>ClickHouse:</p><ul><li><a href="https://github.com/long2ice/asynch" target="_blank" rel="noopener noreferrer">asynch</a></li><li><a href="https://github.com/mymarilyn/aioch" target="_blank" rel="noopener noreferrer">aioch</a></li><li><a href="https://github.com/maximdanilchenko/aiochclient" target="_blank" rel="noopener noreferrer">aiochclient</a></li><li><a href="https://github.com/mymarilyn/clickhouse-driver" target="_blank" rel="noopener noreferrer">clickhouse-driver</a></li></ul><p>PostgreSQL:</p><ul><li>asyncpg</li><li><a href="https://www.psycopg.org/psycopg3/docs/index.html" target="_blank" rel="noopener noreferrer">Psycopg 3</a></li></ul><p>SQLite:</p><p>Firebird:</p><ul><li>fdb</li></ul><h2 id="интересные-пакеты" tabindex="-1"><a class="header-anchor" href="#интересные-пакеты"><span>Интересные пакеты</span></a></h2><ul><li><a href="https://developers.google.com/optimization" target="_blank" rel="noopener noreferrer">Google OR-Tools</a> - комбинаторная оптимизация, линейное программирование, решатель, поиск оптимальных значений</li><li><a href="https://github.com/taichi-dev/taichi" target="_blank" rel="noopener noreferrer">Taichi</a> -</li></ul><h2 id="numpy" tabindex="-1"><a class="header-anchor" href="#numpy"><span>Numpy</span></a></h2><h2 id="numpy-finance" tabindex="-1"><a class="header-anchor" href="#numpy-finance"><span>Numpy Finance</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">print(npf.fv(rate=0, nper=3, pmt=0, pv=-100))  # 100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import numpy_financial as npf</span>
<span class="line"></span>
<span class="line"># Monthly Loan Payments</span>
<span class="line">rate - month percent, 7% percent per year / 12 month</span>
<span class="line">nper - month&#39;s, 5*12 = 5 year</span>
<span class="line">?pv - present value</span>
<span class="line">?fv - future value</span>
<span class="line">npf.pmt(rate=0.07/12, nper5*12, pv=100000, fv=0)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import numpy_financial as npf</span>
<span class="line"></span>
<span class="line"># Monthly deposits needed to achive 50000 in 5 years with 10% annual interest</span>
<span class="line">npf.pmt(rate=0.10/12, nper=5*12, pv=0, fv=50000)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import numpy_financial as npf</span>
<span class="line"></span>
<span class="line"># Internal Rate of Return</span>
<span class="line">cashflow = [-5000, 500, 700, 1000, 3000]</span>
<span class="line">npf.irr(cashflow)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="matplotlib" tabindex="-1"><a class="header-anchor" href="#matplotlib"><span>Matplotlib</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import matplotlib.pyplot as plt</span>
<span class="line"></span>
<span class="line">rev = [18000, 25000, 20000, 45000, 19500]</span>
<span class="line">plt.plot(rev)</span>
<span class="line">plt.savefig(&#39;plot.png&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import matplotlib.pyplot as plt</span>
<span class="line"></span>
<span class="line">rev = [18000, 25000, 20000, 45000, 32000]</span>
<span class="line">months = [&#39;June&#39;, &#39;July&#39;, &#39;August&#39;, &#39;September&#39;, &#39;October&#39;]</span>
<span class="line">plt.plot(months, rev)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas"><span>Pandas</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import pandas as pd</span>
<span class="line"></span>
<span class="line">prices = [42.8, 102.03, 240.38, 80.9]</span>
<span class="line">s = pd.Series(prices)</span>
<span class="line">print(s.describe())</span>
<span class="line"></span>
<span class="line">data = {</span>
<span class="line">  &#39;date&#39;: [&#39;2021-06-10&#39;, &#39;2021-06-11&#39;, &#39;2021-06-12&#39;, &#39;2021-06-13&#39;],</span>
<span class="line">  &#39;prices&#39;: [42.8, 102.03, 240.38, 80.9]</span>
<span class="line">}</span>
<span class="line">df = pd.DataFrame(data)</span>
<span class="line">print(df)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import pandas as pd</span>
<span class="line"></span>
<span class="line">data = pd.read_html(&#39;https://en.wikipedia.org/wiki/List_of_S%26P_500_companies&#39;)</span>
<span class="line">df = data[0]</span>
<span class="line">print(df)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uv-менеджер-пакетов" tabindex="-1"><a class="header-anchor" href="#uv-менеджер-пакетов"><span>uv (менеджер пакетов)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pip install uv</span>
<span class="line">uv pip tree</span>
<span class="line">uv pip compile docs/requirements.in --universal --output-file docs/requirements.txt  # Compile requirements into a platform-independent requirements file</span>
<span class="line">uv venv .venv (создать виртуальное окружение)</span>
<span class="line">uv pip install &lt;package_name&gt; (установить пакет)</span>
<span class="line">uv add &lt;package_name&gt; (установить пакет)</span>
<span class="line">uv remove &lt;package_name&gt; (удалить пакет)</span>
<span class="line">uv add --group production gunicorn</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="занимательные-фигуры-на-python-в-одну-строку" tabindex="-1"><a class="header-anchor" href="#занимательные-фигуры-на-python-в-одну-строку"><span>Занимательные фигуры на Python в одну строку</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Квадрат</span>
<span class="line">print(&quot;\\n&quot;.join(&quot;* &quot; * 4 for i in range(4)))</span>
<span class="line"># ---</span>
<span class="line">print(*[&quot;* &quot; * 4 for i in range(4)], sep=&#39;\\n&#39;)</span>
<span class="line"></span>
<span class="line"># Прямоугольный треугольник</span>
<span class="line">print(&quot;\\n&quot;.join(&quot;* &quot; * i for i in range(7)))</span>
<span class="line"># ---</span>
<span class="line">print(*[&quot;* &quot; * i for i in range(7)], sep=&#39;\\n&#39;)</span>
<span class="line"></span>
<span class="line"># Перевёрнутый прямоугольный треугольник</span>
<span class="line">print(&quot;\\n&quot;.join(&quot;* &quot; * i for i in range(7, 0, -1)))</span>
<span class="line"># ---</span>
<span class="line">print(*[&quot;* &quot; * i for i in range(7, 0, -1)], sep=&#39;\\n&#39;)</span>
<span class="line"></span>
<span class="line"># Пирамида</span>
<span class="line">print(&quot;\\n&quot;.join((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(7)))</span>
<span class="line"># ---</span>
<span class="line">print(*[&quot; &quot; * (8-i) + &quot; *&quot; * i for i in range(1, 8)], sep=&#39;\\n&#39;)</span>
<span class="line"></span>
<span class="line"># Повёрнутый тупоугольный треугольник</span>
<span class="line">from itertools import chain</span>
<span class="line">print(&quot;\\n&quot;.join(chain((&quot;* &quot; * i for i in range(7)), (&quot;* &quot; * i for i in range(7, 0, -1)))))</span>
<span class="line"># ---</span>
<span class="line">print(*[&quot;* &quot; * i for i in range(7)], *[&quot;* &quot; * i for i in range(7, 0, -1)], sep=&#39;\\n&#39;)</span>
<span class="line"></span>
<span class="line"># Ромб</span>
<span class="line">from itertools import chain</span>
<span class="line">print(&quot;\\n&quot;.join(chain(((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6)), ((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6, -1, -1)))))</span>
<span class="line"># ---</span>
<span class="line">print(&quot;\\n&quot;.join(*[(*((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6)), *((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6, -1, -1)))]))</span>
<span class="line"># ---</span>
<span class="line">print(*[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6)], *[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6, -1, -1)], sep=&#39;\\n&#39;)</span>
<span class="line"></span>
<span class="line"># Песочные часы</span>
<span class="line">from itertools import chain</span>
<span class="line">print(&quot;\\n&quot;.join(chain(((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6, 0, -1)), ((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(7)))))</span>
<span class="line"># ---</span>
<span class="line">print(*[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(6, 0, -1)], *[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(7)], sep=&#39;\\n&#39;)</span>
<span class="line"></span>
<span class="line"># Ель</span>
<span class="line">from itertools import chain</span>
<span class="line">print(&quot;\\n&quot;.join(chain(((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(5)), ((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(1, 7)), ((&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(1, 9)))))</span>
<span class="line"># ---</span>
<span class="line">print(*[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(5)], *[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(1, 7)], *[(&#39;* &#39; * i + &#39;*&#39;).rjust(7 * 2 + i) for i in range(1, 9)], sep=&#39;\\n&#39;)</span>
<span class="line"></span>
<span class="line"># Сердце</span>
<span class="line">print(&#39;\\n&#39;.join(&#39; &#39;.join(*zip(*row)) for row in ([[&quot;*&quot; if row==0 and col%3!=0 or row==1 and col%3==0 or row-col==2 or row+col==8 else &quot; &quot; for col in range(7)] for row in range(6)])))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)]))}const d=s(l,[["render",r],["__file","python.html.vue"]]),c=JSON.parse('{"path":"/dev/python.html","title":"Python","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"pip blacklist packages^","slug":"pip-blacklist-packages","link":"#pip-blacklist-packages","children":[]},{"level":2,"title":"GUI","slug":"gui","link":"#gui","children":[]},{"level":2,"title":"DB Drivers","slug":"db-drivers","link":"#db-drivers","children":[]},{"level":2,"title":"Интересные пакеты","slug":"интересные-пакеты","link":"#интересные-пакеты","children":[]},{"level":2,"title":"Numpy","slug":"numpy","link":"#numpy","children":[]},{"level":2,"title":"Numpy Finance","slug":"numpy-finance","link":"#numpy-finance","children":[]},{"level":2,"title":"Matplotlib","slug":"matplotlib","link":"#matplotlib","children":[]},{"level":2,"title":"Pandas","slug":"pandas","link":"#pandas","children":[]},{"level":2,"title":"uv (менеджер пакетов)","slug":"uv-менеджер-пакетов","link":"#uv-менеджер-пакетов","children":[]},{"level":2,"title":"Занимательные фигуры на Python в одну строку","slug":"занимательные-фигуры-на-python-в-одну-строку","link":"#занимательные-фигуры-на-python-в-одну-строку","children":[]}],"git":{"updatedTime":1736250118000,"contributors":[{"name":"Tarasov Artur","username":"Tarasov Artur","email":"para3ut.74@gmail.com","commits":12,"url":"https://github.com/Tarasov Artur"},{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":3,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"dev/python.md"}');export{d as comp,c as data};
