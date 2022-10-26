import { ref } from "vue";
import { defineStore } from "pinia";
export const useCounterStore = defineStore("payForm", () => {
  const navList = ref([
    {
      name: "",
      path: "/",
    },
    {
      name: "ABOUT",
      path: "/about",
    },
    // {
    //   name: "PROJECT",
    //   path: "/project",
    // },
    // {
    //   name: "NEWS",
    //   path: "/news",
    // },
    // {
    //   name: "CONTACT",
    //   path: "/contact",
    // },
  ]);
  // const fetchapiData = async () => {
  //   try {
  //     const res = await axios.get("api 路徑");
  //     tdata.value = res.data;
  //   } catch (error) {
  //     // error
  //   }
  // };
  // const updatedtdata = computed(() => (tdata = tdata));

  return { navList };
});
