<template>
    <Label :title="title" :$v="$v">
        <input
            @input="$emit('input', $event.target.value)"
            v-bind="$attrs"
            @blur="touch"
            :value="value"
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