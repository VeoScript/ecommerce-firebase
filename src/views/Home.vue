<template>
  <div class="home">
     <nav-bar /> <!-- Navbar component -->
     <hero /> <!-- Hero component -->
  </div>
</template>

<script>

export default {
  name: 'Home',

  components: {
    NavBar: () => import('@/components/NavBar'),
    Hero: () => import('@/components/Hero')
  }
};
</script>
