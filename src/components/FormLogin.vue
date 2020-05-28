<template>
    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
        <h5 class="text-center">Login Please</h5>
        <form @submit.prevent="login">
            <div class="form-group">
                <label>Email address</label>
                <input 
                    type="email" 
                    v-model.trim="$v.email.$model"
                    class="form-control"
                    placeholder="Email"
                    :class="{ 'is-invalid' : $v.email.$error, 'is-valid' : !$v.email.$invalid }"
                >
                <div class="invalid-feedback feedback">
                    <span v-if="!$v.email.required">Email is required</span>
                    <span v-if="!$v.email.email">Email is invalid.</span>
                </div>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    v-model.trim="$v.password.$model" 
                    class="form-control" 
                    placeholder="Password"
                    :class="{ 'is-invalid' : $v.password.$error, 'is-valid' : !$v.password.$invalid }"
                >
                <div class="invalid-feedback feedback">
                    <span v-if="!$v.password.required">Password is required</span>
                </div>
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
            required
        }
    },

    methods: {
        login() {
            alert('Login')
        }
    }
}
</script>