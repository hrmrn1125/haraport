<template>
  <div class="mainContents">
    <h1 class="decoPen" id="work-top">Web</h1>
    <ul>
      <li>
        <div class="workPhotoWrap" @click="goToWeb1">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/caboreco2-1.png" />
        </div>
        <WorkWeb1 v-show="web1" @delete-Web1="deleteWeb1" />
        <h2>カボニューレコードフェーズ2</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/コーダーへの指示出し・コードレビュー/一部コーディング・開発/一部ライティング・校正<br>
            <h3>【制作期間(時間)】</h3>
            2024/2〜2024/10<br>
            <h3>【使用言語・ツール】</h3>
            HTML/CSS/JavaScript/Vue.js/VS Code/Slack/Teams/Git Bash/TortoiseGit/Illustrator/Photoshop/XD/After Effects/Media Encoder/Amazon WorkSpaces/Google Analytics4<br>
            <h3>【ターゲット・テイスト】</h3>
            幅広い年齢層に親しみやすく、キャラクターを活かして。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb2">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/caboreco1-1.png" />
        </div>
        <h2>カボニューレコードフェーズ1</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/コーダーへの指示出し・コードレビュー/一部コーディング・開発/一部ライティング・校正<br>
            <h3>【制作期間(時間)】</h3>
            2022/8〜2024/1<br>
            <h3>【使用言語・ツール】</h3>
            HTML/CSS/JavaScript/Vue.js/VS Code/Slack/Teams/Git Bash/TortoiseGit/Illustrator/Photoshop/XD/After Effects/Media Encoder/Amazon WorkSpaces/Google Analytics4<br>
            <h3>【ターゲット・テイスト】</h3>
            若者向けにアプリ感強めのモダンなテイストで。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb3">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/Release-1.png" />
        </div>
        <h2>Release株式会社/コーポレートサイト</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/フルライティング・校正<br>
            <h3>【制作期間(時間)】</h3>
            2024/5(1週間程度/業務時間外に随時着手)<br>
            <h3>【使用言語・ツール】</h3>
            Illustrator/Photoshop/XD/Figma<br>
            <h3>【ターゲット・テイスト】</h3>
            シンプルでコーディングしやすく、きちんとした印象もあるものを目指して。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb4">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/kaihou-1.png" />
        </div>
        <h2>カイホウ for SPOT/LP</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/フルライティング・校正<br>
            <h3>【制作期間(時間)】</h3>
            2024/5(1週間程度/業務時間外に随時着手)<br>
            <h3>【使用言語・ツール】</h3>
            Illustrator/Photoshop/XD/Figma<br>
            <h3>【ターゲット・テイスト】</h3>
            シンプルでコーディングしやすく、きちんとした印象もあるものを目指して。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb5">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/dezamemoLP-1.png" />
        </div>
        <h2>デザメモLP</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            企画構想・要件定義/フルデザイン/フルコーディング・開発/フルライティング・校正<br>
            <h3>【制作期間(時間)】</h3>
            2024/6〜2024/9(業務時間外に随時着手)<br>
            <h3>【使用言語・ツール】</h3>
            HTML/CSS/JavaScript/Vue.js/Git Hub/Illustrator/Photoshop/XD/Google Analytics4<br>
            <h3>【ターゲット・テイスト】</h3>
            デザイン初学者の若者向けに、親しみやすさと世界観を大事に。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb6">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/front-1.png" />
        </div>
        <h2>フロントエンドカリキュラム(着手中)</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            企画構想・要件定義/フルデザイン/フルコーディング・開発/フルライティング・校正<br>
            <h3>【制作期間(時間)】</h3>
            2024/4〜2024/10(業務時間外に随時着手)<br>
            <h3>【使用言語・ツール】</h3>
            HTML/CSS/JavaScript/Vue.js/Illustrator/Photoshop/XD<br>
            <h3>【ターゲット・テイスト】</h3>
            フロントエンド初学者の社員向けに、見やすさと分かりやすさを大事に。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb7">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/dezamemo-1.png" />
        </div>
        <h2>デザメモ/Webアプリ</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            企画構想・要件定義/フルデザイン/フルコーディング・開発/フルライティング・校正<br>
            <h3>【制作期間(時間)】</h3>
            2024/4〜2024/8(業務時間外に随時着手)<br>
            <h3>【使用言語・ツール】</h3>
            HTML/CSS/JavaScript/Vue.js/Firebase/Illustrator/Photoshop/XD<br>
            <h3>【ターゲット・テイスト】</h3>
            デザイン初学者の若者向けに、親しみやすさと分かりやすさを大事に。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb8">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/convicom-1.png" />
        </div>
        <h2>社内ポータルWebアプリ(着手中)</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            企画構想・要件定義/フルデザイン/フルコーディング・開発/フルライティング・校正<br>
            <h3>【制作期間(時間)】</h3>
            2024/2〜2024/10(業務時間外に随時着手)<br>
            <h3>【使用言語・ツール】</h3>
            HTML/CSS/JavaScript/Vue.js/Firebase/Illustrator/Photoshop/XD/Backlog<br>
            <h3>【ターゲット・テイスト】</h3>
            社員のお知らせ閲覧率UPやコミュニケーション増加、各種ツールの一元管理を主な目的として。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb9">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/kensetsu-1.png" />
        </div>
        <h2>建設会社調達サイト</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン<br>
            <h3>【制作期間(時間)】</h3>
            2023/9<br>
            <h3>【使用言語・ツール】</h3>
            Illustrator/Photoshop/XD<br>
            <h3>【ターゲット・テイスト】</h3>
            法人向け。ページ内容等詳細を開示できないため、こちらは独自にデザイン微修正したもの。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb10">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/bank-1.png" />
        </div>
        <h2>ネット銀行マイページ</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            一部デザイン/一部コーディング・開発<br>
            <h3>【制作期間(時間)】</h3>
            2022/2〜2022/7<br>
            <h3>【使用言語・ツール】</h3>
            HTML/CSS/JavaScript/Vue.js/Illustrator/Photoshop/XD/Backlog<br>
            <h3>【ターゲット・テイスト】</h3>
            個人向け。ページ内容等詳細を開示できないため、こちらは同等の機能を独自にデザイン微改変・コーディングしたもの。CSS等あてきれていないがトップページの機能は網羅。
          </a>
        </div>
      </li>
    </ul>
    <button class="GoBtn" @click="goTop"><span>一番上へ</span></button>
  </div>
</template>

<script>
import WorkWeb1 from '@/components/WorkWeb1';

export default {
  name: 'WebPage',
  components: {
    WorkWeb1
  },
  data() {
    return {
      web1: false
    }
  },
  methods: {
    goTop: function() {
      document.getElementById('work-top').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    goToWeb1() {
      this.web1 = true;
    },
    deleteWeb1() {
      this.web1 = false;
    },
    goToWeb2() {
      this.$router.push('/web2')
    },
    goToWeb3() {
      this.$router.push('/web3')
    },
    goToWeb4() {
      this.$router.push('/web4')
    },
    goToWeb5() {
      this.$router.push('/web5')
    },
    goToWeb6() {
      this.$router.push('/web6')
    },
    goToWeb7() {
      this.$router.push('/web7')
    },
    goToWeb8() {
      this.$router.push('/web8')
    },
    goToWeb9() {
      this.$router.push('/web9')
    },
    goToWeb10() {
      this.$router.push('/web10')
    }
  }
}
</script>

<style>
h1.decoPen:before {
  background-image: url(../assets/img/deco-pen.png);
}

h3 {
  font-size: 16px;
  margin: 8px 0 0 0;
  padding: 0;
}

.workPhotoWrap {
  position: relative;
  margin: 68px auto 24px;
  width: 100%;
  height: 260px;
  border: 2.4px solid #31302E;
}

.linkDetail {
  display:table;
  position: absolute;
  width: 100%;
  height: 260px;
  text-align: center;
  color: #FFFFFF;
  background-color: rgba(30, 45, 52, 0.6);
  opacity: 0;
  transition: all 0.4s;
}

.linkDetail span {
  display:table-cell;
  vertical-align: middle;
  font-size: 24px;
  font-weight: 600;
}

.linkDetail span::after {
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin: -4px 0 0 8px;
  background-image: url(../assets/img/arrow-right-white.png);
  background-size: contain;
  background-repeat: no-repeat;
}

.linkDetail:hover {
  opacity: 1;
}

.workPhoto {
  width: 100%;
  height: 260px;
  object-fit: cover;
  object-position: center top;
}
</style>
