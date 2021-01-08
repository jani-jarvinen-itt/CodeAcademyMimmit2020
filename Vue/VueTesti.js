const Counter = {
    data() {
        return {
            counter: 0,
            teksti: "AAAAAAA"
        }
    },
    mounted() {
      setInterval(() => { this.counter++ }, 1000)
    },
    methods: {
        muutaTeksti() {
            this.teksti = "Napin avulla muutettua"
        }
    }
}

Vue.createApp(Counter).mount('#counter')
