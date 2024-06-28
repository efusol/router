<template>
  <div>
    <h2>Home View</h2>
    <img src="../assets/home.jpg" alt=""><br>
    <button>
      <RouterLink to="/about">저에 대해 알고 싶으신가요?</RouterLink>
    </button>
    <button @click="$router.push('/portfolio')">
      제 작품을 구경해보세요
    </button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  button {
    background: lightcyan;
    border: 0;
    &:nth-of-type(2) {
      background: lightpink;
    }
  }
</style>