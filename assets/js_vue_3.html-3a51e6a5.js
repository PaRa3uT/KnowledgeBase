import{_ as e,o as a,c as n,e as r}from"./app-024c187f.js";const t={},s=r(`<h1 id="vue-3" tabindex="-1"><a class="header-anchor" href="#vue-3" aria-hidden="true">#</a> Vue 3</h1><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><pre><code>За место Vuex, Pinia можно использовать реактивные переменные
store/shoping_cart.js:

cart = ref({
    isOpened: false,
    setIsOpened: function(value) {
        this.isOpened = value
    }
})
</code></pre><h2 id="антипатерны" tabindex="-1"><a class="header-anchor" href="#антипатерны" aria-hidden="true">#</a> Антипатерны:</h2><pre><code>Работа с DOM напрямую:
    const el = this.$el.querySelector(&quot;#panel&quot;);
</code></pre>`,5),c=[s];function o(d,i){return a(),n("div",null,c)}const _=e(t,[["render",o],["__file","js_vue_3.html.vue"]]);export{_ as default};
