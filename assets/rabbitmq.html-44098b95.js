import{_ as n,r as a,o as s,c as r,a as e,b as i,d as l,e as d}from"./app-024c187f.js";const b={},c={id:"rabbitmq",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#rabbitmq","aria-hidden":"true"},"#",-1),o={href:"https://www.rabbitmq.com",target:"_blank",rel:"noopener noreferrer"},u=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rabbitmqctl list_queues name messages_ready messages_unacknowledged
rabbitmqctl delete_queue &lt;queue_name&gt;
rabbitmqctl list_exchanges
rabbitmqctl list_bindings
rabbitmq-diagnostics -q ping
rabbitmq-diagnostics -q status
rabbitmq-diagnostics -q alarms
rabbitmq-diagnostics -q check_running &amp;&amp; rabbitmq-diagnostics -q check_local_alarms
rabbitmq-diagnostics -q memory_breakdown --unit &quot;MB&quot;
rabbitmq-diagnostics -q listeners
rabbitmq-diagnostics -q check_port_connectivity
rabbitmq-diagnostics -q check_virtual_hosts
rabbitmq-plugins -q list --enabled --minimal
rabbitmq-plugins -q is_enabled rabbitmq_shovel
rabbitmq-plugins enable rabbitmq_mqtt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rabbitmq-plugins enable rabbitmq_management
rabbitmqctl add_user mqtt-test mqtt-test
rabbitmqctl set_permissions -p / mqtt-test &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;
rabbitmqctl set_user_tags mqtt-test management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function q(v,_){const t=a("ExternalLinkIcon");return s(),r("div",null,[e("h1",c,[m,i(),e("a",o,[i("RabbitMQ"),l(t)])]),u])}const h=n(b,[["render",q],["__file","rabbitmq.html.vue"]]);export{h as default};
