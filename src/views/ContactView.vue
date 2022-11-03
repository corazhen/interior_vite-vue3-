<script setup>
import { ref, reactive, onMounted, computed } from "vue";
// onMounted
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
// import * as yup from "yup";
import { required, email } from "@vee-validate/rules";
// const validateEmail = yup.string().required().email();

const checkList = ref([
  {
    id: 1,
    name: "住宅",
  },
  {
    id: 2,
    name: "辦公場所",
  },
  {
    id: 3,
    name: "舊屋翻新",
  },
  {
    id: 4,
    name: "商業空間",
  },
]);
const formList = ref([
  {
    id: "user",
    label: "user",
    name: "user",
    type: "text",
    placeholder: "請輸入使用者姓名",
    value: "",
  },
  {
    id: "phone",
    label: "phone",
    name: "phone",
    type: "number",
    placeholder: "請輸入使用者電話",
    value: "",
  },
  {
    id: "email",
    label: "email",
    name: "email",
    type: "text",
    placeholder: "請輸入使用者信箱",
    value: "",
  },
]);
const form = reactive({});
// let form = reactive({ name: "", phone: "", email: "" });
let radioForm = reactive({ subject: "" });
// let copyRadio = reactive({ ...radioForm });
// let completeFrom = reactive([...radioForm, ...formList]);
// onMounted(() => {

// });
const scoreVal = computed(() => {
  return form;
});
onMounted(() => {
  formList.value.forEach((item) => {
    var a = [];
    var b = item.length;

    for (var i = 0; i < b; i++) {
      a.push("");
    }

    this.score.push(a);
  });
});
defineRule("required", required);
defineRule("email", email);

const onSubmit = () => {
  alert("驗證通過");
  // copyRadio;
  console.log(radioForm);
  console.log(formList);

  //   console.log(form);
};
</script>

<template>
  <section id="contactus">
    <div id="contactus-inner">
      <div class="contus-form">
        <h1>{{ scoreVal }}</h1>
        <Form action="" @submit="onSubmit">
          <!-- 單選 -->
          <Field
            v-for="value of checkList"
            :key="value.id"
            v-slot="{ field }"
            name="subject"
            type="radio"
            :value="value.name"
            class="p-5"
            :rules="{ required }"
          >
            <label :for="value.name">
              <input
                type="radio"
                name="subject"
                v-bind="field"
                :value="value.name"
                v-model="radioForm.subject"
              />
              {{ value.name }}
            </label>
          </Field>
          <ErrorMessage name="subject" />
          <!-- 輸入匡 -->
          <Field
            v-for="value of formList"
            :key="value.id"
            v-slot="{ field }"
            :type="value.type"
            :name="value.name"
            :rules="{ required }"
          >
            <div class="p-5">
              <label :for="value.name">
                {{ value.name }}
                <input
                  :type="value.type"
                  :name="value.name"
                  v-bind="field"
                  :value="value.value"
                  v-model.trim="value.value"
                  :placeholder="value.placeholder"
                  class="text-zinc-900 p-1 text-lg"
                />
              </label>
            </div>

            <ErrorMessage :name="value.name" />
          </Field>

          <button class="block p-5">提交</button>
          <!-- <label for="name">姓名 Name*</label> -->
          <!-- <input
              type="text"
              class="form-control"
              name="user"
              id="user"
              value=""
            />
            <i class="fas fa-user"></i>
          </div> -->
          <!-- <div class="form-group">
            <label for="Phone">聯絡電話 Phone Number*</label><br />
            <input
              type="text"
              class="form-control"
              name="person"
              id="Phone"
              value=""
            />
            <i class="fas fa-phone-alt"></i>
          </div>
          <div class="form-group">
            <label for="Addr">地址 Address*</label>
            <input
              type="text"
              class="form-control"
              name="person"
              id="address"
              value=""
            />
            <i class="fas fa-map-marked-alt"></i>
          </div>
          <div class="form-group">
            <label for="Email">電子信箱 Email*</label><br />
            <input
              type="text"
              class="form-control"
              name="person"
              id="Email"
              value=""
            />
            <i class="fas fa-envelope-open"></i>
          </div>
          <div class="form-group">
            <label for="message">訊息 Message*</label><br />
            <textarea
              class="form-control"
              id="message"
              name="message"
              placeholder=""
            ></textarea>
            <i class="fas fa-pen"></i>
          </div> -->
        </Form>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<style></style>
