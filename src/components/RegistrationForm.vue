<template>
    <form class="registration-form" @submit.prevent="check">
        <fieldset>
            <Input v-model="lastName" title="Фамилия*" :$v="$v.lastName" />
            <Input v-model="name" title="Имя*" :$v="$v.name" />
            <Input v-model="patronymic" title="Отчество" />
            <Input
                v-model="birthday"
                title="Дата Рождения*"
                type="date"
                :$v="$v.birthday"
            />
            <Input
                v-model="phone"
                title="Телефон"
                :$v="$v.phone"
                @input="phoneParse"
            />
            <Radio
                v-model="gender"
                title="Пол"
                :values="['Мужской', 'Женский']"
                name="gender"
            />
            <Select
                v-model="group"
                s.itle="Группа клиентов*"
                :values="['VIP', 'Проблемные', 'ОМС']"
                :$v="$v.group"
                multiple
            />
            <Checkbox v-model="noSMS" title="Не отправлять СМС" />
        </fieldset>

        <fieldset>
            <Input v-model="index" title="Индекс" />
            <Input v-model="country" title="Страна" />
            <Input v-model="area" title="Область" />
            <Input v-model="city" title="Город*" :$v="$v.city" />
            <Input v-model="street" title="Улица" />
            <Input v-model="build" title="Дом" />
        </fieldset>

        <fieldset>
            <Select
                v-model="document"
                title="Тип документа"
                :values="[
                    'Пасспорт',
                    'Свидетельство о рождении',
                    'Вод. удостовирение',
                ]"
            />
            <Input v-model="series" title="Серия" />
            <Input v-model="number" title="Номер" />
            <Input v-model="whomIssued" title="Кем выдан" />
            <Input
                v-model="issueDate"
                title="Дата выдача*"
                type="date"
                :$v="$v.issueDate"
            />
        </fieldset>
        <fieldset>
            <p>*Поле обязательноя для заполнения</p>
        </fieldset>
        <fieldset>
            <button type="submit">Регистрация</button>
        </fieldset>
    </form>
</template>

<script>
import RegistrationFormRadio from "./RegistrationFormRadio.vue";
import RegistrationFormSelect from "./RegistrationFormSelect.vue";
import RegistrationFormCheckbox from "./RegistrationFormCheckbox.vue";
import RegistrationFormInput from "./RegistrationFormInput.vue";
import RegistrationFromLabel from "./RegistrationFormLabel.vue";

import { required, minLength } from "vuelidate/lib/validators";
export default {
    components: {
        Radio: RegistrationFormRadio,
        Select: RegistrationFormSelect,
        Checkbox: RegistrationFormCheckbox,
        Input: RegistrationFormInput,
        Label: RegistrationFromLabel,
    },
    name: "RegistrationForm",
    data() {
        return {
            lastName: "",
            name: "",
            patronymic: "",
            birthday: "",
            phone: "",
            gender: "",
            group: [],
            noSMS: true,
            index: "",
            country: "",
            area: "",
            city: "",
            street: "",
            build: "",
            document: [],
            series: "",
            number: "",
            whomIssued: "",
            issueDate: "",
            test: true,
        };
    },

    validations: {
        lastName: {
            required,
        },
        name: {
            required,
        },
        birthday: {
            required,
        },
        phone: {
            required,
        },
        group: {
            required,
        },
        city: {
            required,
        },
        issueDate: {
            required,
        },
    },

    methods: {
        check(event) {
            this.$v.$touch();
        },
        phoneParse(value) {
            this.phone = value
                .replace(/[^\d]/g, "")
                .replace(/^(7)?(\d{0,10})/, (_, p1, p2) => p2 && '7' + p2 || p1 || '')
                .slice(0, 11)                
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
fieldset
    // display: grid
</style>
