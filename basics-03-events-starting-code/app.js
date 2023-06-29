const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      step: 5,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    eventCounter: function (increment) {
        if (increment) {
            this.counter = this.counter + this.step;
            return;
        }

        this.counter = this.counter - this.step;
        
        if (this.counter < 0) {
            this.counter = 0;
        }
    },
    setName: function (event) {
        this.name = event.target.value;
    },
    setConfirmedName: function () {
        this.confirmedName = this.name;
    },
    submitForm: function () {
        alert('Sup');
    }
  }
});

app.mount('#events');
