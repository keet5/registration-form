<template>
    <label>
        <span>{{ title }}</span>
        <slot></slot>
        <template v-if="$v && $v.$error">
            <p
                v-for="({ name }, n) of $v.$flattenParams()"
                :key="n"
                v-show="!$v[name]"
            >
                {{ map[name] }}
            </p>
        </template>
    </label>
</template>

<script>
export default {
    name: "RegistrationFormLabel",
    props: ["title", "$v"],
    data() {
        return {
            map: {
                required: "Обязательное поле",
                minLength:  `Поле должно содержать как минимум ${this.$v && this.$v.$params.minLength && this.$v.$params.minLength.min } символов`
            },
        };
    },
};
</script>

<style lang="sass" scoped>
span
    font-size: 24px
p
    text-align: right
    font-size: 12px
    color: #d93025
</style>