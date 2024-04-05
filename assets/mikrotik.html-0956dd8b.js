import{_ as e,o as i,c as r,e as a}from"./app-9ee1dfa4.js";const n={},t=a(`<h1 id="mikrotik" tabindex="-1"><a class="header-anchor" href="#mikrotik" aria-hidden="true">#</a> Mikrotik</h1><h2 id="config-backup-bin" tabindex="-1"><a class="header-anchor" href="#config-backup-bin" aria-hidden="true">#</a> Config Backup (bin)</h2><p>Files -&gt; Backup -&gt; Backup</p><h2 id="config-restore-bin" tabindex="-1"><a class="header-anchor" href="#config-restore-bin" aria-hidden="true">#</a> Config Restore (bin)</h2><p>System -&gt; Reset Configuration -&gt; Check &quot; No Default Configuration&quot; -&gt; Reset Configuration -&gt; Yes Files -&gt; &lt;file_name&gt; -&gt; Restore -&gt; Yes</p><h2 id="config-export-txt" tabindex="-1"><a class="header-anchor" href="#config-export-txt" aria-hidden="true">#</a> Config Export (txt)</h2><p>New Terminal -&gt; &quot;export file=config_backup_20170403.rsc&quot; Files -&gt; &quot;config_backup_20170403.rsc&quot;</p><h2 id="config-import-txt" tabindex="-1"><a class="header-anchor" href="#config-import-txt" aria-hidden="true">#</a> Config Import (txt)</h2><p>System -&gt; Reset Configuration -&gt; Check &quot; No Default Configuration&quot; -&gt; Reset Configuration -&gt; Yes New Terminal -&gt; &quot;import file=config_backup_20170403.rsc&quot;</p><h2 id="частичныи-перенос-настроек" tabindex="-1"><a class="header-anchor" href="#частичныи-перенос-настроек" aria-hidden="true">#</a> Частичный перенос настроек</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ip address export file=ip.rsc
ip firewall mangle export file=mangle.rsc
ip firewall nat export file=nat.rsc
ip firewall filter export file=filter.rsc
queue simple export file=simple.rsc
ip dns export file=dns.rsc
system script export file=script.rsc
system scheduler export file=scheduler.rsc
tool e-mail export file=email.rsc
ip firewall address-list export file=address-list.rsc
ip route export file=route.rsc
ip dhcp-server network export file=network.rsc
queue type export file=type.rsc
queue tree export file=tree.rsc
queue simple export file=simple.rsc
interface ethernet export file=ethernet.rsc
ip pool export file=pool.rsc
ppp profile export file=profile.rsc
system logging export file=log.rsc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="firewall-rules" tabindex="-1"><a class="header-anchor" href="#firewall-rules" aria-hidden="true">#</a> Firewall Rules</h2><h2 id="первоначальная-настроика" tabindex="-1"><a class="header-anchor" href="#первоначальная-настроика" aria-hidden="true">#</a> Первоначальная настройка</h2><h3 id="wan-dhcp" tabindex="-1"><a class="header-anchor" href="#wan-dhcp" aria-hidden="true">#</a> WAN DHCP</h3><h3 id="wan-static" tabindex="-1"><a class="header-anchor" href="#wan-static" aria-hidden="true">#</a> WAN Static</h3><h3 id="lan-static" tabindex="-1"><a class="header-anchor" href="#lan-static" aria-hidden="true">#</a> LAN Static</h3><h3 id="dhcp-server" tabindex="-1"><a class="header-anchor" href="#dhcp-server" aria-hidden="true">#</a> DHCP Server</h3><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/system logging print
/system logging remove 4

Also you might want to enable debug logging for dhcp.
/system logging add topics=dhcp,debug action=memory

/system logging add topics=dhcp,info action=memory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),s=[t];function d(l,c){return i(),r("div",null,s)}const h=e(n,[["render",d],["__file","mikrotik.html.vue"]]);export{h as default};
