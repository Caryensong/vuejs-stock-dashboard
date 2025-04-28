<template>
    <BaseCard>
        <div class="company-card">
            <div class="logoheadline">
                <img :src="logoUrl" alt="Company Logo" />
                <h3>{{ name }}</h3>
            </div>
            <p>Revenue Q1 2024</p>
            <p>{{ revenue }} Mrd USD</p>
            <p :class="{ 'positive': growth > 0, 'negative': growth < 0 }">
                {{ growth > 0 ? '+' : '' }}{{ growth }}%
            </p>
        </div>
    </BaseCard>
</template>

<script>
import BaseCard from './BaseCard.vue';

// ICON MAPPING
const icons = {
    "apple.png": require('@/assets/icon/apple.png'),
    "meta.png": require('@/assets/icon/meta.png'),
    "microsoft.png": require('@/assets/icon/microsoft.png'),
    "google.png": require('@/assets/icon/google.png'),
    "amazon.png": require('@/assets/icon/amazon.png'),
    "tesla.png": require('@/assets/icon/tesla.png')
};

export default {
    name: 'CompanyCard',
    components: { BaseCard },
    props: {
        name: String,
        logo: String,
        revenue: Number,
        growth: Number
    },
    computed: {
        logoUrl() {
            return icons[this.logo] || '';
        }
    }
}
</script>

<style scoped>
.company-card {
    display: flex;
    flex-direction: column;
    align-items: center;
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

img {
    width: 20px;
    height: 20px;
    object-fit: contain;
}
</style>