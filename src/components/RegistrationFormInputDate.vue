<template>
    <label>
        {{ title }}
        <input type="date" :value="value" @change="$emit('input', $event.target.value)">
    </label>
</template>

<script>
export default {
    nama: 'RegistrationFormInputDate',
    props: ['value', 'title'],
}
</script>