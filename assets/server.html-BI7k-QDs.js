import{_ as r,c as n,b as s,o as a}from"./app-BsHIgujo.js";const i={};function t(l,e){return a(),n("div",null,e[0]||(e[0]=[s(`<h1 id="windows-server" tabindex="-1"><a class="header-anchor" href="#windows-server"><span>Windows Server</span></a></h1><h2 id="hyper-v" tabindex="-1"><a class="header-anchor" href="#hyper-v"><span>Hyper-V</span></a></h2><h2 id="applockker" tabindex="-1"><a class="header-anchor" href="#applockker"><span>AppLockker</span></a></h2><pre><code>Stage 1 = Audit mode
Stage 2 = Rules mode

sc query AppIDSvc
sc config AppIDSvc start=auto (Запускаем службу Application Identity («Удостоверение приложения»),)
sc start AppIDSvc

Applocker доступен только в редакция Enterprise и Ultimate. В Pro можно использовать обычный SRP
В остальных редакциях - просто импортируется ветка реестра ..Policies\\Safer с XP Pro и выше, и SRP отлично работает даже в домашней версии Win7/8/8.1.

Создаём правила по умолчанию
    Computer Configuration -&gt; Windows Settings -&gt; Security Settings -&gt; Application Control Policies -&gt; AppLocker -&gt; Executable Rules (Конфигурация компьютера -&gt; Конфигурация Windows -&gt; Параметры безопасности -&gt; Политики управления приложениями -&gt; AppLocker -&gt; Исполняемые правила
    Computer Configuration -&gt; Windows Settings -&gt; Security Settings -&gt; Application Control Policies -&gt; AppLocker -&gt; Script Rules

Отключить службу AppLocker можно через реестр:
    HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\services\\AppIDSvc
    Установить Start = 0x4
</code></pre><h2 id="замена-диска-в-программном-raid-1" tabindex="-1"><a class="header-anchor" href="#замена-диска-в-программном-raid-1"><span>Замена диска в программном RAID 1</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Удалить отказавшее зеркало у тома с отказавшей избыточностью, для чего в контекстном меню тома выбрать пункт &quot;Удалить зеркало...&quot;, в окне &quot;Удалить зеркало&quot; выбрать в списке отсутствующий (неисправный) диск, нажать &quot;Удалить зеркало&quot; - в результате том станет простым динамическим;</span>
<span class="line">Удалить информацию о неисправном диске, для чего в его контекстном меню нужно выбрать пункт &quot;Изъять диск&quot;;</span>
<span class="line">Добавить зеркало к ставшему простым динамическому тому, для чего нужно в его контекстном меню выбрать пункт &quot;Добавить зеркало&quot;, в окне &quot;Добавить зеркальный том&quot; выделить новый диск и нажать &quot;Добавить зеркальный том&quot;, после чего начнётся процесс ресинхронизации тома.</span>
<span class="line"></span>
<span class="line">В начале ресинхронизации тома нельзя перезагружать и выключать компьютер.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="read-only-domain-controller-rodc" tabindex="-1"><a class="header-anchor" href="#read-only-domain-controller-rodc"><span>Read Only Domain Controller (RODC)</span></a></h2><p>https://winitpro.ru/index.php/2017/11/08/ustanovka-rodc-kontrollera-domena-na-windows-server-2016/ https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732301(v=ws.10)?redirectedfrom=MSDN</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Установка RODC</span>
<span class="line">Ставится как обычный DC, только при установке надо выбрать что только для чтения</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Пользователи которым разрешён вход:</span>
<span class="line">    на контроллер домена, даже только для чтения, вход обычным пользователям по умолчанию запрещён</span>
<span class="line">    должны быть в доменной группе &quot;Группа с разрешением репликации паролей RODC&quot;</span>
<span class="line">    - gpedit.msc: Конфигурация Windows -&gt; Параметры безопасности -&gt; Локальные политики -&gt; Назначение прав пользователя: Локальных вход в систему (Нету Users, возможно из-за этого не могут входить обычные пользователи)</span>
<span class="line">    Локальные политики компьютера мы менять похоже не можем</span>
<span class="line">    Остаётся либо менять доменную политику &quot;Default Domain Controllers Policy&quot; через &quot;Управление групповой политикой&quot;, либо рядом создавать новую политику, где переопределить &quot;Локальных вход в систему&quot; и выставить у это политики приоритет выше</span>
<span class="line">    Либо через DSMGMT добавить пользователя в локальные группы, которым разрешён вход: dsmgmt.exe; local roles; List Roles; add &lt;DOMAIN&gt;\\&lt;user&gt; &lt;administrative role&gt;</span>
<span class="line">? Кэширование паролей</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Уделение RODC</span>
<span class="line">Диспетчер серверов -&gt; Управление -&gt; Удалить роли и компоненты</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-2008-x86-6-0-sp2-6002-vista" tabindex="-1"><a class="header-anchor" href="#server-2008-x86-6-0-sp2-6002-vista"><span>Server 2008 (x86 6.0 SP2 6002 (Vista))</span></a></h2><p>Тупиковая точка, дальше не обновиться, обновиться на 2008 R2 можно только с x64</p><h2 id="server-2008-r2" tabindex="-1"><a class="header-anchor" href="#server-2008-r2"><span>Server 2008 R2</span></a></h2><pre><code>Обновление до 2012 R2:
    Требуется 14223 МБ свободного места
    Из ОС запустить установку, и выбрать обновление
    &quot;Диспетчер серверов&quot; вылетает с ошибкой (Заработал после установки всех обязательных обновлений + IE11 + .NET Framework 4.8)
</code></pre><h2 id="server-2012-r2" tabindex="-1"><a class="header-anchor" href="#server-2012-r2"><span>Server 2012 R2</span></a></h2><pre><code>Обновление до 2019
    Требует ключ для установки
    Было свободно 18ГБ
    Прошло успешно
</code></pre><h2 id="server-2016" tabindex="-1"><a class="header-anchor" href="#server-2016"><span>Server 2016</span></a></h2><h2 id="server-2019" tabindex="-1"><a class="header-anchor" href="#server-2019"><span>Server 2019</span></a></h2><pre><code>Upgrade to 2022:
    0xC1900101 – 0x20017, Installation failed in SAFE_OS phase with an error during BOOT operation
    Ставил на VirtualBox
    Проблема решилась после того как убрал все диски, кроме системного, добавил RAM до 5ГБ и выставил кол-во ЦП = 4
</code></pre><h2 id="server-2022" tabindex="-1"><a class="header-anchor" href="#server-2022"><span>Server 2022</span></a></h2>`,21)]))}const o=r(i,[["render",t],["__file","server.html.vue"]]),c=JSON.parse('{"path":"/os/windows/server.html","title":"Windows Server","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Hyper-V","slug":"hyper-v","link":"#hyper-v","children":[]},{"level":2,"title":"AppLockker","slug":"applockker","link":"#applockker","children":[]},{"level":2,"title":"Замена диска в программном RAID 1","slug":"замена-диска-в-программном-raid-1","link":"#замена-диска-в-программном-raid-1","children":[]},{"level":2,"title":"Read Only Domain Controller (RODC)","slug":"read-only-domain-controller-rodc","link":"#read-only-domain-controller-rodc","children":[]},{"level":2,"title":"Server 2008 (x86 6.0 SP2 6002 (Vista))","slug":"server-2008-x86-6-0-sp2-6002-vista","link":"#server-2008-x86-6-0-sp2-6002-vista","children":[]},{"level":2,"title":"Server 2008 R2","slug":"server-2008-r2","link":"#server-2008-r2","children":[]},{"level":2,"title":"Server 2012 R2","slug":"server-2012-r2","link":"#server-2012-r2","children":[]},{"level":2,"title":"Server 2016","slug":"server-2016","link":"#server-2016","children":[]},{"level":2,"title":"Server 2019","slug":"server-2019","link":"#server-2019","children":[]},{"level":2,"title":"Server 2022","slug":"server-2022","link":"#server-2022","children":[]}],"git":{"updatedTime":1672846948000,"contributors":[{"name":"Tarasov Artur","username":"Tarasov Artur","email":"para3ut.74@gmail.com","commits":3,"url":"https://github.com/Tarasov Artur"},{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":2,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/windows/server.md"}');export{o as comp,c as data};
