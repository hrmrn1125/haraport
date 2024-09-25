<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb5()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top5">デザメモ/LP</h1>
      <div class="closeBtnWrap" @click="backWeb5()">
        <img class="closeBtn" src="../assets/img/close-white.png" />
      </div>
    </div>
    <div class="modalTextTop">
      <a>
        企画/デザイン/コーディング/開発/ライティング<br>
      </a>
    </div>
    <div class="modalText">
      <a>
        「デザメモ」というデザインカリキュラムを社内外向けに制作し、そのLPも制作しました。
        <br><br>
        若者向けに親しみやすさを大事にしたかったことや、勉強に集中できる色ということも<br>
        踏まえて、ベースカラーを黄色にしています。<br>
        その黄色の雰囲気と「デザメモ」という名前から、全体を通してメモや付箋をイメージした<br>
        オブジェクトを散りばめるようにして、ポップにしました。
        <br><br>
        また、LPとして上から読んでいった際のストーリー性を大切にし、ユーザーが重視するであろう<br>
        コンテンツから読み進めていって、最後に購入の後押しをされるように構成しました。
        <br><br>
        公開した際に社内の若手社員から「素敵だなと思いました」等の声を多数いただき、<br>
        思った通りのターゲットに刺さるものにできて良かったなと思いました。
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://www.conviction-inc.com/dezamemo/" target="_blank" rel="noopener noreferrer">
        https://www.conviction-inc.com/dezamemo/
      </a>
      <div class="workFlex">
        <img class="workImg-2" src="../assets/works/dezamemoLP-1.png" />
        <img class="workImg-4" src="../assets/works/dezamemoLP-2.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb5()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb5',
  methods: {
    backWeb5() {
      this.$emit("delete-Web5", false);
      document.getElementById('workDetail-top5').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>