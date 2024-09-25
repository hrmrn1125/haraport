<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb6()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top6">フロントエンドカリキュラム(着手中)</h1>
      <div class="closeBtnWrap" @click="backWeb6()">
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
        フロントエンドカリキュラムを社内外向けにパッケージ化しようとしています。
        <br><br>
        現在社内でbacklogを活用し教育実施していますが、Wikiが多くなってくると見づらい状況です。<br>
        そのため読みやすさを重視したデザイン・内容にしていく予定です。
        <br><br>
        既にデザインカリキュラムをパッケージ化していますが、そちらがポップテイストなので<br>
        フロントエンドは少し堅めに、Wikiとしての色あいを濃くしていきたいと思います。
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://hrmrn1125.github.io/frontend-curriculum/convi-frontend/dist/" target="_blank" rel="noopener noreferrer">
        https://hrmrn1125.github.io/frontend-curriculum/convi-frontend/dist/
      </a>
      <div class="workFlex">
        <img class="workImg-1" src="../assets/works/front-1.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb6()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb6',
  methods: {
    backWeb6() {
      this.$emit("delete-Web6", false);
      document.getElementById('workDetail-top6').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>

<style>
.workImg-1 {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: 50% 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>