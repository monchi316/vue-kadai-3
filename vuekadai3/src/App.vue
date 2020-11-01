<template>
  <div>
    <components :is="selectedComponent" v-on:form-click="selectedComponent=$event"></components>
  </div>
</template>

<script>
import home from './components/home.vue'
import working from './components/working.vue'
import done from './components/done.vue'

export default {
  name: 'App',
  components: {
    home,
    working,
    done
  },
  data () {
    return {
      selectedComponent: 'home',
    }
  }
}
</script>
