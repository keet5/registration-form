<template>
    <Label :title="title" :$v="$v">
        <select v-model="model" v-bind="$attrs">
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
select
// .wrapper
//     display: inline-block
//     vertical-align: top
//     overflow: hidden
//     border: solid grey 1px

//     select
//         padding: 10px
//         margin: -5px -20px -5px -5px
</style>