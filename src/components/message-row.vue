<template>
  <tr v-if="editingId === mid">
    <td>{{ mid }}</td>
    <td v-for="(msg, loc) in editingValues" :key="loc">
      <textarea v-model="editingValues[loc]" placeholder=""></textarea>
    </td>
    <td>
      <svg-icon :onClick="onLeaveChange" icon-name="back"></svg-icon>
      &nbsp;
      <svg-icon :onClick="onConfirmChange" icon-name="confirm"></svg-icon>
    </td>
  </tr>
  <tr v-else>
    <td>{{ mid }}</td>
    <td v-for="(msg, loc) in value" :key="loc">{{ msg }}</td>
    <td>
      <svg-icon :onClick="onDelete(mid)" icon-name="delete"></svg-icon>
      &nbsp;
      <svg-icon :onClick="onEdit(mid,value)" icon-name="edit"></svg-icon>
    </td>
  </tr>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';
  import { State, Action } from 'vuex-class';

  @Component
  export default class EditorBoard extends Vue {
    @Prop() mid !: string;
    @Prop() value !: object;

    @State('editingId') editingId !: string;
    @State('editingValues') editingValues !: object;

    @Action('onEditMessage') onEditMessage !: Function;
    @Action('onConfirmChange') onConfirmChange !: Function;
    @Action('onLeaveChange') onLeaveChange !: Function;
    @Action('onDeleteRowData') onDeleteRowData !: Function;

    private onEdit(mid: string, value: any) {
      return () => {
        const data = { id: mid, values: { ...value } };
        this.onEditMessage(data);
      }
    }

    private onDelete(mid: string) {
      return () => this.onDeleteRowData(mid)
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
    box-sizing: border-box;
  }

</style>