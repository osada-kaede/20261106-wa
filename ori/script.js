Vue.createApp({
  // データの定義
  data() {
    return {
      height: 4.0,
      weight: 400, 
      
      // BMIの判定基準とアドバイス
      standards: [
        {
          min: 0,
          max: 2.5,
          range: "2.5kg未満",
          result: "子猫 / 超小型",
          advice: "小柄な猫ちゃん、または成長期の子猫です。子猫の場合は高カロリーなキトン用フードをこまめに与えましょう。"
        },
        {
          min: 2.5,
          max: 4.5,
          range: "2.5kg以上4.5kg未満",
          result: "標準体型（小型〜中型）",
          advice: "一般的な成猫の標準的な体重範囲です。1日の給餌量を朝晩など2〜3回に分けて与えてください。"
        },
        {
          min: 4.5,
          max: 6.5,
          range: "4.5kg以上6.5kg未満",
          result: "やや大型 / ポッチャリ",
          advice: "大型種（メインクーン等）でない場合はやや太り気味の可能性があります。肋骨が触れるか確認してみましょう。"
        },
        {
          min: 6.5,
          max: 8.5,
          range: "6.5kg以上8.5kg未満",
          result: "大型種 / 体重管理が必要",
          advice: "骨格に対して体重が重い場合は、ダイエット用フードへの切り替えや運動（おもちゃ遊び）を増やしましょう。"
        },
        {
          min: 8.5,
          max: Infinity,
          range: "8.5kg以上",
          result: "超大型種 / 肥満傾向",
          advice: "適正体重を超えている場合は関節への負担が懸念されます。一度獣医師さんに適正量の相談をすることをおすすめします。"
        }
      ]
    };
  },

  // 算出プロパティ
  computed: {
    // 身長をメートルに変換
    targetCalorie() {
      return this.height * 50;
    },

    // BMIを計算
    bmi() {
      if (this.height <= 0 || this.weight <= 0) return 0;
      return (this.targetCalorie / this.weight) * 100;
    },

    // 小数点第三位以下を切り捨て
    formattedBmi() {
      if (this.bmi === 0) return "0 g";
      return Math.round(this.bmi) + " g";
    },

    // BMIに該当する判定基準を取得
    currentStandard() {
      return this.standards.find(item =>
        this.height >= item.min && this.height < item.max
      );
    },

    // 判定結果を取得
    result() {
      return this.currentStandard?.result || "計算できません";
    },

    // 該当するアドバイスを取得
    advice() {
      return this.currentStandard?.advice || "体重とフードのカロリーを正しく入力してください。";
    }
  }
}).mount("#app");