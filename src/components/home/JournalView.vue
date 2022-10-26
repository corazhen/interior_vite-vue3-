<script setup>
import { reactive } from "vue";

const journalData = reactive([
  {
    id: 1,
    name: "Vol.01 【Toorak River.】",
    detail: "Xitun District, Taichung City,",
    date: "2022",
  },
]);
</script>
<template>
  <section id="journal">
    <div id="journal-inner" class="journal-inner">
      <div class="journal-header">
        <div class="journal_txt">
          <span>Project</span>
        </div>
      </div>
      <div class="journal_cont">
        <!--  -->
        <div v-for="value of journalData" :key="value.id" class="journal_item">
          <!-- <router-link to> -->
          <div class="j-card">
            <a href="">
              <div class="j_thumbnail">
                <img src="@/assets/front/img/Moscow01.jpg" alt="" />
              </div>
            </a>
            <div class="j-card-txt">
              <a class="j-card-txt-name">
                <div>Vol.01 【Toorak River.】</div>
              </a>
              <p>Xitun District, Taichung City,</p>
              <hr />
            </div>
            <div class="j-card-bot">
              <a class="j-bot-a" href="">
                <div>read more</div>
              </a>
              <div>
                <a class="j-bot-smal"> </a>
                <a> Information </a>
                <span>|</span>
                2021.7 up
              </div>
            </div>
          </div>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </section>
</template>
<style></style>
