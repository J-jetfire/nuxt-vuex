<!-- components/TaskList.vue -->
<template>
  <div>
    <form @submit.prevent="addTask">
      <input v-model="newTask" placeholder="Add a new task" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </ul>
  </div>
</template>

<script>
import TaskItem from '~/components/TaskItem.vue';

export default {
  components: {
    TaskItem
  },
  data() {
    return {
      newTask: ''
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') return;
      const task = {
        id: Date.now(),
        text: this.newTask,
        completed: false
      };
      this.$store.dispatch('addTask', task);
      this.newTask = '';
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
