<template>
  <img v-bind:src="block.extras.image.source" />
</template>

<script>
export default {
  props: {
    block: Object,
  },
};
</script>
