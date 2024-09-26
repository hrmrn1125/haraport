<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb2()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top2">カボニューレコードフェーズ1</h1>
      <div class="closeBtnWrap" @click="backWeb2()">
        <img class="closeBtn" src="../assets/img/close-white.png" />
      </div>
    </div>
    <div class="modalTextTop">
      <a>
        デザイン/コードレビュー/コーディング/開発/ライティング<br>
      </a>
    </div>
    <div class="modalText">
      <a>
        エコ活動記録Webアプリです。
        <br><br>
        上長(クライアント)要望もあり、アプリらしいシンプルなデザインとしました。<br>
        開発チームとして参画していたため、コーダーのみならずエンジニアとも密に連携を取りながら<br>
        自分主催のUI定例にてデザイン・機能案出しを行いました。
        <br><br>
        アジャイル開発ということで頻繁に仕様変更やクライアント要望が挙がってきて、それに素早く対応していく<br>
        ということを、デザイン観点や開発観点など様々な立場から考えて行っていくのが勉強になりました。<br>
        またユーザー数(現在約40万人)やその動向等が随時共有され確認できるようになっており、<br>
        マーケティング知識もより深まりました。
        <br><br>
        ※一部デザインのみ掲載
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://caboneurecord.web.docomo.ne.jp/top.html" target="_blank" rel="noopener noreferrer">
        https://caboneurecord.web.docomo.ne.jp/top.html
      </a>
      <div class="workFlex">
        <img class="workImg-4" src="../assets/works/caboreco1-1.png" />
        <img class="workImg-4" src="../assets/works/caboreco1-2.png" />
        <img class="workImg-4" src="../assets/works/caboreco1-3.png" />
        <img class="workImg-4" src="../assets/works/caboreco1-4.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb2()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb2',
  methods: {
    backWeb2() {
      this.$emit("delete-Web2", false);
      document.getElementById('workDetail-top2').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>
