<template>
    <Label class="label-container" :title="title">
        <label v-for="(v, n) of values" :key="n">
            {{ v }}
            <input
                type="radio"
                :name="name"
                :value="v"
                @change="$emit('input', $event.target.value)"
            />
        </label>
    </Label>
</template>

<script>
import Label from "./RegistrationFormLabel.vue";
export default {
    components: { Label },
    nama: "RegistrationFromInputRadio",
    props: ["value", "title", "values", "name"],
};
</script>

<style lang="sass" scoped>
.label-container
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 15px
</style>