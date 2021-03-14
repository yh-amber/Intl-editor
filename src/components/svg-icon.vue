<template>
  <svg :class="svgClass" @click="onClickIcon" aria-hidden="true">
    <use :xlink:href="icon" />
  </svg>
</template>

<script lang="ts">
  import { Prop, Vue, Component } from 'vue-property-decorator';

  @Component
  export default class SvgIcon extends Vue {
    @Prop() iconName !: string;
    @Prop() className ?: string;
    @Prop() onClick ?: Function;

    get icon() {
      return `#icon-${this.iconName}`;
    }

    get svgClass() {
      return this.className ? `svg-icon ${this.className}` : 'svg-icon';
    }

    get onClickIcon() {
      return this.onClick ? this.onClick : function() {};
    }
  }
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    cursor: pointer;
  }
</style>