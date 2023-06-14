const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Naveen",
          phone: "8448953175",
          email: "naveen@gmail.com",
        },
        {
          id: "Sumit",
          phone: "9205536701",
          email: "sumit@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
      <h2>{{friend.id}}</h2>
      <button @click="toggleDetails">{{showDetails ? 'Hide' : 'Show'}} Details</button>
      <ul v-if="showDetails">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      showDetails: false,
      friend: {
        id: "Naveen",
        phone: "8448953175",
        email: "naveen@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});

app.mount("#app");
