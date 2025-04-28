<template>
    <BaseCard>
      <div class="company-card">
        <img :src="logo" alt="Company Logo" />
        <h3>{{ name }}</h3>
        <p>Revenue Q1 2024</p>
        <p>{{ revenue }} Mrd USD</p>
        <p :class="{'positive': growth > 0, 'negative': growth < 0}">
          {{ growth > 0 ? '+' : '' }}{{ growth }}%
        </p>
      </div>
    </BaseCard>
  </template>
  
  <script>
 import BaseCard from './BaseCard.vue';

  
  export default {
    name: 'CompanyCard',
    components: { BaseCard },
    props: {
      name: String,
      logo: String,
      revenue: Number,
      growth: Number
    }
  }
  </script>
  
  <style scoped>
  .company-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .positive {
    color: #00ff00;
  }
  .negative {
    color: #ff0000;
  }
  </style>
  