<template>
<div class="workModal">
  <div class="backShadow" @click.self="backApp1()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="appDetail-top1">価値観アプリ</h1>
      <div class="closeBtnWrap" @click="backApp1()">
        <img class="closeBtn" src="../assets/img/close-white.png" />
      </div>
    </div>
    <div class="modalTextTop">
      <a>
        企画/デザイン<br>
      </a>
    </div>
    <div class="modalText">
      <a>
        同僚のバックエンドを行っている者と2人で個人開発しているアプリです。<br>
        (現状Webアプリですが、Androidでもリリース予定)<br>
        質問に答えていくとその人の特に重視している価値観が分かり、その価値観とその人のお悩みを掛け合わせて<br>
        最適なお悩み解決策を導き出すというアプリです。<br>
        ChatGPTから着想を得ました。
        <br><br>
        本アプリはJavaとFirebaseを用いて作っております。<br>
        同僚が企画と簡単な要件定義をし、私がそれをデザインに落とし込みながらブラッシュアップ<br>
        (この機能は要らない/足した方が良い、ユーザーから見て違和感ある、など)をしています。
        <br><br>
        思案に耽るようなイメージで緑や紫を用いています。<br>
        まとまらない思考とそれを癒すイメージを持って、シンボルマークや背景のグラデーションを制作しました。<br>
        ユーザーの操作項目が多いので、シンプルさ・分かりやすさも意識しています。
        <br><br>
        ※一部デザインのみ掲載。デザインや仕様は変更となっている場合があります。
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://prompt-21032.web.app/" target="_blank" rel="noopener noreferrer">
        https://prompt-21032.web.app/
      </a>
      <div class="workFlex">
        <img class="workImg-4" src="../assets/works/mob-login-1.png" />
        <img class="workImg-4" src="../assets/works/mob-login-2.png" />
        <img class="workImg-4" src="../assets/works/mob-login-3.png" />
        <img class="workImg-4" src="../assets/works/mob-login-4.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backApp1()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkApp1',
  methods: {
    backApp1() {
      this.$emit("delete-App1", false);
      document.getElementById('appDetail-top1').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>