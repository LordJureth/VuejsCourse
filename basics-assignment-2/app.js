Vue.createApp({
    data: function () {
        return {
            alertText: 'Hello World!',
            keydownText: '',
            enterText: ''
        }
    },
    methods: {
        showAlert () {
            alert(this.alertText);
        },
        showKeydownText (event) {
            this.keydownText = event.target.value;
        },
        showEnterText (event) {
            this.enterText = event.target.value;
        },
    }
}).mount('#assignment');