<template>
    <div class="bag-app">
        <div class="bag" :class="{burst: ended}">
        </div>
        <div class="bag-health">
            <div :style="{width: health + '%'}"></div>
        </div>
        <div class="bag-controls">
            <button @click="punch" v-if="!ended">Punch</button>
            <button @click="restart">Restart</button>
        </div>
        <input type="text" ref="input" />
        <button @click="readRefs">Submit</button>
    </div>
</template>

<script lang="ts" src="./Punchbag.ts" />

<style scoped lang="scss" src="./Punchbag.scss" />
