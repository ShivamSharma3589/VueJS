const app = Vue.createApp({
  data() {
    return {
      keydownName: "",
      enteredValue: "",
    };
  },
  methods: {
    showAlert() {
      alert("Show Alert");
    },
    handleKeydown(e) {
      this.keydownName = e.target.value;
    },
    handleEnter(e) {
      this.enteredValue = e.target.value;
    },
  },
});

app.mount("#assignment");
