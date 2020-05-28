<template>
    <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
        <form @submit.prevent="signup">
            <div class="form-group">
                <label for="name">Your name</label>
                <input type="text" v-model="name" class="form-control" placeholder="Your nice name">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email"  v-model="email" class="form-control" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="signup">Signup</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormSignUp',

    data () {
        return {
            name: '',
            email: '',
            password: ''
        }
    },

    methods: {
        signup () {
            alert('Sign Up')
        }
    }
}
</script>