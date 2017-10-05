<template>
    <div id="hello">Hello {{who}}</div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            who: 'world'
        }
    }
}

app = new Vue({
	el: '#hello',
})

</script>

<style>
#hello {
    background-color: #ffe;
}
</style>