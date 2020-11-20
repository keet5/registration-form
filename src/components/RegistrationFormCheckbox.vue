<template>
    <label>
        <span>{{ title }}</span>
        <input type="checkbox" :checked="value" @input="$emit('input', $event.target.checked)">
    </label>
</template>

<script>
export default {
    name: 'RegistrationFormInputCheckbox',
    props: ['value', 'title']
}
</script>

<style lang="sass" scoped>
label
    display: grid
    grid-template-columns: auto auto
</style>