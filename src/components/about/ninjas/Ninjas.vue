<template>
    <div class="ninjas">
        <ul>
            <li v-for="(ninja, idx) in ninjas"
                :key="idx"
                @click="toggleShow(idx)"
            >
                <h2>{{ ninja.name }}</h2>
                <h2 v-if="ninja.show">{{ ninja.speciality }}</h2>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./Ninjas.ts" />

<style scoped lang="scss" src="./Ninjas.scss" />
