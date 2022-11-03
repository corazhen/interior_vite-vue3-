import { reactive } from "vue";
import { defineStore } from "pinia";
export const useCounterStore = defineStore("index", () => {
  const navList = reactive(
    [
      {
        name: "",
        path: "/",
      },
      {
        name: "about",
        path: "/about",
      },
      {
        name: "contact",
        path: "/contact",
      },
    ]
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
    // }
  );
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
