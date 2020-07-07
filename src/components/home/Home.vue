<template>
    <div class="home">
        <img alt="Vue logo" src="../../assets/logo.png">
        <Punchbag />
    </div>
</template>

<script>
// @ is an alias to /src
import Punchbag from '@/components/home/punchbag/Punchbag.vue';

export default {
    name: 'Home',
    components: {
       Punchbag,
    },
}
</script>
