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
                    
                        <form-login /> <!-- Form Login component -->                        
                    
                        <form-sign-up /> <!-- Form Sign Up component -->

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginSignUpModal',

    components: {
        FormLogin: () => import('./FormLogin'),
        FormSignUp: () => import('./FormSignUp')
    }

}
</script>