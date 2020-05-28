<template>
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">

                <div class="modal-body">

                        <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Signup</a>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
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
                                    <button class="btn btn-primary" :disabled="email == ''">Login</button>
                                </div>
                            </form>

                        </div>
                            <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                                <form @submit.prevent="signup">
                                    <alert v-if="error" :message="error" />
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
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginSignUpModal',

    data () {
        return {
            name: '',
            email: '',
            password: ''
        }
    },

}
</script>