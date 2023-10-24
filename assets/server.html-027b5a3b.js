import{_ as e,o as r,c as n,e as a}from"./app-024c187f.js";const i={},t=a(`<h1 id="windows-server" tabindex="-1"><a class="header-anchor" href="#windows-server" aria-hidden="true">#</a> Windows Server</h1><h2 id="hyper-v" tabindex="-1"><a class="header-anchor" href="#hyper-v" aria-hidden="true">#</a> Hyper-V</h2><h2 id="applockker" tabindex="-1"><a class="header-anchor" href="#applockker" aria-hidden="true">#</a> AppLockker</h2><pre><code>Stage 1 = Audit mode
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
</code></pre><h2 id="замена-диска-в-программном-raid-1" tabindex="-1"><a class="header-anchor" href="#замена-диска-в-программном-raid-1" aria-hidden="true">#</a> Замена диска в программном RAID 1</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Удалить отказавшее зеркало у тома с отказавшей избыточностью, для чего в контекстном меню тома выбрать пункт &quot;Удалить зеркало...&quot;, в окне &quot;Удалить зеркало&quot; выбрать в списке отсутствующий (неисправный) диск, нажать &quot;Удалить зеркало&quot; - в результате том станет простым динамическим;
Удалить информацию о неисправном диске, для чего в его контекстном меню нужно выбрать пункт &quot;Изъять диск&quot;;
Добавить зеркало к ставшему простым динамическому тому, для чего нужно в его контекстном меню выбрать пункт &quot;Добавить зеркало&quot;, в окне &quot;Добавить зеркальный том&quot; выделить новый диск и нажать &quot;Добавить зеркальный том&quot;, после чего начнётся процесс ресинхронизации тома.

В начале ресинхронизации тома нельзя перезагружать и выключать компьютер.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="read-only-domain-controller-rodc" tabindex="-1"><a class="header-anchor" href="#read-only-domain-controller-rodc" aria-hidden="true">#</a> Read Only Domain Controller (RODC)</h2><p>https://winitpro.ru/index.php/2017/11/08/ustanovka-rodc-kontrollera-domena-na-windows-server-2016/ https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732301(v=ws.10)?redirectedfrom=MSDN</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Установка RODC
Ставится как обычный DC, только при установке надо выбрать что только для чтения
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Пользователи которым разрешён вход:
    на контроллер домена, даже только для чтения, вход обычным пользователям по умолчанию запрещён
    должны быть в доменной группе &quot;Группа с разрешением репликации паролей RODC&quot;
    - gpedit.msc: Конфигурация Windows -&gt; Параметры безопасности -&gt; Локальные политики -&gt; Назначение прав пользователя: Локальных вход в систему (Нету Users, возможно из-за этого не могут входить обычные пользователи)
    Локальные политики компьютера мы менять похоже не можем
    Остаётся либо менять доменную политику &quot;Default Domain Controllers Policy&quot; через &quot;Управление групповой политикой&quot;, либо рядом создавать новую политику, где переопределить &quot;Локальных вход в систему&quot; и выставить у это политики приоритет выше
    Либо через DSMGMT добавить пользователя в локальные группы, которым разрешён вход: dsmgmt.exe; local roles; List Roles; add &lt;DOMAIN&gt;\\&lt;user&gt; &lt;administrative role&gt;
? Кэширование паролей
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Уделение RODC
Диспетчер серверов -&gt; Управление -&gt; Удалить роли и компоненты
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-2008-x86-6-0-sp2-6002-vista" tabindex="-1"><a class="header-anchor" href="#server-2008-x86-6-0-sp2-6002-vista" aria-hidden="true">#</a> Server 2008 (x86 6.0 SP2 6002 (Vista))</h2><p>Тупиковая точка, дальше не обновиться, обновиться на 2008 R2 можно только с x64</p><h2 id="server-2008-r2" tabindex="-1"><a class="header-anchor" href="#server-2008-r2" aria-hidden="true">#</a> Server 2008 R2</h2><pre><code>Обновление до 2012 R2:
    Требуется 14223 МБ свободного места
    Из ОС запустить установку, и выбрать обновление
    &quot;Диспетчер серверов&quot; вылетает с ошибкой (Заработал после установки всех обязательных обновлений + IE11 + .NET Framework 4.8)
</code></pre><h2 id="server-2012-r2" tabindex="-1"><a class="header-anchor" href="#server-2012-r2" aria-hidden="true">#</a> Server 2012 R2</h2><pre><code>Обновление до 2019
    Требует ключ для установки
    Было свободно 18ГБ
    Прошло успешно
</code></pre><h2 id="server-2016" tabindex="-1"><a class="header-anchor" href="#server-2016" aria-hidden="true">#</a> Server 2016</h2><h2 id="server-2019" tabindex="-1"><a class="header-anchor" href="#server-2019" aria-hidden="true">#</a> Server 2019</h2><pre><code>Upgrade to 2022:
    0xC1900101 – 0x20017, Installation failed in SAFE_OS phase with an error during BOOT operation
    Ставил на VirtualBox
    Проблема решилась после того как убрал все диски, кроме системного, добавил RAM до 5ГБ и выставил кол-во ЦП = 4
</code></pre><h2 id="server-2022" tabindex="-1"><a class="header-anchor" href="#server-2022" aria-hidden="true">#</a> Server 2022</h2>`,21),d=[t];function s(o,l){return r(),n("div",null,d)}const u=e(i,[["render",s],["__file","server.html.vue"]]);export{u as default};
