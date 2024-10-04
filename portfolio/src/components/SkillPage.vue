<template>
  <div class="mainContents">
    <h1 id="skill-top">Skill</h1>
    <ul>
      <li>
        <div class="introPhotoWrap">
          <img class="introPhoto" src="../assets/img/skill-1-img.png" />
        </div>
        <h2>HTML/CSS/JavaScript</h2>
        <div class="textWrap">
          <a>
            様々な記法に対応可能。社内のフロントエンド講師としてカリキュラムの構築や教育実施も行っています。<br>
            JSに関してはjQuery、Chart.js、bignumber.jsなど各種ライブラリにも親しんでおります。
          </a>
        </div>
      </li>
      <li>
        <div class="introPhotoWrap">
          <img class="introPhoto" src="../assets/img/skill-2-img.png" />
        </div>
        <h2>Vue.js</h2>
        <div class="textWrap">
          <a>
            参画現場含め本格的によく扱っているフレームワークはVue.jsです。<br>
            React(+TypeScript)も少しずつ勉強しています。
          </a>
        </div>
      </li>
      <li>
        <div class="introPhotoWrap">
          <img class="introPhoto" src="../assets/img/skill-3-img.png" />
        </div>
        <h2>Illustrator/Photoshop/XD/Figma</h2>
        <div class="textWrap">
          <a>
            社内のデザインカリキュラムをオリジナルで作成しました。<br>
            また、社内外のデザイン講師としてこれらのツールの取り扱いを教えています。<br>
            複数名での共有&作業なども経験しています。
          </a>
        </div>
      </li>
      <li>
        <div class="introPhotoWrap">
          <img class="introPhoto" src="../assets/img/skill-4-img.png" />
        </div>
        <h2>マーケティング</h2>
        <div class="textWrap">
          <a>
            FirebaseおよびGA4を扱い、自社コンテンツ等の各種数値分析を行っています。<br>
            また、自作カリキュラムの外販化に伴って、SNS・広告運用なども行っています。
          </a>
        </div>
      </li>
      <li>
        <div class="introPhotoWrap">
          <img class="introPhoto" src="../assets/img/skill-5-img.png" />
        </div>
        <h2>After Effects/Media Encoder</h2>
        <div class="textWrap">
          <a>
            簡単な動画制作をして、Webアプリに埋め込んだりします。
          </a>
        </div>
      </li>
      <li>
        <div class="introPhotoWrap">
          <img class="introPhoto" src="../assets/img/skill-6-img.png" />
        </div>
        <h2>校正</h2>
        <div class="textWrap">
          <a>
            中高国語の教員免許を保有しており、アルバイトでも塾教材の校正を行っていたことから、校正スキルを身につけました。<br>
            実務でも校正を任されたことがあります。
          </a>
        </div>
      </li>
      <li>
        <div class="introPhotoWrap">
          <img class="introPhoto" src="../assets/img/skill-7-img.png" />
        </div>
        <h2>カラーコーディネート</h2>
        <div class="textWrap">
          <a>
            カラーコーディネーターアドバンスクラスの資格を保有しております。<br>
            主にWebデザインに活かしています。
          </a>
        </div>
      </li>
      <li>
        <div class="introPhotoWrap">
          <img class="introPhoto" src="../assets/img/skill-8-img.png" />
        </div>
        <h2>コミュニケーション能力</h2>
        <div class="textWrap">
          <a>
            1社目(人材営業担当)で多数の顧客法人や関連部署とのやりとりを経験しました。<br>
            また2社目でもクライアントワークであったため、言動に意図を持ち、それを関連各所へ分かりやすく伝えることができます。
          </a>
        </div>
      </li>
    </ul>
    <img class="introPhoto" src="../assets/img/pom-3.png" />
    <button class="GoBtn" @click="goTop"><span>一番上へ</span></button>
  </div>
</template>

<script>
export default {
  name: 'SkillPage',
  methods: {
    goTop: function() {
      document.getElementById('skill-top').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
</script>
