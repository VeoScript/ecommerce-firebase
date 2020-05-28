<template>
    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
        <h5 class="text-center">Login Please</h5>

        <alert :message="error" v-if="error"/>

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
                <button 
                    v-if="!loading"
                    class="btn btn-primary" 
                    @click="login">
                    Login
                </button>
                <button 
                    v-else
                    type="button" 
                    class="btn btn-primary" 
                    disabled>
                    <i class="fa fa-spinner mr-1 ml-2"></i> Loading...
                </button>
            </div>
        </form>
    </div>
</template>

<script>

import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

import { fb } from '@/firebase'
import $ from 'jquery'

export default {
    name: 'FormLogin',

    data () {
        return {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    },

    components: {
        Alert: () => import('@/components/Alert')
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
            this.$v.$touch()
            if (!this.$v.$invalid) {

                this. loading = true
                const { email, password } = this.$data

                fb.auth().signInWithEmailAndPassword(email, password)
                    .then(() => {          
                        $('#login').modal('hide')
                        this.loading = false
                        this.email = ''
                        this.password = ''
                        this.$v.$reset()
                        this.$router.push('/admin')
                    })
                    .catch(error => {
                        this.loading = false
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        if (errorCode) {
                            this.error = errorCode
                        } else if (errorMessage) {
                            this.error = errorMessage
                        } else {
                            this.error = error
                        }
                    })
            }
        }
    }
}
</script>

<style scoped>

@keyframes spinner {
  to { transform: rotate(360deg); }
}

.fa-spinner {
 animation: spinner 1s linear infinite !important;
}

</style>