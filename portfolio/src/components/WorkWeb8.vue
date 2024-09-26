<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb8()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top8">社内ポータル/Webアプリ(着手中)</h1>
      <div class="closeBtnWrap" @click="backWeb8()">
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
        社内限で使うWebアプリ(イントラのようなもの)を、次の効果を期待し制作しています。
        <br><br>
        (1) ツールを一箇所にまとめることで、管理が煩雑でなくなる<br>
        (2) 会社と社員の共通アクセスポイントとなり、相互に働きかけがしやすくなる<br>
        (3) 研修(カリキュラム)をより充実させることができ、より実践力のある社員が育つ
        <br><br>
        デザインはお知らせの見やすさと、必要ツールの見つけやすさを重視しています。
        <br><br>
        管理者でログインするとお知らせや資料投稿ができるなど、必要不可欠な機能は既に完成しています。<br>
        カレンダーやeラーニング、デジタル社員証などを実装したいと考えているところです。
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://convi-com.web.app/" target="_blank" rel="noopener noreferrer">
        https://convi-com.web.app/
      </a>
      <div class="workFlex">
        <img class="workImg-2" src="../assets/works/convicom-1.png" />
        <img class="workImg-4" src="../assets/works/convicom-2.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb8()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb8',
  methods: {
    backWeb8() {
      this.$emit("delete-Web8", false);
      document.getElementById('workDetail-top4').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>