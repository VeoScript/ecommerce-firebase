<template>
  <div class="home">
     <nav-bar />
  </div>
</template>

<script>

export default {
  name: 'Home',

  components: {
    NavBar: () => import('@/components/NavBar')
  }
};
</script>
