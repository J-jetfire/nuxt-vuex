<!-- pages/index.vue -->
<template>
  <div>
    <h1>Todo App</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from '~/components/TaskList.vue';

export default {
  components: {
    TaskList
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
