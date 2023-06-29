const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        step: 5,
        name: '',
        lastName: '',
      };
    },
    watch: {
        counter: function (value) {
            if (value > 50) {
                this.counter = 0;
            }
        }
    },
    computed: {
        fullname: function () {
            return this.name + ' ' + this.lastName;
        }
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
      resetName: function () {
        this.name = '';
        this.lastName = '';
      },
    }
  });
  
  app.mount('#events');
  