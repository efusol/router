<template>
  <main>
    <!-- 여기 다른 컴포넌트들이 보이게 할거 -->
    <RouterView></RouterView>
    <!-- RouterView 컴포넌트들을 렌더링하기위한 내장 컴포넌트 -->
  </main>
</template>

<script setup>
  import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped>

</style>