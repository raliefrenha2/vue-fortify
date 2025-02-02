import axios from "@/plugins/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: null,
      errors: {},
    };
  },
  actions: {
    async authenticate(formData) {
      await axios
        .post("/auth/login", formData)
        .then(() => {
          this.router.push({ name: "home" });
        })
        .catch((e) => {
          this.errors = e.response.data.errors;
        });
    },
  },
});
