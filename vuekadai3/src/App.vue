<template>
  <div>
    <components :is="selectedComponent" v-on:form-click="selectedComponent=$event"></components>
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'App',
  components: {
    home,
  },
  data () {
    return {
      selectedComponent: 'home',
    }
  }
}
</script>
