<template>
  <table>
    <tr>
      <th v-for="locale in headers" :key="locale">{{locale}}</th>
      <th />
    </tr>
    <message-row v-for="(val, mid) in contents" :mid="mid" :value="val" :key="mid" />
  </table>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';
  import { State, Action } from 'vuex-class';
  import MessageRow from '../components/message-row.vue';

  @Component({
    components: {
      'message-row': MessageRow,
    }
  })
  export default class EditorBoard extends Vue {
    @State('headers') headers !: string[];
    @State('contents') contents !: object;
    @Action('initBoardData') initBoardData !: Function;

    created() {
      this.initBoardData();
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  tr:nth-child(odd) {
    background-color: #dcedef;
  }

  tr:first-child {
    background-color: #97c5b0;
  }

  th {
    text-align: left;
    padding: 0.656em 0.25em;
  }

  th:first-child {
    width: 12em;
  }

  th:last-child {
    width: 7em;
  }

</style>