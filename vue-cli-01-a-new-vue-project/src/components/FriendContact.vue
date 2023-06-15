<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleIsFavourite">Toggle Favourite</button>
    <button @click="toggleDataVisibility">
      {{ isDataVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="$emit('delete-contact', id)">Delete Contact</button>
    <ul v-if="isDataVisible">
      <li><strong>Phone: </strong> {{ phoneNumber }}</li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavourite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: String,
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  emits: ["toggle-favourite", "delete-contact"],
  // emits: {
  //   "toggle-favourite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("ID is missing!");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      isDataVisible: false,
    };
  },
  methods: {
    toggleDataVisibility() {
      this.isDataVisible = !this.isDataVisible;
    },
    toggleIsFavourite() {
      this.$emit("toggle-favourite", this.id);
      // this.isFavouriteFriend = !this.isFavouriteFriend;
    },
  },
};
</script>
