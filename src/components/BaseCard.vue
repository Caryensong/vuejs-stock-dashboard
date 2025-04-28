<template>
    <div class="card">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseCard'
  }
  </script>
  
  <style scoped>
  .card {
    background: #011F35;
    gap: 20px;
    border-radius: 16px;
    padding: 20px 32px;
    box-sizing: border-box;
    width: 100%;
  }
  </style>
  