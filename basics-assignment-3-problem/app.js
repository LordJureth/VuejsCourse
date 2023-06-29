const app = Vue.createApp({
    data: function () {
        return {
            result: 0,
            beginText: 'Begin adding to get 37 in 5 seconds!',
            almostThereText: 'Not there yet',
            correctText: "Congratulations, you've done it",
            toomuchText: 'Too much!',
        }
    },
    watch: {
        result: function (value) {
            if (value > 37) {
                setTimeout(() => {
                    this.result = 0;
                }, 5000);
            }
        }
    },
    computed: {
        resultText: function () {
            if (this.result === 0) {
                return this.beginText;
            }

            if (this.result < 37) {
                return this.almostThereText;
            }

            if (this.result === 37) {
                return this.correctText;
            }

            return this.toomuchText;
        }
    },
    methods: {
        increment: function (value) {
            this.result = this.result + value;
        },
        reset: function () {
            this.result = 0;
        }
    }
});

app.mount('#assignment');