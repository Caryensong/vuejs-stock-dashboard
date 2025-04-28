<template>
    <BaseCard>
      <h2>Erste Karte</h2>
      <p>Dies ist der Inhalt der ersten Card.</p>
    </BaseCard>
</template>

<script>
import BaseCard from './components/BaseCard.vue';
import {stockService} from '@/services/stockService.js';

export default {
  
  name: 'App',
  components: {
    BaseCard
  }, 
  async created(){
    this.data = await stockService.fetchData('$AAPL');
    console.log('loaded data', this.data);
    
  }
}
</script>

<style>
body{
  margin: 0;
}

#app {
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  padding: 100px;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
}
</style>
