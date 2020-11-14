<template>
    <label>
        {{ title }}
        <div class="wrapper">
            <select
                :multiple="true"
                @change="
                    $emit(
                        'input',
                        [].filter
                            .call(
                                $event.target.options,
                                (option) => option.selected
                            )
                            .map((option) => option.value)
                    )
                "
            >
                <option v-for="(v, n) of values" :key="n">{{ v }}</option>
            </select>
        </div>
    </label>
</template>

<script>
export default {
    nama: "RegistrationFromInputText",
    props: ["value", "title", "values"],
};
</script>

<style lang="sass" scoped>
select
.wrapper
    display: inline-block
    vertical-align: top
    overflow: hidden
    border: solid grey 1px

    select
        padding: 10px
        margin: -5px -20px -5px -5px
</style>