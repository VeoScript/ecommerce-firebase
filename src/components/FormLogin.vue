<template>
    <div>
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
</template>