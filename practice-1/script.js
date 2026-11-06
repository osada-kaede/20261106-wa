Vue.createApp({
  data() {
    return {
      price: 1000,
      taxRate: 10
    };
  },
  computed: {
    totalPrice() {
      return this.price * (1 + this.taxRate / 100);
    }
  }
}).mount("#app")