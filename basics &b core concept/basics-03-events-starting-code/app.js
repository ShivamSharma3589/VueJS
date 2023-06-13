const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    setConfirmedName() {
      this.confirmedName = this.name;
    },
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value + lastName;
    },
  },
});

app.mount("#events");
