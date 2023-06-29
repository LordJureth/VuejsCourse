Vue.createApp({
    data: function () {
        return {
            userClass: '',
            visible: true,
        }
    },
    watch: {
        visible: function () {
            if (this.visible) {
                this.userClass = 'visible'
            }

            this.userClass = 'hidden'
        }
    },
    computed: {

    },
    methods: {
        toggleVisiblity: function () {
            this.visible = !this.visible;
            console.log(this.visible);
        }
    }
}).mount('#assignment');