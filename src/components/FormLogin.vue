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
                    :class="{ 'is-invalid' : $v.email.$error, 'is-valid' : !$v.email.$invalid }"
                >
                <div class="invalid-feedback feedback">
                    <span v-if="!$v.email.required">Email is required</span>
                    <span v-if="!$v.email.email">Email is invalid.</span>
                </div>
            </div>
            <div class="form-group">
                <label>Password</label>
                <div class="input-group">
                     <input 
                        type="password" 
                        class="form-control" 
                        v-model.trim="$v.password.$model"
                        :class="{ 'is-invalid' : $v.password.$error, 'is-valid' : !$v.password.$invalid }"
                    >
                    <div class="input-group-append" @click="toggleShowPassword" style="cursor: pointer;">
                        <i v-if="!showpassword" class="input-group-text">
                            <i class="fa fa-eye-slash"></i>
                        </i>
                        <i v-else class="input-group-text">
                            <i class="fa fa-eye"></i>
                        </i>
                    </div>
                    <div class="invalid-feedback feedback">
                        <span v-if="!$v.password.required">Password is required</span>
                    </div>
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
            loading: false,
            showpassword: false
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
        },
        toggleShowPassword() {
            let show = document.getElementById('password')
            if(this.showpassword == false) {
                this.showpassword = true
                show.type = 'text'
            } else {
                this.showpassword = false
                show.type = 'password'
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