<template>
<div class="workModal">
  <div class="backShadow" @click.self="backWeb11()"></div>
  <div class="workDetail">
    <div class="flexBox">
      <h1 class="modalTitle" id="workDetail-top11">ePro/LP</h1>
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
        社内で用いているフロントエンド・バックエンド・デザインのカリキュラムを外販化しようという<br>
        プロジェクトが進み、それに伴ってLPを制作しました。
        <br><br>
        3点訴求法や、ペルソナの悩みごとへの問いかけなどをトップで用いて、<br>
        最初の段階でまず読み進めたくなるようにという点を意識しました。<br>
        <br><br>
        寄り添い型のメンターがいることがカリキュラムの特徴でもあるので、それと連動したような優しい色あいのLPにしました。<br>
        その優しい中でも少しだけ堅めなバージョンと、少しポップなバージョンを用意しました。
        <br><br>
        デザイン完成段階で、各種カリキュラムを分けて売ったり、カリキュラム内容を<br>
        より充実させてから売ったりしようという方針となり、こちらのデザインは取り下げとなっています。
      </a>
    </div>
    <div class="workWrap">
      <div class="workFlex m-12px">
        <img class="workImg-2" src="../assets/works/ePro-3.png" />
        <img class="workImg-4" src="../assets/works/ePro-1.png" />
      </div>
      <div class="workFlex">
        <img class="workImg-2" src="../assets/works/ePro-4.png" />
        <img class="workImg-4" src="../assets/works/ePro-2.png" />
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