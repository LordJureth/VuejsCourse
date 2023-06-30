const app = Vue.createApp({
    data: function () {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed: {
        boxAClasses: function () {
            return [
                'demo',
                {
                    active: this.boxASelected,
                }
            ];
        },
        boxBClasses: function () {
            return [
                'demo',
                {
                    active: this.boxBSelected,
                }
            ];
        },
        boxCClasses: function () {
            return [
                'demo',
                {
                    active: this.boxCSelected,
                }
            ];
        },
    },
    methods: {
        markBoxActive: function (box) {
            if (box === 1) {
                this.boxASelected = true;
                this.boxBSelected = false;
                this.boxCSelected = false;

                return;
            }
            
            if (box === 2) {
                this.boxASelected = false;
                this.boxBSelected = true;
                this.boxCSelected = false;

                return;
            }

            if (box === 3) {
                this.boxASelected = false;
                this.boxBSelected = false;
                this.boxCSelected = true;

                return;
            }
        },
    }
});

app.mount('#styling');