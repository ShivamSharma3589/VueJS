<template>
  <div class="card mb-3">
    <div class="card-header">User Data</div>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form-group">
                <label for="age">Age:</label>
                <input
                  type="text"
                  id="age"
                  class="form-control"
                  v-model="age"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-4">
          <button type="submit" class="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  emits: ["add-new-user"],
  methods: {
    submitForm() {
      this.$emit("add-new-user", this.name, this.age);
      (this.name = ""), (this.age = "");
    },
  },
};
</script>
