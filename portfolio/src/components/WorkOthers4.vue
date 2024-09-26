<template>
<div class="workModal">
  <div class="backShadow" @click.self="backOthers4()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="othersDetail-top4">So i Source広告用画像・SNS投稿</h1>
      <div class="closeBtnWrap" @click="backOthers4()">
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
        現在は「デザメモ」という名称に変更になりましたが、その前身として「So i Source(ソーアイソース)」<br>
        というデザイン・フロントエンドカリキュラムの販売を行っておりました。<br>
        その際に旧TwitterやInstagram投稿による販促を行っておりました。<br>
        <br><br>
        内容としては、プログラミング初学者へお役立ち知識を発信するというものでした。<br>
        「So i Source」という名称にちなんで、醤油イメージのキャラクターを制作し、投稿に用いました。<br>
        カリキュラム自体もSNS投稿内容に関しても、仕事で忙しいであろうユーザーにはゆるっと楽しんでもらいたい<br>
        という気持ちがあったため、キャラクターは手描きにし、口調や表情ものんびりさせていました。
        <br><br>
        Twitterの投稿はよりポップに、Instagramの投稿はよりオシャレさを持った雰囲気にしていました。<br>
      </a>
    </div>
    <div class="workWrap">
      <a class="outLink" href="https://www.instagram.com/soisource_programming?igsh=bHV6OHFqMXA2dnBz" target="_blank" rel="noopener noreferrer">
        https://www.instagram.com/soisource_programming?igsh=bHV6OHFqMXA2dnBz
      </a>
      <div class="workFlex m-12px">
        <img class="workImg-4" src="../assets/works/sis-1.png" />
        <img class="workImg-4" src="../assets/works/sis-2.png" />
        <img class="workImg-4" src="../assets/works/sis-3.png" />
        <img class="workImg-4" src="../assets/works/sis-4.png" />
      </div>
      <div class="workFlex m-12px">
        <img class="workImg-4" src="../assets/works/sis-5.png" />
        <img class="workImg-4" src="../assets/works/sis-6.png" />
        <img class="workImg-4" src="../assets/works/sis-7.png" />
        <img class="workImg-4" src="../assets/works/sis-8.png" />
      </div>
      <div class="workFlex m-12px">
        <img class="workImg-2-2" src="../assets/works/sis-10.png" />
        <img class="workImg-2-2" src="../assets/works/sis-11.png" />
      </div>
      <div class="workFlex">
        <img class="workImg-2-2" src="../assets/works/sis-12.png" />
        <img class="workImg-2-2" src="../assets/works/sis-13.png" />
      </div>
    </div>
    <button class="GoBtn" @click="backOthers4()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkOthers4',
  methods: {
    backOthers4() {
      this.$emit("delete-Others4", false);
      document.getElementById('othersDetail-top4').scrollIntoView({
        behavior: 'instant',
        block: 'start'
      });
    }
  }
}
</script>