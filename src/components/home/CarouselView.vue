<script setup>
import { onMounted, ref } from "vue";
// import { storeToRefs } from "pinina";
// import { useCounterStore } from "@/stores/carousel.js";
// const store = useCounterStore();
//const {addcount} =store
// 就可以直接寫
// const { counter } = storeToRefs(store);
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
// 決定放出哪張圖片
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
  if (isShow.value <= 1) {
    isShow.value = tdata;
  } else if (isShow.value < tdata || isShow.value == tdata) {
    isShow.value--;
  }
}
function choseImg(value) {
  isShow.value = value;
}
// 自動播放
function autoplaying() {
  setInterval(() => {
    add();
  }, 9 * 1000);
}
// 以下皆失敗 主要是為了
//  圖片的高度
// const potato = ref(null);
// 視窗計算
// let myWindow = ref(null);
// let resized = computed(() => {
//   return myWindow;
// });

// function windowdetec() {
//   window.addEventListener("resize", function () {
//     myWindow.value = window.innerWidth;
//     store.carouselheight = potato.value.scrollHeight;
//   });
// }
//生命週期
onMounted(() => {
  autoplaying();
  // windowdetec();
});

// watch(myWindow, (newValue, oldValue) => {
//   if (newValue !== oldValue) {
//     windowdetec();
//   }
// });
// onBeforeUnmount(() => {
//   windowdetec();
// });
</script>
<template>
  <div class="main" ref="potato">
    <div v-for="value of imgList" :key="value.id" class="imgConatainer">
      <transition-group name="slide" appear tag="span">
        <img
          class="imgc"
          v-if="isShow == value.id"
          :src="`src/assets/front/img/${value.src}`"
          :alt="value.alt"
        />
      </transition-group>
    </div>
  </div>
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
$carouselHeight: 500px;
// 裁減的
// .main {
//   width: 100%;
//   height: auto;
//   height: $carouselHeight;
//   position: relative;
//   margin: auto;
//   overflow: hidden;
//   .imgConatainer {
//     width: 100%;
//     height: 100%;

//     .imgc {
//       position: absolute;
//       width: 100%;
//       height: auto;
//       object-fit: contain;
//       top: 0;
//       right: 0;
//     }
//   }
// }
// 不裁減的 用padding趴數去撐開
.main {
  width: 100%;
  // height: 100%;
  position: relative;
  margin: auto;
  padding-bottom: 50%;
  overflow: hidden;
  // top: 118px;
  z-index: -1;
  .imgConatainer {
    position: absolute;
    width: 100%;
    .imgc {
      width: 100%;
      top: 0;
      left: 0;
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

@keyframes slide-in {
  from {
    transform: translateX(10%);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-10%);
  }
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
  // &:nth-child(1) {
  //   animation: none;
  // }
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  // position: absolute;
}
.slide-move {
  transition: transform 1s;
}
</style>
