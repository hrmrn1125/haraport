<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb7()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top7">デザメモ/Webアプリ</h1>
      <div class="closeBtnWrap" @click="backWeb7()">
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
        「デザメモ」は、デザインカリキュラムを社内外向けにパッケージ化したものです。
        <br><br>
        自分の勉強したことや、実務経験で得た知識を誰にでも理解できるように言語化しました。<br>
        デザイン面ではキャラクターを登場させたり、メモを意識したあしらいを採り入れたりして、<br>
        授業を受けている感覚で没入できるビジュアルにしました。
        <br><br>
        デザインもコーディングもライティングもとにかく量が多く(異なる内容で50ページ以上)、<br>
        Vue.jsを利用し動きをつけた部分もあまり通常サイトで使わない動かし方にせざるをえなかったため、<br>
        作業が山積みで中々リリースできなかった点が苦労した点です。
        <br><br>
        セキュリティ面や販促マーケティングなども含め、網羅的に勉強になりました。
        <br><br>
        ※一部デザインのみ掲載
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://design-curri.web.app/" target="_blank" rel="noopener noreferrer">
        https://design-curri.web.app/
      </a>
      <div class="workFlex m-12px">
        <img class="workImg-1" src="../assets/works/dezamemo-1.png" />
      </div>
      <div class="workFlex">
        <img class="workImg-1" src="../assets/works/dezamemo-2.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb7()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb7',
  methods: {
    backWeb7() {
      this.$emit("delete-Web7", false);
      document.getElementById('workDetail-top7').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>

<style>
.workFlex.m-12px {
  margin-bottom: 12px;
}
</style>