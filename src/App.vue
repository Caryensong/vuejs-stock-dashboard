<template>

  <h1>The Magnificent Seven Companies</h1>
  <div class="company-cards">
      <CompanyCard
        name="Apple"
        logo="apple.png"
        :revenue="38.52"
        :growth="2.8"
      />
      <CompanyCard
        name="Meta"
        logo="meta.png"
        :revenue="435.57"
        :growth="-1.32"
      />
      <CompanyCard
        name="Microsoft"
        logo="meta.png"
        :revenue="435.57"
        :growth="-1.32"
      />
      <CompanyCard
        name="Google"
        logo="meta.png"
        :revenue="435.57"
        :growth="-1.32"
      />
      <CompanyCard
        name="Amazon"
        logo="meta.png"
        :revenue="435.57"
        :growth="-1.32"
      />
      <CompanyCard
        name="Tesla"
        logo="meta.png"
        :revenue="435.57"
        :growth="-1.32"
      />
    </div>
    <BaseCard>
      <h3>Revenue last 3 years</h3>
      <p>Dies ist der Inhalt der ersten Card.</p>
    </BaseCard>
</template>

<script>
import BaseCard from './components/BaseCard.vue';
import {stockService} from '@/services/stockService.js';
import CompanyCard from '@/components/CompanyCard.vue';

export default {
  
  name: 'App',
  components: {
    BaseCard,
    CompanyCard,
  }, 
  async created(){
    this.data = await stockService.getRevenue('$AAPL');
    console.log('loaded data', this.data);
    
  }
}
</script>

<style>
body{
  margin: 0;
  color: #fff;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


#app {
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  padding: 100px;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
}

.company-cards{
  display: flex;
  gap: 20px;
}
</style>
