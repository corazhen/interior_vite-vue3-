<script setup>
import { onMounted, ref } from "vue";
import NavView from "@/components/nav/NavView.vue";
const box = ref(null);
let cora = ref(window.pageYOffset);
const isnormalHeader = ref(true);

function rezieit() {
  cora.value = window.pageYOffset;
  // 508 這個數字是要先偵測輪播的高再扣掉top多少的高度 失敗
  if (cora.value == 0) {
    isnormalHeader.value = true;
  } else {
    isnormalHeader.value = false;
  }
}
onMounted(() => {
  window.addEventListener("scroll", rezieit);
});
</script>
<template>
  <header
    :class="{ normalHeader: isnormalHeader }"
    class="flex p-5 justify-between items-center text-lg tracking-wider header"
    ref="box"
  >
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
<style lang="scss">
$headercolor: rgba(220, 220, 220, 0.98);
@keyframes exampl2 {
  from {
    background-color: $headercolor;
  }
  to {
    background-color: transparent;
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  z-index: 155;
  width: 100%;
  background-color: $headercolor;
  // backdrop-filter: blur(5px);

}
.normalHeader {
  background-color: transparent;
  animation: exampl2 0.3s linear;
}
</style>
