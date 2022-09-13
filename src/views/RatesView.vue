<template>
    <table>
        <thead>
            <tr>
                <th>Nr.</th>
                <th @click="sort('name')" class="rateHeading unselectable">Currency</th>
                <th @click="sort('rate')" class="rateHeading unselectable">Rate</th>
                <th @click="sort('rate')" class="rateHeading unselectable">Reverse Rate</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(row, key) in sortedRates" :key="key">
                <RateRow :rowKey="key" :rowInfo="row" />
            </template>
        </tbody>
    </table>
</template>
<script>
import RateRow from '@/components/RateRow.vue'
import { APIURL, CURRENCYNAMES } from '@/constants.js'
import Flag from '@/components/Flag.vue'

export default {
    name: 'RatesView',
    components: {
        RateRow,
        Flag
    },
    data() {
        return {
            dateRows: [],
            currentSort: 'name',
            currentSortDir: 'asc',
            currencies: CURRENCYNAMES
        }
    },
    mounted() {
        fetch(APIURL)
            .then(response => response.json())
            .then(data => this.dateRows = data);
    },
    methods: {
        sort: function (s) {
            //if s == current sort, reverse
            if (s === this.currentSort) {
                this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
            }
            this.currentSort = s;
        }
    },
    computed: {
        sortedRates: function () {
            return this.dateRows.sort((a, b) => {
                let modifier = 1;
                if (this.currentSortDir === 'desc') modifier = -1;
                if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            });
        }
    }
}
</script>