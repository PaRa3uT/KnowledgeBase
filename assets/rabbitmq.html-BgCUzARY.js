import{_ as a,c as n,b as e,o as i}from"./app-BsHIgujo.js";const t={};function l(r,s){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq"><span><a href="https://www.rabbitmq.com" target="_blank" rel="noopener noreferrer">RabbitMQ</a></span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rabbitmqctl list_queues name messages_ready messages_unacknowledged</span>
<span class="line">rabbitmqctl delete_queue &lt;queue_name&gt;</span>
<span class="line">rabbitmqctl list_exchanges</span>
<span class="line">rabbitmqctl list_bindings</span>
<span class="line">rabbitmq-diagnostics -q ping</span>
<span class="line">rabbitmq-diagnostics -q status</span>
<span class="line">rabbitmq-diagnostics -q alarms</span>
<span class="line">rabbitmq-diagnostics -q check_running &amp;&amp; rabbitmq-diagnostics -q check_local_alarms</span>
<span class="line">rabbitmq-diagnostics -q memory_breakdown --unit &quot;MB&quot;</span>
<span class="line">rabbitmq-diagnostics -q listeners</span>
<span class="line">rabbitmq-diagnostics -q check_port_connectivity</span>
<span class="line">rabbitmq-diagnostics -q check_virtual_hosts</span>
<span class="line">rabbitmq-plugins -q list --enabled --minimal</span>
<span class="line">rabbitmq-plugins -q is_enabled rabbitmq_shovel</span>
<span class="line">rabbitmq-plugins enable rabbitmq_mqtt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rabbitmq-plugins enable rabbitmq_management</span>
<span class="line">rabbitmqctl add_user mqtt-test mqtt-test</span>
<span class="line">rabbitmqctl set_permissions -p / mqtt-test &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;</span>
<span class="line">rabbitmqctl set_user_tags mqtt-test management</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const b=a(t,[["render",l],["__file","rabbitmq.html.vue"]]),c=JSON.parse('{"path":"/unsorted/rabbitmq.html","title":"RabbitMQ","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1681201131000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":1,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"unsorted/rabbitmq.md"}');export{b as comp,c as data};
