Vue.createApp({
  data() {
    return {
      text: ""
    };
  },
  computed: {
    characterCount() {
      return this.text.length;
    }
  },
  methods: {
    clearText() {
      this.text = "";
    }
  }
}).mount("#app");