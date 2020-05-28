<template>
    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
        <h5 class="text-center">Login Please</h5>
        <form @submit.prevent="login">
            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password">
            </div>

            <div class="form-group">
                <button class="btn btn-primary" @click="login">Login</button>
            </div>
        </form>
    </div>
</template>

<script>

import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'FormLogin',

    data () {
        return {
            email: '',
            password: ''
        }
    },

    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(8)
        }
    },

    methods: {
        login() {
            alert('Login')
        }
    }
}
</script>