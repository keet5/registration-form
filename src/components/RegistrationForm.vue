<template>
    <form class="registration-form">
        <RegistrationFormInputText v-model="name" title="Имя" />
        <RegistrationFormInputText v-model="lastName" title="Фамилия" />
        <RegistrationFormInputText v-model="patronymic" title="Отчество" />
        <RegistrationFormInputDate v-model="birthday" title="Дата Рождения" />
        <RegistrationFormInputText v-model="phone" title="Телефон" />
        <RegistrationFormInputRadio
            v-model="gender"
            title="Пол"
            :values="['Мужской', 'Женский']"
            name="gender"
        />
        <RegistrationFormSelect v-model="group" title="Группа клиентов" :values="['VIP', 'Проблемные', 'ОМС']" />

       

        {{ group }}
    </form>
</template>

<script>
import RegistrationFormInputText from "./RegistrationFormInputText.vue";
import RegistrationFormInputDate from "./RegistrationFormInputDate.vue";
import RegistrationFormInputRadio from "./RegistrationFormInputRadio.vue";
import RegistrationFormSelect from "./RegistrationFormSelect.vue";

export default {
    components: {
        RegistrationFormInputText,
        RegistrationFormInputDate,
        RegistrationFormInputRadio,
        RegistrationFormSelect,
    },
    name: "RegistrationForm",
    data() {
        return {
            name: "",
            lastName: "",
            patronymic: "",
            birthday: "",
            phone: "",
            gender: "",
            group: [],
        };
    },

    filters: {
        parseData(data) {
            return data.split("-").reverse().join("-");
        },
    },
};
</script>


<style scoped lang="sass">
.registration-form
    margin: auto
    max-width: 600px
    background-color: yellowgreen
    display: grid
</style>
