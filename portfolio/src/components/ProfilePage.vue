<template>
  <div class="mainContents">
    <h1>Profile</h1>
    <div class="introPhotoWrap">
      <img class="introPhoto" src="../assets/img/profile-img.png" />
    </div>
    <h2>Marina Hara(原 茉利奈)</h2>
    <div class="textWrap">
      <a>
        原 茉利奈と申します。1996年3月31日、千葉県船橋市生まれ。東京都あきる野市在住。<br>
        Webデザインやフロントエンド周りを幅広く実施・教育しています。
        <br><br>
        実用的な中にも温かみがある。そんなデザインを心がけています。<br>
        アプリ系のデザインをするのが好きです。<br>
        今後はよりディレクションやマーケティングに携わっていきたく、自己学習や求人・案件探し等模索しています。
        <br><br>
        好きな食べ物はチヂミ。嫌いな食べ物はパクチー。<br>
        最近飼い始めた犬のぽむちゃん(チワズー)に夢中です。
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage'
}
</script>

<style>
.mainContents {
  margin: 104px 20px 40px 80px;
  padding-right: 60px;
  height: calc(100vh - 144px);
  overflow-y: scroll;
  scrollbar-width: thin;
}

h1 {
  font-size: 40px;
}

h2 {
  text-align: left;
  font-size: 26px;
}

.introPhotoWrap {
  margin: 40px auto;
}

.introPhoto {
  width: 190px;
  height: 190px;
}

.textWrap {
  text-align: left;
  margin: 28px auto 0;
}
</style>