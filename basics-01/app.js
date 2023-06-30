const app = Vue.createApp({
    data: function () {
        return {
            courseGoalA: 'To finish the Vue.js course!',
            courseGoalB: 'To learn, master and implement Vue.js!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        getCourseGoal: function () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            }

            return this.courseGoalB;
        }
    }
});

app.mount('#user-goal');