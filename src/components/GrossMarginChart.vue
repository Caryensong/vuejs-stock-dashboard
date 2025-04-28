<template>
    <BaseCard>
        <div class="company-card">
            <h3>Gross Margin in % LQ</h3>
      <p>Dies ist der Inhalt der ersten Card.</p>
        </div>
    </BaseCard>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
    name: 'GrossMarginChart',
    components: { BaseCard },
    props: {
        name: String,
        revenue: Number,
        growth: Number
    }
}
</script>

<style scoped>
.company-card {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.logoheadline{
    display: flex;
    align-items: center;
    gap: 5px;
}

.positive {
    color: #00ff00;
}

.negative {
    color: #ff0000;
}


</style>