<template>
  <div class="pointer-container">
    <div class="count-container">
      <span class="count">{{ props.count }}</span>
    </div>
    <div class="actions">
      <button @click="onPlusOne">+1</button>
      <button @click="onPlus5">+5</button>
      <button @click="onPlus10">+10</button>
      <button @click="onTimes2">x2</button>
      <button @click="onMinusOne">-1</button>
      <button @click="onMinus5">-5</button>
      <button @click="onMinus10">-10</button>
      <button @click="onDelete">X</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  count: number
  onPlusOne: () => void
  onMinusOne: () => void
  onPlus5: () => void
  onMinus5: () => void
  onPlus10: () => void
  onMinus10: () => void
  onTimes2: () => void
  onDelete: () => void
}>()
</script>
<style scoped lang="scss">
.pointer-container {
  display: grid;
  grid-template-rows: 1fr max-content;
  row-gap: 20px;
  margin: auto;
  max-height: 150px;
  .count-container {
    grid-row: 2;
    grid-column: 2;
    display: flex;
    justify-content: center;
    font-size: 3em;;
  }

  .actions {
    grid-row: 3;
    grid-column: 2;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
}</style>
