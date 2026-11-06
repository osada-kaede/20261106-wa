Vue.createApp({
  // データの定義
  data() {
    return {
      height: 170,
      weight: 65,
      // BMIの判定基準とアドバイス
      standards: [
        {
  min: 0,
  max: 18.5,
  range: "18.5未満",
  result: "低体重",
  advice: "バランスのよい食事を心がけ、適切な体重管理を意識しましょう。"
},
{
  min: 18.5,
  max: 25,
  range: "18.5以上25未満",
  result: "普通体重",
  advice: "現在の生活習慣を維持し、適度な運動を心がけましょう。"
},
{
  min: 25,
  max: 30,
  range: "25以上30未満",
  result: "肥満（1度）",
  advice: "食事の量や内容を見直し、日常的に体を動かすことを意識しましょう。"
},
{
  min: 30,
  max: 35,
  range: "30以上35未満",
  result: "肥満（2度）",
  advice: "食生活や運動習慣を見直し、必要に応じて専門家に相談しましょう。"
},
{
  min: 35,
  max: 40,
  range: "35以上40未満",
  result: "肥満（3度）",
  advice: "健康状態を確認するため、医療機関への相談を検討しましょう。"
},
{
  min: 40,
  max: Infinity,
  range: "40以上",
  result: "肥満（4度）",
  advice: "健康管理について医療機関に相談しましょう。"
}
      ]
    };
  },

  // 算出プロパティ
  computed: {
    // 身長をメートルに変換
    heightInMeter() {
      return this.height / 100;
    },

    // BMIを計算
    bmi() {
      if (this.height <= 0 || this.weight <= 0) return 0;
      return this.weight / (this.heightInMeter ** 2);
    },

    // 小数点第三位以下を切り捨て
    formattedBmi() {
      return (Math.floor(this.bmi * 100) / 100).toFixed(2);
    },

    // BMIに該当する判定基準を取得
    currentStandard() {
      return this.standards.find(item =>
        this.bmi >= item.min && this.bmi < item.max
      );
    },

    // 判定結果を取得
    result() {
      return this.currentStandard?.result || "計算できません";
    },

    // 該当するアドバイスを取得
    advice() {
      return this.currentStandard?.advice || "身長と体重を正しく入力してください。";
    }
  }
}).mount("#app");