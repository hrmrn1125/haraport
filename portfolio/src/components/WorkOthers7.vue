<template>
<div class="workModal">
  <div class="backShadow" @click.self="backOthers7()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="othersDetail-top7">ネット銀行のバナー</h1>
      <div class="closeBtnWrap" @click="backOthers7()">
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
        ネット銀行案件にて、手が空いたタイミングで簡単なバナーを制作させていただきました。<br>
        文字のジャンプ率と、補色を用いて見やすくするといった点が意識した点です。
      </a>
    </div>
    <div class="workWrap">
      <div class="workFlex m-12px">
        <img class="workImg-1" src="../assets/works/banner-bank.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backOthers7()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkOthers7',
  methods: {
    backOthers7() {
      this.$emit("delete-Others7", false);
      document.getElementById('othersDetail-top7').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>