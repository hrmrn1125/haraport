<template>
<div class="workModal">
  <div class="backShadow" @click.self="backOthers6()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="othersDetail-top6">営業・社内資料</h1>
      <div class="closeBtnWrap" @click="backOthers6()">
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
        営業用資料や社内イベント資料の一部を掲載いたします。<br>
        見やすさを担保しつつ、単調になりすぎないようにしていました。<br>
        社内イベントで着るTシャツもデザイン制作しましたので、併せて掲載します。
      </a>
    </div>
    <div class="workWrap">
      <div class="workFlex m-12px">
        <img class="workImg-1" src="../assets/works/eigyo-1.png" />
      </div>
      <div class="workFlex m-12px">
        <img class="workImg-1" src="../assets/works/eigyo-2.png" />
      </div>
      <div class="workFlex m-12px">
        <img class="workImg-1" src="../assets/works/eigyo-3.png" />
      </div>
      <div class="workFlex m-12px">
        <img class="workImg-1" src="../assets/works/eigyo-4.png" />
      </div>
      <div class="workFlex">
        <img class="workImg-1" src="../assets/works/eigyo-5.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backOthers6()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkOthers6',
  methods: {
    backOthers6() {
      this.$emit("delete-Others6", false);
      document.getElementById('othersDetail-top6').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>