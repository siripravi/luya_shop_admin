<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()
</script>

<template>
  <button
    :type="type ?? 'button'"
    :class="[
      'btn',
      {
        'btn--primary': variant === 'primary',
        'btn--secondary': variant === 'secondary',
        'btn--sm': size === 'sm',
        'btn--md': size === 'md',
        'btn--lg': size === 'lg'
      }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  background-color: rgba(255, 255, 255, 0);
  padding: 5px 30px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.171);
  transition: all 0.2s;
  font-family: var(--font-nunito);
  font-weight: bold;
  font-size: 1.8rem;
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

.btn--disabled {
  cursor: default !important;
  background-color: rgb(241, 241, 241) !important;
  color: var(--color-title) !important;
}

/* btn primary */
.btn--primary {
  background-color: var(--color-primary);
  color: #fff;
  border: 4px solid transparent;
  transition: all 0.2s ease-out;
}

.btn--primary:hover {
  background-color: #d6374a;
  transition: all 0.2s ease-out;
}

.btn--primary:active {
  background-color: #c5394a;
  transition: all 0.2s ease-out;
}

.btn--primary:focus {
  box-shadow: 0 0 1px 4px #fd5d707a;
  transition: all 0.2s ease-out;
}

/* btn secondary */
.btn--secondary {
  color: var(--color-primary);
  border: 2px solid #f3455994;
  transition: all 0.2s ease-out;
}

.btn--secondary:hover {
  color: #fff;
  background-color: #d6374a;
  transition: all 0.2s ease;
}

.btn--secondary:active {
  background-color: #c5394a;
  transition: all 0.2s ease-out;
}

.btn--secondary:focus {
  box-shadow: 0 0 1px 4px #fd5d707a;
  transition: all 0.2s ease-out;
}
</style>
