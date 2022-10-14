import { ref, computed, watch, watchEffect } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("mainStore", () => {
  const token = ref("");
  const config = ref({
    headers: {
      "Authorization": `Bearer ${token.value}`
    }
  });
  const data = ref({
    xRay: [],
    ultrasound: []
  })
  const isAlert = ref({
    'on': false,
    'message': ""
  })

  const getXRay = computed(() => data.value.xRay);
  const isAlertOn = computed(()=>isAlert.value.on)

  const set = (type, value) => {
    switch(type){
      case "token":
        return token.value = value;
      case "xRay":
        return data.value.xRay = value;
      case "ultrasound":
        return data.value.ultrasound = value;
      case "alert":
        isAlert.value.message = value?.message;
        return isAlert.value.on = value?.on;
    }
  }

  watch(token, () => {
    config.value = {
      headers: {
        "Authorization": `Bearer ${token.value}`
      }
    };

    axios.get("https://testdrive.kompletecare.com/api/investigations", config.value)
    .then(res=>{
      set("xRay", res.data?.data[0]?.investigations);
      set("ultrasound", res.data?.data[1]?.investigations)
    })
  });

  return { getXRay, set, config, data, isAlert };
});
