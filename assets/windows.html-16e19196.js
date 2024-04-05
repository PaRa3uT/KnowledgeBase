import{_ as e,o as a,c as d,e as i}from"./app-9ee1dfa4.js";const n={},s=i(`<h1 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h1><h2 id="windows-11" tabindex="-1"><a class="header-anchor" href="#windows-11" aria-hidden="true">#</a> Windows 11</h2><h3 id="как-удалить-водянои-знак-«требования-к-системе-не-соблюдены»-на-рабочем-столе" tabindex="-1"><a class="header-anchor" href="#как-удалить-водянои-знак-«требования-к-системе-не-соблюдены»-на-рабочем-столе" aria-hidden="true">#</a> Как удалить водяной знак «Требования к системе не соблюдены» на рабочем столе</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HKEY_CURRENT_USER\\Control Panel\\UnsupportedHardwareNotificationCache
SV1 (DWORD 32) = 0
SV2 (DWORD 32) = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="обход-проверки-tpm-2-0-и-процессора" tabindex="-1"><a class="header-anchor" href="#обход-проверки-tpm-2-0-и-процессора" aria-hidden="true">#</a> Обход проверки TPM 2.0 и процессора</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HKEY_LOCAL_MACHINE\\SYSTEM\\Setup\\MoSetup
AllowUpgradesWithUnsupportedTPMOrCPU (DWORD 32) = 1

HKEY_LOCAL_MACHINE\\SYSTEM\\Setup\\LabConfig
&quot;BypassTPMCheck&quot;=dword:00000001
&quot;BypassSecureBootCheck&quot;=dword:00000001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[s];function t(o,c){return a(),d("div",null,r)}const u=e(n,[["render",t],["__file","windows.html.vue"]]);export{u as default};
