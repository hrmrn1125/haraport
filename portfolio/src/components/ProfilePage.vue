<template>
  <div class="mainContents">
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
        最近飼い始めた犬のぽむちゃん(チワワ×シーズー/国宝)に夢中です。<br>
        載せている画像がiPhoneからの切り取りで申し訳ありません...！
      </a>
    </div>
    <div class="introPhotoWrap">
      <img class="introPhoto" src="../assets/img/pom-2.png" />
    </div>
    <button class="GoBtn" @click="goTop"><span>一番上へ</span></button>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
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
.mainContents {
  margin: 104px 25px 40px 90px;
  padding-right: 65px;
  height: calc(100vh - 144px);
  overflow-y: scroll;
  scrollbar-width: thin;
  overflow-x: hidden;
}

h1 {
  display: inline-block;
  position: relative;
  margin: 0 auto;
  padding-top: 26px;
  font-size: 36px;
  z-index: 2;
  left: 2px;
}

h1:before {
  content: '';
  display: inline-block;
  position: absolute;
  width: 34vw;
  height: 170px;
  top: -18px;
  left: -98px;
  background-image: url(../assets/img/deco-plane.png);
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
}

h2 {
  text-align: left;
  font-size: 24px;
  margin-bottom: 16px;
  word-break: break-all;
}

.GoBtn {
  display: block;
  width: 260px;
  height: 44px;
  margin: 40px auto 0;
  background-color: #FFFFFF;
  border-radius: 34px;
  border:  2.4px solid #31302E;
  text-align: center;
  transition: all 0.4s;
}

.GoBtn span {
  font-size: 18px;
  font-weight: 600;
}

.GoBtn:hover {
  background-color: #31302E;
  color: #FFFFFF;
}

.GoBtn span:hover {
  color: #FFFFFF;
}

.introPhotoWrap {
  margin: 68px auto 24px;
  z-index: 1;
}

.introPhoto {
  width: 190px;
  height: 190px;
  object-fit: contain;
}

.textWrap {
  text-align: left;
  margin: 26px auto 0;
}

@media screen and (min-width:750px) and (max-width:879px) {
  h1 {
    font-size: 32px;
  }

  h1:before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 34vw;
    height: 130px;
    top: 4px;
    left: -68px;
    background-image: url(../assets/img/deco-plane.png);
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
  }
}
</style>
