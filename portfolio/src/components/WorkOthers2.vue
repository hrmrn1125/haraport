<template>
<div class="workModal">
  <div class="backShadow" @click.self="backOthers2()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="othersDetail-top2">カボニューレコード関連バナー・画像</h1>
      <div class="closeBtnWrap" @click="backOthers2()">
        <img class="closeBtn" src="../assets/img/close-white.png" />
      </div>
    </div>
    <div class="modalTextTop">
      <a>
        デザイン<br>
      </a>
    </div>
    <div class="modalText">
      <a>
        突然依頼があり、納期が近く、かつデザインにあまりこだわらない(ロゴの視認性さえ担保されていれば良い等)<br>
        といった要件が多かったため、デザインも世界観は合わせるもののタイポグラフィに手をかけすぎないようにしていました。
        <br><br>
        基本ログイン済ユーザーが見るサイト内設置なので、内容が伝わることを重視していました。<br>
        ロゴの雰囲気に合わせたフォントや、エコを意識させる色を用いることが多かったです。
        <br><br>
        何パターンか制作し、選択するという進め方を好まれていたようだったので、そのようにしておりました。
      </a>
    </div>
    <div class="workWrap">
      <div class="workFlex m-12px">
        <img class="workImg-1" src="../assets/works/banner-1.png" />
      </div>
      <div class="workFlex m-12px">
        <img class="workImg-2-2" src="../assets/works/banner-2.png" />
        <img class="workImg-2-2" src="../assets/works/banner-3.png" />
      </div>
      <div class="workFlex">
        <img class="workImg-1" src="../assets/works/banner-4.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backOthers2()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkOthers2',
  methods: {
    backOthers2() {
      this.$emit("delete-Others2", false);
      document.getElementById('othersDetail-top2').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>

<style>
.workImg-2-2 {
  width: calc(50% - 6px);
  height: auto;
  object-fit: contain;
  object-position: 50% 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>