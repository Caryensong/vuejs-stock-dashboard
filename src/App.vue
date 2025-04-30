<template>

  <h1>The Magnificent Seven Companies</h1>
  <div class="scroll-container">
    <div class="company-cards" ref="cardContainer">
      <button class="scroll-button left" @click="scrollLeft">‹</button>
      <CompanyCard name="Apple" logo="apple.png" :revenue="38.52" :growth="2.8" />
      <CompanyCard name="Meta" logo="meta.png" :revenue="435.57" :growth="-1.32" />
      <CompanyCard name="Microsoft" logo="microsoft.png" :revenue="435.57" :growth="-1.32" />
      <CompanyCard name="Google" logo="google.png" :revenue="435.57" :growth="-1.32" />
      <CompanyCard name="Amazon" logo="amazon.png" :revenue="435.57" :growth="-1.32" />
      <CompanyCard name="Tesla" logo="tesla.png" :revenue="435.57" :growth="-1.32" />

      <CompanyCard name="Nvidia" logo="tesla.png" :revenue="435.57" :growth="-1.32" />
    </div>
    <button class="scroll-button" @click="scrollRight">›</button>
  </div>
  <div class="revenue_chart">
    <RevenueChart></RevenueChart>
    <RevenueBreakdown></RevenueBreakdown>
  </div>

  <section class="tables">
    <div class="subtables">
      <NetIncomeChart></NetIncomeChart>
      <GrossMarginChart></GrossMarginChart>
    </div>
    <RevenueGrowthChart></RevenueGrowthChart>
  </section>

</template>

<script>
import { stockService } from '@/services/stockService.js';
import CompanyCard from '@/components/CompanyCard.vue';
import RevenueChart from '@/components/RevenueChart.vue';
import RevenueBreakdown from '@/components/RevenueBreakdown.vue';
import NetIncomeChart from '@/components/NetIncomeChart.vue';
import GrossMarginChart from '@/components/GrossMarginChart.vue';
import RevenueGrowthChart from '@/components/RevenueGrowthChart.vue';


export default {

  name: 'App',
  components: {
    CompanyCard,
    RevenueChart,
    RevenueBreakdown,
    NetIncomeChart,
    GrossMarginChart,
    RevenueGrowthChart
  },
  async created() {
    this.data = await stockService.getRevenue('$AAPL');
    console.log('loaded data', this.data);
  },
  methods: {
  scrollRight() {
    const container = this.$refs.cardContainer;
    container.scrollLeft += 200;
  },
  scrollLeft() {
    const container = this.$refs.cardContainer;
    container.scrollLeft -= 200;
  }
}
}
</script>

<style>
body {
  margin: 0;
  color: #fff;
  overflow: hidden;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


#app {
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  padding: 100px;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
}

.company-cards {
  display: flex;
  gap: 20px;
  background: #023A6233;
  padding: 20px;
  border-radius: 20px;
  overflow-x: auto;
  margin-bottom: 20px;
  white-space: nowrap;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.company-cards::-webkit-scrollbar {
  display: none;
}

.revenue_chart {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.tables {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.subtables {
  display: flex;
  gap: 20px;
  width: 100%;
}

.scroll-container {
  position: relative;
}

.scroll-button {
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  background: #00bcd4;
  border: none;
  color: white;
  font-size: 24px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  width: 40px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-button.left {
  left: -10px;
}

.scroll-button.right {
  right: -10px;
}

</style>
