<template>
    <tr>
        <td>{{ rowKey+1 }}</td>
        <td class="rateColumn"><Flag :acronym="acronym"/> {{ Currencies[acronym] }} ({{acronym}})</td>
        <td class="rateColumn"><Flag acronym="EUR"/> EUR = {{ rate }} {{ acronym }} <Flag :acronym="acronym"/></td>
        <td class="rateColumn"><Flag :acronym="acronym"/> 1 {{ acronym }} = {{ (1/rate).toFixed(5) }} EUR <Flag acronym="EUR"/></td>
    </tr>
</template>
<script>
import { CURRENCYNAMES } from '@/constants.js'
import Flag from '@/components/Flag.vue'

export default {
    name: 'RateRow',
    props: {
        rowKey: Number,
        rowInfo: Object
    },
    components: {
        Flag
    },
    data() {
        return {
            Currencies: CURRENCYNAMES
        }
    },
    computed: {
        acronym() {
            return this.rowInfo['name']
        },
        rate() {
            return this.rowInfo['rate']
        }
    }
}
</script>