const app = Vue.createApp({
  data() {
    return {
      createGoal1: "Learning Vue JS",
      createGoal2: "<h2>Mastering Vue JS</h2>",
      vueLink: "https://vuejs.org",
      randomNumber: 0,
    };
  },
  methods: {
    outputGoal() {
      this.randomNumber = Math.random();
      if (this.randomNumber > 0.5) {
        return this.createGoal1;
      } else {
        return this.createGoal2;
      }
    },
  },
});

app.mount("#user-goal");
