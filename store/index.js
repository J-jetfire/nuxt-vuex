// store/index.js
export const state = () => ({
  tasks: []
});

export const mutations = {
  addTask(state, task) {
    state.tasks.push(task);
  },
  removeTask(state, taskId) {
    state.tasks = state.tasks.filter(task => task.id !== taskId);
  },
  toggleTask(state, taskId) {
    const task = state.tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
};

export const actions = {
  addTask({ commit }, task) {
    commit('addTask', task);
  },
  removeTask({ commit }, taskId) {
    commit('removeTask', taskId);
  },
  toggleTask({ commit }, taskId) {
    commit('toggleTask', taskId);
  }
};

export const getters = {
  tasks: (state) => state.tasks
};
