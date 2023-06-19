<template>
  <div class="card card-sm mb-3">
    <div class="card-body">
      <h2>{{ name }}</h2>
      <h3>{{ age }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
};
</script>
