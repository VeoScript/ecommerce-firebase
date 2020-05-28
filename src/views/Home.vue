<template>
  <div class="home">
     <nav-bar /> <!-- Navbar component -->
     <hero /> <!-- Hero component -->
     <login-sign-up-modal /> <!--  -->
  </div>
</template>

<script>

export default {
  name: 'Home',

  components: {
    NavBar: () => import('@/components/NavBar'),
    Hero: () => import('@/components/Hero'),
    LoginSignUpModal: () => import('@/components/LoginSignUpModal')
  }
};
</script>
