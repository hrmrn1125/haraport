<template>
<div class="wrapper">
  <div class="mainContents workDetail">
    <h1 id="profile-top">Profile</h1>
    <div class="introPhotoWrap">
      <img class="introPhoto" src="../assets/img/profile-img.png" />
    </div>
    <h2>Marina Hara(原 茉利奈)</h2>
    <div class="textWrap">
      <a>
        原 茉利奈と申します。1996年3月31日、千葉県船橋市生まれ。東京都あきる野市在住。<br>
        Webデザインやフロントエンド周りを幅広く実施・社内教育しています。
        <br><br>
        実用的な中にも「温かみ」と「面白さ」がある。そんなデザインを心がけています。<br>
        ジャンルは幅広く制作してきましたが、特にユーザーの使い心地を重視した、アプリ系のデザインをするのが好きです。
        <br><br>
        ユーザーの反応を数値で見てブラッシュアップしていくことが好きなので、今後はよりディレクションやマーケティングに携わっていきたく、自己学習や求人・案件探し等模索しています。
        <br><br>
        好きな食べ物はチヂミ。嫌いな食べ物はパクチー。<br>
        最近飼い始めた犬のぽむちゃん(チワズー)に夢中です。
      </a>
    </div>
    <button class="GoBtn" @click="goTop"><span>一番上へ</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb8',
  methods: {
    goTop: function() {
      document.getElementById('profile-top').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
</script>

<style>
.mainContents.workDetail {
  width: calc(100vw - 180px);
  height: calc(100vh - 80px);
  margin: 40px 25px 40px 90px;
}
</style>
