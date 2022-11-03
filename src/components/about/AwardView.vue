<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
const awardList = ref([
  {
    id: 1,
    src: "w02.jpg",
    alt: "1",
    title: "德國  AWARD",
  },
  {
    id: 2,
    src: "02.jpg",
    alt: "2",
    title: "德國  AWARD",
  },
  {
    id: 3,
    src: "1.png",
    alt: "3",
    title: "韓國  AWARD",
  },
  {
    id: 4,
    src: "01.jpg",
    alt: "1",
    title: "德國  AWARD",
  },
  {
    id: 5,
    src: "02.jpg",
    alt: "2",
    title: "德國  AWARD",
  },
  {
    id: 6,
    src: "1.png",
    alt: "3",
    title: "韓國  AWARD",
  },
  {
    id: 7,
    src: "01.jpg",
    alt: "1",
    title: "德國  AWARD",
  },
  {
    id: 8,
    src: "02.jpg",
    alt: "2",
    title: "德國  AWARD",
  },
  {
    id: 9,
    src: "1.png",
    alt: "3",
    title: "韓國  AWARD",
  },
  {
    id: 10,
    src: "1.png",
    alt: "3",
    title: "韓國  AWARD",
  },
  {
    id: 11,
    src: "1.png",
    alt: "3",
    title: "韓國  AWARD",
  },
  {
    id: 12,
    src: "1.png",
    alt: "3",
    title: "韓國  AWARD",
  },
]);
// 一頁顯示幾個 假設為６
const perPage = ref(6);
//總共有多少個資料 １２
const totalData = ref(awardList.value.length);

//頁數是由多少個資料除以一頁顯示幾個生成 取天花板 共有幾頁 １２/6 共有兩頁
const totalPage = computed(() => {
  return totalData.value / perPage.value;
});
//想辦法吐出幾個夜 １2

// 每頁的資料 想法是由 1-6 6-12
</script>

<template>
  <section id="award">
    <div id="award-inner">
      <div>
        <div class="award_txt">
          <span>Award</span><br />
          <span>2021</span>
          <span>{{ totalPage }}</span>
        </div>
      </div>
      <!-- <div class="award-contain">
        <div class="award-f">
          <a class="award-f-c">
            <img class="award-f-im" src="@/assets/front/img/w03.jpg" alt="" />
          </a>
          <a class="award-f-c">
            <img class="award-f-im" src="@/assets/front/img/w07.jpg" alt="" />
          </a>
          <a class="award-f-c">
            <img class="award-f-im" src="@/assets/front/img/w04.jpg" alt="" />
          </a>
        </div>
        <div class="award-f-t">
          <a class="award-f-txt"> 德國 AWARD </a>
          <a class="award-f-txt"> </a>
          <a class="award-f-txt"> 英國 LICC 建築榮譽獎 </a>
        </div>
        <div class="award-f">
          <a class="award-f-c">
            <img class="award-f-im" src="@/assets/front/img/w02.jpg" alt="" />
          </a>
          <a class="award-f-c">
            <img class="award-f-im" src="@/assets/front/img/w06.jpg" alt="" />
          </a>
          <a class="award-f-c">
            <img class="award-f-im" src="@/assets/front/img/w05.jpg" alt="" />
          </a>
        </div>
        <div class="award-f-t">
          <a class="award-f-txt"> 韓國 K DESIGN AWARD 大獎 </a>
          <a class="award-f-txt"> 台灣 TID Awards<br />居住空間類 大獎 </a>
          <a class="award-f-txt"> 新加坡 SIDA 大獎 </a>
        </div>
      </div> -->
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div
          v-for="value of awardList"
          :key="value.id"
          class="flex border-solid border-sky-500 flex-col"
        >
          <div class="imgc">
            <img
              class="imgc"
              src="@/assets/front/img/w02.jpg"
              :alt="value.alt"
            />
          </div>
          <span class="block text-center"></span>
        </div>
      </div>
      <div class="page-btn">
        <a href="#" class="previous">&#8249;</a>
        <a href="#" class="next">&#8250;</a>
      </div>
    </div>
  </section>
</template>

<style></style>
