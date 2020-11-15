<template>
    <label>
        {{ title }}
        <input type="checkbox" :checked="value" @input="$emit('input', $event.target.checked)">
    </label>
</template>

<script>
export default {
    name: 'RegistrationFormInputCheckbox',
    props: ['value', 'title']
}
</script>