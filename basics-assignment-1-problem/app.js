const app = Vue.createApp({
    data: function () {
       return {
        name: 'Toby Loudon',
        age: 34,
        image: 'https://assetsio.reedpopcdn.com/heres-a-bolter-from-the-blue-warhammer-40-000-space-marine-2-is-in-the-works-1639141081983.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp'
       }
    },
    methods: {
        agePlusFive () {
            return this.age + 5;
        },
        favouriteNumber () {
            return Math.random();
        }
    }
});

app.mount('#assignment');