<template>
    <table>
        <thead>
            <tr>
                <th>Nr.</th>
                <th>Currency</th>
                <th>Rate</th>
                <th>Reverse Rate</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(row, key) in dateRows">
                <RateRow :rowKey="key" :rowInfo="row"/>
            </template>
        </tbody>
    </table>
</template>
<script>
import RateRow from '@/components/RateRow.vue'
import { APIURL } from '@/constants.js'

export default {
    name: 'RatesView',
    components: {
        RateRow
    },
    data() {
        return {
            dateRows: null
        }
    },
    mounted() {
        fetch(APIURL)
        .then(response => response.json())
        .then(data => this.dateRows = Object.entries(data));
    }
}
</script>