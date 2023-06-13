const app = Vue.createApp({
  data() {
    return {
      enteredClass: "",
      toggleClass: true,
      inlineStyle: "",
    };
  },
  methods: {
    handleToggle() {
      this.toggleClass = !this.toggleClass;
    },
  },
  computed: {
    paragraph() {
      return {
        user1: this.enteredClass === "user1",
        user2: this.enteredClass === "user2",
        visible: this.toggleClass,
        hidden: !this.toggleClass,
      };
    },
  },
});

app.mount("#assignment");
