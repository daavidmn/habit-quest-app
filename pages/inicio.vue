<template>
    <view>
        <text>Pagina inicio</text>
        <button title="ir para amigos" @press="goToAmigos"></button>
        
    </view>
</template>

<script>
export default {
    props: {
        navigation: {
        type: Object
        }
    },
    methods: {
        goToAmigos() {
        this.navigation.navigate("amigos");
        }
    }
}
</script>

<style>

</style>