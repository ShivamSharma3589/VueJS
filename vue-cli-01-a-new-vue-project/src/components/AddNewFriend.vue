<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="enteredName" />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="text" id="phone" v-model="enteredPhone" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="enteredEmail" />
    </div>

    <div>
      <span>Favourite friend: </span>
      <label for="yes">Yes</label>
      <input type="radio" name="yes" id="yes" />
      <label for="no">No</label>
      <input type="radio" name="no" id="no" />
    </div>

    <div>
      <button type="submit">Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
      isFavourite: false,
    };
  },
  emits: ["add-contact"],
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
