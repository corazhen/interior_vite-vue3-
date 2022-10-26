<script setup>
import { reactive } from "vue";

const navList = reactive([
  {
    name: "",
    path: "/",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "PROJECT",
    path: "/project",
  },
  {
    name: "NEWS",
    path: "/news",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
]);
</script>
<template>
  <header id="header">
    <a href="../html/OP.html" class="header-logo">
      <img
        class="logo"
        target="style"
        src="@/assets/front/img/logo2.svg"
        alt=""
      />
      <span> CORA Interior Design </span>
    </a>
    <div class="navbar">
      <ul class="navbar-ul" v-for="value of navList" :key="value">
        <li>
          <RouterLink :to="value.path">{{ value.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
<style></style>
