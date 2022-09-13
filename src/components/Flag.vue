<template>
    <span v-bind:class="flagClass"></span>
</template>
<script>
export default {
    name: 'Flag',
    props: {
        acronym: String
    },
    computed: {
        flagClass() {
            return 'fi fi-'+this.acronym.slice(0, -1).toLowerCase()
        }
    }
}
</script>