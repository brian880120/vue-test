<template>
    <div id="app">
        <Header />
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
        <Footer />
    </div>
</template>

<script>
import Header from './common/header/Header.vue';
import Footer from './common/footer/Footer.vue';
export default {
    components: {
        Header,
        Footer,
    }
};
</script>

<style lang="scss" src="./App.scss" />
