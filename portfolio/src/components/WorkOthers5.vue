<template>
<div class="workModal">
  <div class="backShadow" @click.self="backOthers5()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="othersDetail-top5">社内カリキュラム用デザイン</h1>
      <div class="closeBtnWrap" @click="backOthers5()">
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
        社内のフロントエンドカリキュラムのコーディング課題の見本デザインを制作しました。<br>
        ループや配列を学ぶために、繰り返しの要素をできるだけ盛り込んで、かつシンプルなデザインにしました。
      </a>
    </div>
    <div class="workWrap">
      <div class="workFlex m-12px">
        <img class="workImg-2-3" src="../assets/works/webpack-kadai-1.png" />
        <img class="workImg-2-3" src="../assets/works/webpack-kadai-2.png" />
      </div>
      <div class="workFlex">
        <img class="workImg-2" src="../assets/works/responsive-site-PC.png" />
        <img class="workImg-4" src="../assets/works/responsive-site-SP.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backOthers5()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkOthers5',
  methods: {
    backOthers5() {
      this.$emit("delete-Others5", false);
      document.getElementById('othersDetail-top5').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>

<style>
.workImg-2-3 {
  width: calc(50% - 3px);
  height: auto;
  object-fit: contain;
  object-position: 50% 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>