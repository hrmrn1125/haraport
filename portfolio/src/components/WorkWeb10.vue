<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb10()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top10">株式会社CONVICTION/コーポレートサイト</h1>
      <div class="closeBtnWrap" @click="backWeb10()">
        <img class="closeBtn" src="../assets/img/close-white.png" />
      </div>
    </div>
    <div class="modalTextTop">
      <a>
        デザイン監修<br>
      </a>
    </div>
    <div class="modalText">
      <a>
        ボタンやサムネイル画像などの軽い制作は行いましたが、基本はデザインの意見出しを行いました。<br>
        デザイン・コーディングの実作業は、社内の駆け出しの人員に練習として行ってもらいました。
        <br><br>
        これまでもコーポレートサイトは存在しましたが、デザイナーが作ったものではなかったため、<br>
        このリニューアルを行おうという運びとなりました。
        <br><br>
        テイストとしては、既存社員の平均年齢が27歳程度ということもあり、既存社員同様<br>
        若い方の入社を期待して、そのような方にも取っつきやすいライトなテイストにしました。<br>
        ただし安心してクライアントが案件を任せられるイメージとなるよう、多色の使用は避け、<br>
        ポップにしすぎず白を基調とし、青っぽいアクセントカラーを入れて信頼感へつながるようにしています。
        <br><br>
        デザイン性のアピールとして、アニメーションやニューモーフィズムを採り入れています。
        <br><br>
        ※一部デザインのみ掲載
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://www.conviction-inc.com/" target="_blank" rel="noopener noreferrer">
        https://www.conviction-inc.com/
      </a>
      <div class="workFlex">
        <img class="workImg-2" src="../assets/works/convi-1.png" />
        <img class="workImg-4" src="../assets/works/convi-2.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backWeb10()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb10',
  methods: {
    backWeb10() {
      this.$emit("delete-Web10", false);
      document.getElementById('workDetail-top10').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>