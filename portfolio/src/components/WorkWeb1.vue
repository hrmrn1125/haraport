<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb1()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top1">カボニューレコードフェーズ2</h1>
      <div class="closeBtnWrap" @click="backWeb1()">
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
        フェーズ1では以前の上長(クライアント)要望もあり、アプリらしいシンプルなデザインとしておりました。<br>
        上長異動を機にユーザーの声をより強く反映しようという方針となり、ユーザー分析の結果を踏まえ、<br>
        キャラクターをより強調し親しみを持たせ、世界観もそれに合わせていこうということになりました。
        <br><br>
        また、これまで「エコなことを知ってたくさん環境貢献行動していこう」という、<br>
        比較的環境貢献意識の高い層へ向けたコンセプトであったところから、<br>
        「自分にできることから始めて、エコなことをあまりできていないなという罪悪感を軽減させる」<br>
        といったより広範な層に向けたコンセプトへと変えていきました。
        <br><br>
        人員異動による経緯の擦り合わせ等が少し大変でしたが、自分主導で業務の進め方やデザイン・機能案出しを<br>
        行っていくことで円滑に業務を進めることができ、より良いサービスへと変えていけたと思います。
        <br><br>
        ※一部デザインのみ掲載
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://caboneurecord.web.docomo.ne.jp/top.html" target="_blank" rel="noopener noreferrer">
        https://caboneurecord.web.docomo.ne.jp/top.html
      </a>
      <div class="workFlex">
        <img class="workImg-4" src="../assets/works/caboreco2-1.png" />
        <img class="workImg-4" src="../assets/works/caboreco2-2.png" />
        <img class="workImg-4" src="../assets/works/caboreco2-3.png" />
        <img class="workImg-4" src="../assets/works/caboreco2-4.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb1()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb1',
  methods: {
    backWeb1() {
      this.$emit("delete-Web1", false);
      document.getElementById('workDetail-top1').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>

<style>
h1.modalTitle {
  color: #FFFFFF;
  font-size: 30px;
  margin-left: -6px;
  margin-bottom: 4px;
  padding-top: 0;
}

h1.modalTitle:before {
  background-image: none;
}

.closeBtnWrap {
  position: fixed;
  top: 60px;
  right: 172px;
  margin-top: 8px;
  width: 28px;
  height: 28px;
}

.closeBtn {
  width: 28px;
  height: 28px;
}

.workModal {
  width: 100vw;
  height: 100vh;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
}

.backShadow {
  z-index: 6;
  height: 100vh;
  width: 100vw;
  backdrop-filter: grayscale(60%) blur(8px);
  -webkit-backdrop-filter: grayscale(60%) blur(8px);
  background: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
}

.workDetail {
  position: relative;
  z-index: 7;
  width: calc(100% - 344px);
  height: calc(100vh - 120px);
  text-align: left;
  margin: 60px 140px;
  padding: 0 32px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.modalTextTop {
  margin-bottom: 28px;
}

.modalTextTop a {
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.modalText {
  margin-bottom: 28px;
}

.modalText a {
  color: white;
  font-size: 14px;
}

.outLink {
  display: inline-block;
  color: white;
  font-size: 16px;
  margin-bottom: 8px;
}

.workWrap {
  width: 100%;
}

.workFlex {
  display: flex;
  justify-content: space-between;
}

.workImg-4 {
  width: calc(25% - 3px);
  height: auto;
  object-fit: contain;
  object-position: 50% 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

@media screen and (max-width:749px) {
  .mobNone {
    display: none;
  }

  .workDetail {
    position: relative;
    z-index: 7;
    width: calc(100% - 64px);
    height: calc(100vh - 82px);
    text-align: left;
    margin: 32px 6px 50px 32px;
    padding: 0 26px 0 0;
  }

  .closeBtnWrap {
    top: 32px;
    right: 32px;
    margin-top: 0;
    z-index: 8;
  }

  .closeBtn {
    z-index: 8;
  }

  h1.modalTitle {
    width: 94%;
    font-size: 24px;
    margin-left: 0;
    padding-top: 24px;
  }

  .modalTextTop {
    margin-left: 4px;
  }

  .modalText {
    margin-left: 4px;
  }
}
</style>
