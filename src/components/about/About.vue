<template>
    <div class="about">
        <h1>This is an about page</h1>
        <Ninjas />
    </div>
</template>

<script>
import Ninjas from '@/components/about/ninjas/Ninjas.vue';

export default {
    name: 'Home',
    components: {
       Ninjas,
    },
}
</script>
