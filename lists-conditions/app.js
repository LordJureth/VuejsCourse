const app = Vue.createApp({
  data() {
    return {
        goalInput: '',
        goals: [],
        object: {name: 'Toby', age: 34}
    };
  },
  methods: {
    addGoal: function () {
        if (this.goalInput.length === 0) {
            return;
        }

        this.goals.push(this.goalInput);
        this.goalInput = '';
    },
    removeGoal: function (index) {
        this.goals.splice(index, 1);
    },
    resetGoals: function () {
        this.goals = [];
        this.goalInput = '';
    }
  }
});

app.mount('#user-goals');
