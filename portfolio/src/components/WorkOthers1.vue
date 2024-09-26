<template>
<div class="workModal">
  <div class="backShadow" @click.self="backOthers1()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="othersDetail-top1">doda広告用バナー・画像</h1>
      <div class="closeBtnWrap" @click="backOthers1()">
        <img class="closeBtn" src="../assets/img/close-white.png" />
      </div>
    </div>
    <div class="modalTextTop">
      <a>
        デザイン/ライティング<br>
      </a>
    </div>
    <div class="modalText">
      <a>
        dodaのピックアップページに載せる縦長画像とバナーを制作しました。<br>
        にこやかな人間が写っているとバナー等のクリック・閲覧率が高まるので、まずそれを採り入れました。<br>
        また社長やdoda側の広告担当と打ち合わせをし、入れたい文言を聞いてそれを校正・加工して入れました。
        <br><br>
        何よりも「未経験でも誰でも、自分の想いを形にするモノづくりを始められる」という点が<br>
        同職種の魅力なのでそこを強調しました。<br>
        同社独自の魅力としては独自のカリキュラムがあることなので、それも盛り込んでいます。<br>
        その他訴求点の文章は私が独自に考えたものです。
        <br><br>
        デザインとしては信頼感や若さを示す青をトップに入れました。<br>
        グラデーションと幾何学の組み合わせで、モダンさや学習意欲が湧くのを感じさせるようにしています。
      </a>
    </div>
    <div class="workWrap">
      <div class="workFlex">
        <img class="workImg-3" src="../assets/works/convi-doda-1.png" />
        <img class="workImg-3" src="../assets/works/convi-doda-2.png" />
        <img class="workImg-3-3" src="../assets/works/convi-doda-banner-1.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backOthers1()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkOthers1',
  methods: {
    backOthers1() {
      this.$emit("delete-Others1", false);
      document.getElementById('othersDetail-top1').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>