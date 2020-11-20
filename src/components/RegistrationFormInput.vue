<template>
    <Label :title="title" :$v="$v">
        <input
            @input="$emit('input', $event.target.value)"
            v-bind="$attrs"
            @blur="touch"
            :value="value"
            :class="{ error: $v && $v.$error }"
        />
    </Label>
</template>

<script>
import RegistrationFormInput from "./RegistrationFormLabel.vue";
export default {
    components: {
        Label: RegistrationFormInput,
    },
    name: "RegistrationFormInput",
    props: ["value", "title", "$v"],

    methods: {
        touch() {
            if (this.$v) {
                this.$v.$touch();
            }
        },
    },
};
</script>


<style lang="sass" scoped>
label
    display: grid
    width: 100%
    height: 120px
    grid-template-rows: 35px 54px 25px
    grid-gap: 5px
    input
        font-family: Avenir, Helvetica, Arial, sans-serif
        height: 54px
        font-size: 100%
        border-radius: 4px
        border: 1px solid #dadce0
        padding: 15px
    .error
        border: 1px solid #d93025
</style>