<template>
    <tr>
        <td>{{ rowKey+1 }}</td>
        <td>{{ Currencies[rowInfo[0]] }} ({{rowInfo[0]}})</td>
        <td>{{ rowInfo[1] }}</td>
        <td>{{ (1/rowInfo[1]).toFixed(5) }}</td>
    </tr>
</template>
<script>
import { CURRENCYNAMES } from '@/constants.js'
export default {
    name: 'RateRow',
    props: {
        rowKey: Number,
        rowInfo: Array
    },
    data() {
        return {
            Currencies: CURRENCYNAMES
        }
    }
}
</script>