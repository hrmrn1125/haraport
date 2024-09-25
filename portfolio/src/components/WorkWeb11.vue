<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb11()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top11">カイホウ for SPOT/LP</h1>
      <div class="closeBtnWrap" @click="backWeb11()">
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
        福祉事業所と収入を増やしたいタクシードライバーをつなぐ新サービスのLPをご依頼いただきました。<br>
        クライアント側として強調したい文言が多く、トップや見出しをできるだけシンプルにするよう<br>
        調整・説明をするのが少し大変でした。
        <br><br>
        パッと見たときに「タクシードライバー」が対象であることが分かるようにしました。<br>
        また、素材とコンテンツ量が限られていたため、単調にならないよう気をつけて構成・コンテンツ配置をしました。<br>
        コーポレートサイトとのある程度の統一感も持たせ、既存顧客からの拡販も意識しました。
        <br><br>
        ※本番環境はクライアント側で随時デザイン編集している可能性があります。
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://release-kaihoou.com/spot_ride" target="_blank" rel="noopener noreferrer">
        https://release-kaihoou.com/spot_ride
      </a>
      <div class="workFlex">
        <img class="workImg-2" src="../assets/works/kaihou-1.png" />
        <img class="workImg-4" src="../assets/works/kaihou-2.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb11()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb11',
  methods: {
    backWeb11() {
      this.$emit("delete-Web11", false);
      document.getElementById('workDetail-top11').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>