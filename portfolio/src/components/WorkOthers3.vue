<template>
<div class="workModal">
  <div class="backShadow" @click.self="backOthers3()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="othersDetail-top3">デザメモ広告用バナー・画像</h1>
      <div class="closeBtnWrap" @click="backOthers3()">
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
        「デザメモ」は、デザインカリキュラムを社内外向けにパッケージ化したものです。
        <br><br>
        バナーや広告画像では特に文字のジャンプ率を意識し、強調したいところがすぐに分かるデザインにしました。<br>
        デザイン全体はサービスの仕様やLPと合わせにいき、ポップさを意識しました。
        <br><br>
        流入を増やすためにデザイン体験会も実施しており、まだ数名ではありますが、体験会に参加いただいた<br>
        方で入社いただいたり、デザメモに入会いただいた方もいらっしゃいます。
        <br><br>
        またXとInstagramでの広告運用も行っております。
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://x.com/dezamemo?s=21&t=bM9lhoQf3flX7PogsD3XoQ" target="_blank" rel="noopener noreferrer">
        https://x.com/dezamemo?s=21&t=bM9lhoQf3flX7PogsD3XoQ
      </a>
      <div class="workFlex m-12px">
        <img class="workImg-1" src="../assets/works/dezamemo-taiken-1.png" />
      </div>
      <div class="workFlex m-12px">
        <img class="workImg-1" src="../assets/works/dezamemo-banner-1.png" />
      </div>
      <div class="workFlex m-12px">
        <img class="workImg-1" src="../assets/works/dezamemo-banner-2.png" />
      </div>
      <div class="workFlex">
        <img class="workImg-1" src="../assets/works/dezamemo-banner-3.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backOthers3()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkOthers3',
  methods: {
    backOthers3() {
      this.$emit("delete-Others3", false);
      document.getElementById('othersDetail-top3').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>