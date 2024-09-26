<template>
<div class="workModal">
  <div class="backShadow" @click.self="backApp2()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="appDetail-top2">FlowTimer</h1>
      <div class="closeBtnWrap" @click="backApp2()">
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
        同僚のバックエンドを行っている者と2人で個人開発したAndroidアプリです。<br>
        海外ではタイマーアプリを使うことが比較的多いということを知り、着想を得ました。
        <br><br>
        シンプルなタイマーアプリですが音のオンオフが簡単にできたり、時間設定方法が直感的であったり、<br>
        作業に集中して時間を超過したことが見やすく達成感を得やすくなっていたりと工夫しています。<br>
        ユーザーに達成感をさらに得てもらうために、リリース後にスタンプ機能を追加しました。<br>
        スタンプカードのデザインを選べることや、スタンプが全て貯まったら自分で設定したご褒美を<br>
        獲得できる(自己管理サポート)といった、少しのお楽しみ要素を搭載できました。
        <br><br>
        本アプリはJavaを用いて作っております。<br>
        同僚が企画と簡単な要件定義をし、私がそれをデザインに落とし込みながらブラッシュアップ<br>
        (この機能は要らない/足した方が良い、ユーザーから見て違和感ある、など)をしました。
        <br><br>
        集中、生産性向上、シンプルでスッキリといったキーワードから青や白を用いています。<br>
        また線やボタンをできるだけ減らしたり、ニューモーフィズムを採り入れたりしました。
        <br><br>
        ※一部デザインのみ掲載。デザインや仕様は変更となっている場合があります。
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://play.google.com/store/apps/details?id=com.sghh.flowtimer" target="_blank" rel="noopener noreferrer">
        https://play.google.com/store/apps/details?id=com.sghh.flowtimer
      </a>
      <div class="workFlex">
        <img class="workImg-4" src="../assets/works/timer-app-1.png" />
        <img class="workImg-4" src="../assets/works/timer-app-2.png" />
        <img class="workImg-4" src="../assets/works/timer-app-3.png" />
        <img class="workImg-4" src="../assets/works/timer-app-4.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backApp2()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkApp2',
  methods: {
    backApp2() {
      this.$emit("delete-App2", false);
      document.getElementById('appDetail-top2').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>