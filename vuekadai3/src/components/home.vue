<template>
    <div>
        <h1>ToDoリスト</h1>
        <input type="radio" name="status" @change = "allBtn">すべて
        <input type="radio" name="status" @change = "workingBtn">作業中
        <input type="radio" name="status" @change = "doneBtn">完了
        <table>
            <thead>
                <th>ID</th>
                <th>コメント</th>
                <th>状態</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="task in tasks" :key="task.id">
                    <td>{{ task.id }}</td>
                    <td>{{ task.taskName }}</td>
                    <td><button @click = "statusChange(task.id)">{{ task.status }}</button></td>
                    <td><button @click = "deleteTask(task.id)">削除</button></td>
                </tr>
            </tbody>
        </table>
        <h1>新規タスクの追加</h1>
        <input type="text" v-model = "newTask" @change = "addItem">
        <button @click = "addTask">追加</button>
    </div>
</template>


<script>
export default {
    name: 'home',
    data() {
        return {
            newTask: '',
            working: '作業中',
            done: '完了',
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks;
        },
        works() {
            return this.$store.state.works;
        },
        dones() {
            return this.$store.state.dones;
        },
        newItem()  {
            return this.$store.state.newItem;
        }
    },
    methods: {
        statusChange: function(id) {
                this.$store.commit('statusChange', {id: id, working: this.working, done: this.done});
        },
        addItem: function() {
            this.$store.commit('newItem', this.newTask);
        },
        addTask: function() {
            this.$store.commit('addTask', this.newItem);
            this.newTask = '';
        },
        deleteTask: function(id) {
            this.$store.commit('deleteTask', id);
        },
        allBtn: function() {
            this.$emit("form-click", "home");
        },
        workingBtn: function() {
            this.$emit("form-click", "working")
        },
        doneBtn: function() {
            this.$emit("form-click", "done")
        }
    }
}
</script>