# Vue 3
##
    За место Vuex, Pinia можно использовать реактивные переменные
    store/shoping_cart.js:

    cart = ref({
        isOpened: false,
        setIsOpened: function(value) {
            this.isOpened = value
        }
    })

## Антипатерны:
    Работа с DOM напрямую:
        const el = this.$el.querySelector("#panel");
