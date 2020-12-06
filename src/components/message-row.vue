<template>
    <tr >
      <td>{{ mid }}</td>
      <td v-for="(msg, loc) in value" :key="loc">{{ msg }}</td> 
    </tr>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';

  @Component
  export default class EditorBoard extends Vue {
    @Prop() mid !: string;
    @Prop() value !: object;
  }
</script>

<style scoped>

</style>