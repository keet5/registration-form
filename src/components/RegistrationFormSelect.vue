<template>
    <Label :title="title" :$v="$v">
        <select v-model="model" v-bind="$attrs" :class="{ error: $v.$error }">
            <option v-for="(v, n) of values" :key="n">{{ v }}</option>
        </select>
    </Label>
</template>

<script>
import RegistrationFormInput from "./RegistrationFormLabel.vue";
export default {
    components: {
        Label: RegistrationFormInput,
    },
    nama: "RegistrationFromInputText",
    props: ["value", "title", "values", "$v"],
    computed: {
        model: {
            get() {
                return this.value;
            },

            set(value) {
                this.$emit("input", value);
            },
        },
    },
};
</script>

<style lang="sass" scoped>
label
    display: grid
    grid-gap: 10px
    margin-bottom: 10px
    select
        min-height: 54px
        border-radius: 4px
        border: 1px solid #dadce0
        font-family: Avenir, Helvetica, Arial, sans-serif
        font-size: 100%
        padding: 15px
    .error
        border: 1px solid #d93025
</style>