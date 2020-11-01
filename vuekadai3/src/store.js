import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [],
        newItem: '',
        works: [],
        dones: []
    },
    mutations: {
        newItem(state, value) {
            let id = state.tasks.length
            state.newItem = { id: id, taskName: value, status: '作業中' };
        },
        addTask(state, value) {
            state.tasks.push(value);
            state.works.push(value);
            state.newItem = '';
        },
        statusChange(state, { id, working, done }) {
            if (state.tasks[id].status === '作業中') {
                state.tasks[id].status = done;
                state.dones = [];
                state.works = [];
                state.tasks.forEach((task) => {
                    if (task.status === '完了') {
                        state.dones.push(task);
                    } else {
                        state.works.push(task);
                    }
                });    
            } else {
                state.tasks[id].status = working;
                state.works = [];
                state.dones = [];
                state.tasks.forEach((task) => {
                    if (task.status === '作業中') {
                        state.works.push(task);
                    } else {
                        state.dones.push(task);
                    }
                });
            }
        },
        deleteTask(state, id) {
            state.works = [];
            state.dones = [];
            state.tasks.splice(id, 1);
            state.tasks.forEach((task) => {
                if (task.id > id) {
                    task.id--;
                }
                if (task.status === '作業中') {
                    state.works.push(task);
                } else {
                    state.dones.push(task);
                }
            });
        },
    },
})