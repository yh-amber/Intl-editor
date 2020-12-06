<template>
  <div>
    <h3>Intl Message DashBoard</h3>
    <editor-board />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import EditorBoard from './pages/editor-board.vue'

  @Component({
    components: {
      'editor-board': EditorBoard
    }
  })
  export default class App extends Vue {

  }
</script>

<style scoped>

</style>
