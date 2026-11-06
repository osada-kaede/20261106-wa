Vue.createApp({
    data() {
        return {
    	    // 元の商品データを保持する配列
            items: [
                { name: "ノート", price: 200 },
                { name: "ペン", price: 150 },
                { name: "バッグ", price: 3000 }
            ]
        }
    },
    computed: {
    	// 抽出結果を保持する算出プロパティ
    	affordableItems() {
	    	// 価格が1,000円以下の商品を抽出し、新しい配列を返す
            return this.items.filter(item => item.price <= 1000)
        }
    }
}).mount("#app");