<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/index.js";
const store = useCounterStore();
const navList = ref(store.navList);
</script>
<template>
  <div class="header-hambur">
    <!-- <input id="toggle" type="checkbox"></input>
              <label for="toggle" class="hamburger">
                  <div class="top-bun"></div>
                  <div class="meat"></div>
                  <div class="bottom-bun"></div>
              </label> -->
    <div class="toggle-content">
      <div>
        <div class="toggle-content-l" v-for="value of navList" :key="value">
          <RouterLink :to="value.path">{{ value.name }} </RouterLink>
        </div>
        <!-- <div class="toggle-content-R">
          <a href="../html/prague.html" target="_blank" class="loc_link">
            <span class="loc__icon">
              <i class="fab fa-facebook-square"></i>
            </span>
          </a>
          <a href="" target="_blank" class="loc_link">
            <span class="loc__icon">
              <i class="fab fa-instagram"></i>
            </span>
          </a>
          <a href="" target="_blank" class="loc_link">
            <span class="loc__icon">
              <i class="fas fa-map-marker-alt"></i>
            </span>
          </a>
        </div> -->
        <div class="toggle-content-addr">
          <input
            type="text"
            class="inputMail"
            name="fldEmail"
            maxlength="100"
            placeholder="Mail Address"
          />
          <div class="toggle-content-btn">
            <button
              type="submit"
              class="btnSubmit"
              value="SEND"
              krydebug="1751"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
