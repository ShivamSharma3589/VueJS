const app = Vue.createApp({
  data() {
    return {
      name: "Shivam Sharma",
      age: 22,
      img: "https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };
  },
  methods: {
    getRandomNumber() {
      return Math.ceil(Math.random());
    },
  },
});

app.mount("#assignment");
