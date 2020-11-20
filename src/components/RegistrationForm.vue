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
                title="Группа клиентов*"
                :values="['VIP', 'Проблемные', 'ОМС']"
                :$v="$v.group"
                multiple
                size="3"
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
                :$v="$v.document"
                v-model="document"
                title="Тип документа*"
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
                title="Дата выдачи*"
                type="date"
                :$v="$v.issueDate"
            />
        </fieldset>
        <fieldset>
            <p>*Поле обязательноя для заполнения</p>
        </fieldset>
        <fieldset class="submit-container">
            <button type="submit">Регистрация</button>
        </fieldset>
    </form>
</template>

<script>
import Radio from "./RegistrationFormRadio.vue";
import Select from "./RegistrationFormSelect.vue";
import Checkbox from "./RegistrationFormCheckbox.vue";
import Input from "./RegistrationFormInput.vue";
import Label from "./RegistrationFormLabel.vue";

import { required, minLength } from "vuelidate/lib/validators";
export default {
    components: {
        Radio,
        Select,
        Checkbox,
        Input,
        Label,
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
            noSMS: false,
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
            minLength: minLength(11),
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
        document: {
            required
        }
    },

    methods: {
        check(event) {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$emit("input", true);
            }
        },
        phoneParse(value) {
            this.phone = value
                .replace(/[^\d]/g, "")
                .replace(
                    /^(7)?(\d{0,10})/,
                    (_, p1, p2) => (p2 && "7" + p2) || p1 || ""
                )
                .slice(0, 11);
        },
    },
};
</script>


<style scoped lang="sass">
$gap: 30px
.registration-form
    margin: auto
    max-width: 570px
    min-width: 320px
    display: grid
    grid-gap: $gap
    padding: $gap

    fieldset
        display: flex
        flex-direction: column
        padding: $gap
        border: 1px solid #dadce0
        border-radius: 8px
        padding: $gap
    .submit-container
        justify-content: flex-end
        align-items: flex-end
        button
            width: 200px
            height: 50px
            border-radius: 4px
            border: none
            color: white
            background-color: gray
</style>
