<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb3()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top3">Release株式会社/コーポレートサイト</h1>
      <div class="closeBtnWrap" @click="backWeb3()">
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
        介護現場のDX化を促進する「カイホウ」というサービスを運営する企業様がクライアントでした。
        <br><br>
        クライアントとしては「採用活動時にコーポレートサイトがある方が心象が良い」とのお考えでご依頼いただきました。<br>
        もうすぐ採用を開始したいというタイミングでご依頼いただいたため、スピード感を持ってデザインしました。
        <br><br>
        サービスLPは別途あるため、シンプルに企業理念を提示することと、それでもお問い合わせ機会は確保することを重視しました。<br>
        また、素材とコンテンツ量が限られていたため、コーポレートサイトとしての見応えがあるようにという点と、<br>
        単調にならないようにという点に気をつけて構成・コンテンツ配置をしました。
        <br><br>
        ※本番環境はクライアント側で随時デザイン編集している可能性があります。
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://release-kaihoou.com/" target="_blank" rel="noopener noreferrer">
        https://release-kaihoou.com/
      </a>
      <div class="workFlex">
        <img class="workImg-2" src="../assets/works/Release-1.png" />
        <img class="workImg-4" src="../assets/works/Release-2.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb3()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb3',
  methods: {
    backWeb3() {
      this.$emit("delete-Web3", false);
      document.getElementById('workDetail-top3').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>

<style>
.workImg-2 {
  width: calc(75% - 3px);
  height: auto;
  object-fit: contain;
  object-position: 50% 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>