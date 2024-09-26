<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb12()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top12">ネット銀行マイページ</h1>
      <div class="closeBtnWrap" @click="backWeb12()">
        <img class="closeBtn" src="../assets/img/close-white.png" />
      </div>
    </div>
    <div class="modalTextTop">
      <a>
        デザイン/コーディング/開発<br>
      </a>
    </div>
    <div class="modalText">
      <a>
        ネット銀行のマイページをVue.jsを用いて開発しました。
        <br><br>
        ほとんど既存ページのデザインや構成を踏襲して、新たにデータを加えページやボタンを足していくという作業でした。<br>
        クライアントへ質問や提案(今までに無いような項目はどう表示しようかなど)をすることもあり、<br>
        その際はExcel上に起票したり、デザインした画面イメージを貼り付けて共有していました。<br>
        また機能を設計書にまとめる作業もExcelで行いました。
        <br><br>
        開発体制としてはUIチームに常時6名程度エンジニアがおり、1名がPMといった体制でした。<br>
        初めての本格的な開発でVue.jsにもまだ熟達していなかったのと、銀行の取引にも精通していなかったため、<br>
        どこにどういった内容のページがあるのかの把握ですら最初は難しかったです。<br>
        終業後も毎日のように徹夜で用語等勉強したりコードの書き方を考えたりしたことで、スキルアップにつながったと思います。
        <br><br>
        ※実ページ開示が難しいため自作したものを提示します。CSSをあてきれておりませんがトップ機能は再現できています。
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://hrmrn1125.github.io/portfolio_bank/my-bank/docs/" target="_blank" rel="noopener noreferrer">
        https://hrmrn1125.github.io/portfolio_bank/my-bank/docs/
      </a>
      <div class="workFlex">
        <img class="workImg-1" src="../assets/works/bank-1.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb12()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb12',
  methods: {
    backWeb12() {
      this.$emit("delete-Web12", false);
      document.getElementById('workDetail-top12').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>