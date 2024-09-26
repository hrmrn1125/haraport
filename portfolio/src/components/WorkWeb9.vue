<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb9()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top9">建設会社調達サイト</h1>
      <div class="closeBtnWrap" @click="backWeb9()">
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
        古くなっており見づらい調達サイトを、見やすくリニューアルしました。<br>
        これにより協力会社との連携を図りやすくする目的もあるとのことでした。<br>
        参考にできるようなサイトが無かった点が少し大変でした。<br>
        かっちりしたシンプルなサイトにも合う、少し遊び心のあるあしらいを色々と考える機会となりました。
        <br><br>
        ※実ページ開示が難しいため自作したデザインのみ提示します。
      </a>
    </div>
    <div class="workWrap">
      <div class="workFlex">
        <img class="workImg-3" src="../assets/works/kensetsu-1.png" />
        <img class="workImg-3" src="../assets/works/kensetsu-2.png" />
        <img class="workImg-3-3" src="../assets/works/kensetsu-3.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb9()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb9',
  methods: {
    backWeb9() {
      this.$emit("delete-Web9", false);
      document.getElementById('workDetail-top9').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>

<style>
.workImg-3 {
  width: calc(39% - 3px);
  height: auto;
  object-fit: contain;
  object-position: 50% 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

.workImg-3-3 {
  width: calc(22% - 3px);
  height: auto;
  object-fit: contain;
  object-position: 50% 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>