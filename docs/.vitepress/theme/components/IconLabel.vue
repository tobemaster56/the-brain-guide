<template>
  <div class="note-label">
    <img :src="icon" class="icon" />
    <span class="text"><slot></slot></span>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '/default-icon.png' }
})
</script>

<style scoped>
.note-label {
  display: flex;
  align-items: center;
  gap: 10px; /* 间距 */
  margin: 10px 0;
}
.icon {
  width: auto;
  height: 48px;
}
.text {
  font-weight: 500;
}
</style>
