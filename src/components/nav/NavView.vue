<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/index.js";
const store = useCounterStore();
const navList = ref(store.navList);
</script>
<template>
  <div class="navbar">
    <ul class="navbar-ul" v-for="value of navList" :key="value.path">
      <li>
        <router-link :to="value.path">{{ value.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<style></style>
