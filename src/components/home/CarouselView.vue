<script setup>
import { onMounted, ref } from "vue";
const imgList = ref([
  {
    id: 1,
    src: "01.jpg",
    alt: "1",
  },
  {
    id: 2,
    src: "02.jpg",
    alt: "2",
  },
  {
    id: 3,
    src: "1.png",
    alt: "3",
  },
]);

const isShow = ref(1);
// 手動播放
function add() {
  let tdata = imgList.value.length;
  if (isShow.value === tdata) {
    isShow.value = 1;
  } else if (isShow.value < tdata) {
    isShow.value++;
  }
}
function minus() {
  let tdata = imgList.value.length;
  console.log(`圖片的值${isShow.value}`);
  console.log(tdata);
  if (isShow.value <= 1) {
    isShow.value = tdata;
  } else if (isShow.value < tdata || isShow.value == tdata) {
    isShow.value--;
  }
}
function choseImg(value) {
  console.log(88);
  isShow.value = value;
}
// 自動播放
function autoplaying() {
  setInterval(() => {
    add();
  }, 3 * 1000);
}
//生命週期
onMounted(() => {
  autoplaying();
});
</script>
<template>
  <!-- id="cover" -->
  <!-- <div class="main">
    <div class="main_img-container">
      <div>
        <img class="main_img" src="@/assets/front/img/01.jpg" alt="" />
      </div>
      <div>
        <img class="main_img" src="@/assets/front/img/02.jpg" alt="" />
      </div>
      <div>
        <img class="main_img" src="@/assets/front/img/1.png" alt="" />
      </div>
      <div>
        <img class="main_img" src="@/assets/front/img/01.jpg" alt="" />
      </div>
      <div>
        <img class="main_img" src="@/assets/front/img/02.jpg" alt="" />
      </div>
    </div>
  </div> -->
  <transition name="fade">
    <div class="main">
      <div v-for="value of imgList" :key="value.id" class="imgConatainer">
        <img
          class="imgc"
          v-if="isShow == value.id"
          :src="`src/assets/front/img/${value.src}`"
          :alt="value.alt"
        />
      </div>
    </div>
  </transition>

  <div class="mx-auto flex justify-center">
    <button class="btn" @click="add">addimg</button>
    <button class="btns" @click="minus">minusimg</button>
    <div>
      <button
        v-for="value of imgList"
        :key="value.id"
        @click="choseImg(value.id)"
        class="btnw"
      >
        {{ value.id }}
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 80vh;
  margin: auto;

  .imgConatainer {
    position: absolute;

    .imgc {
      width: 100%;
      height: auto;
    }
  }
}
.btn {
  background-color: chocolate;
  font-size: 2rem;
  padding: 1rem;
  color: white;
}
.btns {
  background-color: black;
  font-size: 2rem;
  padding: 1rem;
  color: white;
}
.btnw {
  background-color: red;
  font-size: 1rem;
  padding: 1rem;
  color: white;
}
</style>
