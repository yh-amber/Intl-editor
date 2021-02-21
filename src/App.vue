<template>
  <div class="app_container">
    <h4>Intl Message Editing Board</h4>
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
  .app_container {
    padding: 5px 10px;
    background-color: transparent;
  }
</style>
