import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Punchbag extends Vue {
    health = 100;
    ended = false;

    punch(): void {
        this.health -= 10;

        if (this.health <= 0) {
            this.ended = true;
        }
    }

    restart(): void {
        this.health = 100;
        this.ended = false;
    }

    readRefs(): void {
        console.log(this.$refs);
    }
}