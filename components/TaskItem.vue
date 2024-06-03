<!-- components/TaskItem.vue -->
<template>
  <li :class="{ completed: task.completed }">
    <input type="checkbox" :checked="task.completed" @change="toggleTask" />
    <span>{{ task.text }}</span>
    <button @click="removeTask">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object
  },
  methods: {
    toggleTask() {
      this.$store.dispatch('toggleTask', this.task.id);
    },
    removeTask() {
      this.$store.dispatch('removeTask', this.task.id);
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
