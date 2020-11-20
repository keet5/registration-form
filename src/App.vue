<template>
    <div id="app">
        <div class="success-window" v-if="success">
            <h1>Регистрация прошла успешно</h1>
        </div>
        <RegistrationForm v-else v-model="success"/>
    </div>
</template>

<script>
import RegistrationForm from "./components/RegistrationForm.vue";

export default {
    name: "App",
    components: {
        RegistrationForm,
    },
    data() {
        return {
            success: false
        }    
    },

    watch: {
        success() {
            console.log('success')
        }
    }
};
</script>

<style lang="sass">
#app
    font-family: Avenir, Helvetica, Arial, sans-serif
    .success-window
        margin: 100px
        text-align: center
</style>
