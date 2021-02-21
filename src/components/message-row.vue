<template>
  <tr v-if="editingId === mid">
    <td>{{ mid }}</td>
    <td v-for="(msg, loc) in editingValues" :key="loc">
      <textarea v-model="editingValues[loc]" placeholder=""></textarea>
    </td>
    <td><span v-on:click="onLeaveChange">Back</span>&nbsp;<span @click="onConfirmChange">Confirm</span></td>
  </tr>
  <tr v-else>
    <td>{{ mid }}</td>
    <td v-for="(msg, loc) in value" :key="loc">{{ msg }}</td>
    <td><span>Delete</span>&nbsp;<span v-on:click="onEditRowData(mid,value)">Modify</span></td>
  </tr>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';
  import { State, Action } from 'vuex-class';
  // import Back from '../../assets/back.svg';

  @Component({
    components: {
    }
  })
  export default class EditorBoard extends Vue {
    @Prop() mid !: string;
    @Prop() value !: object;

    @State('editingId') editingId !: string;
    @State('editingValues') editingValues !: object;

    @Action('onEditMessage') onEditMessage !: Function;
    @Action('onConfirmChange') onConfirmChange !: Function;
    @Action('onLeaveChange') onLeaveChange !: Function;

    private onEditRowData(mid: string, value: any) {
      const data = { id: mid, values: { ...value } };

      this.onEditMessage(data);
    }
  }
</script>

<style scoped>
  tr td {
    padding: 0.5em 0.25em;
  }

  td span {
    cursor: pointer;
  }

  textarea {
    width: 98%;
    height: auto;
  }

</style>