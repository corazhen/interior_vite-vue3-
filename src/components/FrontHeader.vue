<script setup>
import NavView from "@/components/nav/NavView.vue";
</script>
<template>
  <header class="flex p-5 justify-between">
    <RouterLink to="/" class="header-logo">
      <img
        class="logo"
        target="style"
        src="@/assets/front/img/logo2.svg"
        alt="logo"
      />
      <span> CORA Interior Design </span>
    </RouterLink>
    <NavView />
  </header>
</template>
<style></style>
