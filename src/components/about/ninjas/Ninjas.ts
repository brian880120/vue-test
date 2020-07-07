import { Component, Vue } from 'vue-property-decorator';
import Ninja from '@/models/Ninja';

@Component
export default class Ninjas extends Vue {
    ninjas: Ninja[] = [{
        name: 'Ryu',
        speciality: 'Vue Components',
        show: false,
    }, {
        name: 'Crystal',
        speciality: 'HTML Wizardry',
        show: false,
    }, {
        name: 'Hitoshi',
        speciality: 'Click Events',
        show: false,
    }, {
        name: 'Tango',
        speciality: 'Conditionals',
        show: false,
    }, {
        name: 'Kami',
        speciality: 'Webpack',
        show: false,
    }, {
        name: 'Yoshi',
        speciality: 'Data Dig',
        show: false,
    }];

    toggleShow(idx: number): void {
        this.ninjas[idx].show = !this.ninjas[idx].show;
    }
}