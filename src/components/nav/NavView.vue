<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/store/index.js";
const store = useCounterStore();
const navList = ref(store.navList);
</script>
<template>
  <div class="navbar">
    <ul class="navbar-ul" v-for="value of navList" :key="value.path">
      <li>
        <RouterLink :to="value.path">{{ value.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<style></style>
