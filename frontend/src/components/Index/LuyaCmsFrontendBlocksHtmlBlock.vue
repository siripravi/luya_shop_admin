<template>
  <div v-html="block.values.html" />
</template>

<script>
export default {
  props: {
    block: Object,
  },
};
</script>
