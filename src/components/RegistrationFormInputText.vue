<template>
    <label>
        {{ title }}
        <input type="text" :value="value" @input="$emit('input', $event.target.value)">
    </label>
</template>

<script>
export default {
    nama: 'RegistrationFromInputText',
    props: ['value', 'title'],
}
</script>