<template>
  <main class="p-5">
    <div class="container">
      <user-data @add-new-user="addFriend"></user-data>
      <div class="card">
        <div class="card-header">Active Users</div>
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div
                v-for="friend in friends"
                :key="friend.id"
                class="col-lg-4 col-md-6"
              >
                <active-user
                  :id="friend.id"
                  :name="friend.name"
                  :age="friend.age"
                ></active-user>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Shivam Sharma",
          age: "22",
        },
        {
          id: "2",
          name: "Naveen Das",
          age: "23",
        },
        {
          id: "3",
          name: "Sumit Kumar",
          age: "23",
        },
      ],
    };
  },
  methods: {
    addFriend(name, age) {
      const obj = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };
      this.friends.push(obj);
    },
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
</style>
