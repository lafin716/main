<template lang="html">
    <div>
        {{ products }}
    </div>
</template>
<script>

export default {
    props: {
        products: {
            type: Array,
            default: () => []
        }
    },
}
</script>
<style lang="css">
    
</style>