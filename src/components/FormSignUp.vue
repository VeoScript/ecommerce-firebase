<template>
    <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
        <h5 class="text-center">Signup</h5>
        <alert :message="error" v-if="error"/>
        <form @submit.prevent="signup">
            <div class="form-group">
                <label for="name">Your name</label>
                <input 
                    type="text" 
                    v-model.trim="$v.name.$model"
                    :class="{ 'is-invalid' : $v.name.$error, 'is-valid' : !$v.name.$invalid }"
                    class="form-control" 
                    placeholder="Your nice name"
                >
                <div class="invalid-feedback feedback">
                    <span v-if="!$v.name.required">Name is required</span>
                    <span v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} letters.</span>
                    <span v-if="!$v.name.maxLength">Name must have at most {{ $v.name.$params.maxLength.max }} letters.</span>
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input 
                    type="email"  
                    v-model.trim="$v.email.$model" 
                    :class="{ 'is-invalid' : $v.email.$error, 'is-valid' : !$v.email.$invalid }"
                    class="form-control" 
                    placeholder="Enter email"
                >
                <div class="invalid-feedback feedback">
                    <span v-if="!$v.email.required">Email is required</span>
                    <span v-if="!$v.email.email">Email is invalid.</span>
                </div>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
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
                        <span v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters. </span>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button 
                    v-if="!loading"
                    class="btn btn-primary" 
                    @click="signup">
                    Signup
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
    name: 'FormSignUp',

    data () {
        return {
            name: '',
            email: '',
            password: '',
            error: '',
            showpassword: true,
            loading: false
        }
    },

    components: {
        Alert: () => import('@/components/Alert')
    },

    validations: {
        name: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(25)
        },
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
        signup () {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this. loading = true
                const { name, email, password } = this.$data

                fb.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {          
                        this.loading = false
                        $('#login').modal('hide')
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
                show.type = 'password'
            } else {
                this.showpassword = false
                show.type = 'text'
            }
        },
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