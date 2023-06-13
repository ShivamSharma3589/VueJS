const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      goals: [],
      isHidden: false,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    hideListHandler() {
      this.isHidden = !this.isHidden;
    },
  },
  computed: {
    buttonText() {
      return this.isHidden ? "Hide" : "Show";
    },
  },
});

app.mount("#assignment");
