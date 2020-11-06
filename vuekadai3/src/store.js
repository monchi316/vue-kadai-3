import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [],
        newItem: '',
    },
    mutations: {
        newItem(state, value) {
            let id = state.tasks.length
            state.newItem = { id: id, taskName: value, status: '作業中' };
        },
        addTask(state, value) {
            state.tasks.push(value);
            state.newItem = '';
        },
        statusChange(state, { id, working, done }) {
            if (state.tasks[id].status === '作業中') {
                state.tasks[id].status = done;
            } else {
                state.tasks[id].status = working;
            }
        },
        deleteTask(state, id) {
            state.tasks.splice(id, 1);
            state.tasks.forEach((task) => {
                if (task.id > id) {
                    task.id--;
                }
            });
        },
    },
})