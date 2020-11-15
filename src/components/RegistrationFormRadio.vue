<template>
    <div>
        <label v-for="(v, n) of values" :key="n">
            {{ v }}
            <input
                type="radio"
                :name="name"
                :value="v"
                @change="$emit('input', $event.target.value)"
            />
        </label>
    </div>
</template>

<script>
export default {
    nama: "RegistrationFromInputRadio",
    props: ["value", "title", "values", "name"],
};
</script>