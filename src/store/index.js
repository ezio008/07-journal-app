import journal from "@/modules/daybook/store/journal";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    journal: journal,
  },
});

export default store;
