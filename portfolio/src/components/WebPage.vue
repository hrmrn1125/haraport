<template>
  <div class="mainContents">
    <h1 class="decoPen" id="web-top">Web</h1>
    <ul>
      <li>
        <div class="workPhotoWrap" @click="goToWeb1">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/caboreco2-1.png" />
        </div>
        <transition name="fade">
          <WorkWeb1 v-show="web1" @delete-Web1="deleteWeb1" />
        </transition>
        <h2>カボニューレコードフェーズ2</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/コーダーへの指示出し・コードレビュー/一部コーディング・開発/一部ライティング・校正<br>
            <h3>【制作期間】</h3>
            2024/2ー2024/10<br>
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
        <transition name="fade">
          <WorkWeb2 v-show="web2" @delete-Web2="deleteWeb2" />
        </transition>
        <h2>カボニューレコードフェーズ1</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/コーダーへの指示出し・コードレビュー/一部コーディング・開発/一部ライティング・校正<br>
            <h3>【制作期間】</h3>
            2022/8ー2024/1<br>
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
        <transition name="fade">
          <WorkWeb3 v-show="web3" @delete-Web3="deleteWeb3" />
        </transition>
        <h2>Release株式会社/コーポレートサイト</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/フルライティング・校正<br>
            <h3>【制作期間】</h3>
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
        <transition name="fade">
          <WorkWeb4 v-show="web4" @delete-Web4="deleteWeb4" />
        </transition>
        <h2>カイホウ for SPOT/LP</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/フルライティング・校正<br>
            <h3>【制作期間】</h3>
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
        <transition name="fade">
          <WorkWeb5 v-show="web5" @delete-Web5="deleteWeb5" />
        </transition>
        <h2>デザメモ/LP</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            企画構想・要件定義/フルデザイン/フルコーディング・開発/フルライティング・校正<br>
            <h3>【制作期間】</h3>
            2024/6ー2024/9(業務時間外に随時着手)<br>
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
        <transition name="fade">
          <WorkWeb6 v-show="web6" @delete-Web6="deleteWeb6" />
        </transition>
        <h2>フロントエンドカリキュラム(着手中)</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            企画構想・要件定義/フルデザイン/フルコーディング・開発/フルライティング・校正<br>
            <h3>【制作期間】</h3>
            2024/4ー現在(業務時間外に随時着手)<br>
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
        <transition name="fade">
          <WorkWeb7 v-show="web7" @delete-Web7="deleteWeb7" />
        </transition>
        <h2>デザメモ/Webアプリ</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            企画構想・要件定義/フルデザイン/フルコーディング・開発/フルライティング・校正<br>
            <h3>【制作期間】</h3>
            2024/4ー2024/8(業務時間外に随時着手)<br>
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
        <transition name="fade">
          <WorkWeb8 v-show="web8" @delete-Web8="deleteWeb8" />
        </transition>
        <h2>社内ポータル/Webアプリ(着手中)</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            企画構想・要件定義/フルデザイン/フルコーディング・開発/フルライティング・校正<br>
            <h3>【制作期間】</h3>
            2024/2ー現在(業務時間外に随時着手)<br>
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
        <transition name="fade">
          <WorkWeb9 v-show="web9" @delete-Web9="deleteWeb9" />
        </transition>
        <h2>建設会社調達サイト</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン<br>
            <h3>【制作期間】</h3>
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
          <img class="workPhoto" src="../assets/works/convi-1.png" />
        </div>
        <transition name="fade">
          <WorkWeb10 v-show="web10" @delete-Web10="deleteWeb10" />
        </transition>
        <h2>株式会社CONVICTION/コーポレートサイト</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            デザイン監修<br>
            <h3>【制作期間】</h3>
            2023/8ー2023/11<br>
            <h3>【使用言語・ツール】</h3>
            XD<br>
            <h3>【ターゲット・テイスト】</h3>
            若者向け、Web・IT業界未経験でも取っつきやすいように。これまでのイメージカラーは踏襲。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb11">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/ePro-1.png" />
        </div>
        <transition name="fade">
          <WorkWeb11 v-show="web11" @delete-Web11="deleteWeb11" />
        </transition>
        <h2>ePro/LP</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/フルライティング・校正<br>
            <h3>【制作期間】</h3>
            2023/5<br>
            <h3>【使用言語・ツール】</h3>
            Illustrator/Photoshop/XD<br>
            <h3>【ターゲット・テイスト】</h3>
            若者向け、Web・IT業界未経験でも取っつきやすいように。現在はカリキュラム再編に伴い取り下げ・ペンディング。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToWeb12">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/bank-1.png" />
        </div>
        <transition name="fade">
          <WorkWeb12 v-show="web12" @delete-Web12="deleteWeb12" />
        </transition>
        <h2>ネット銀行マイページ</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            一部デザイン/一部コーディング・開発<br>
            <h3>【制作期間】</h3>
            2022/2ー2022/7<br>
            <h3>【使用言語・ツール】</h3>
            HTML/CSS/JavaScript/Vue.js/Illustrator/Photoshop/XD/Backlog<br>
            <h3>【ターゲット・テイスト】</h3>
            個人向け。ページ内容等詳細を開示できないため、こちらは同等の機能を独自にデザイン微改変・コーディングしたもの。CSSをあてきれていないがトップページの機能は網羅。
          </a>
        </div>
      </li>
    </ul>
    <button class="GoBtn" @click="goTop"><span>一番上へ</span></button>
  </div>
</template>

<script>
import WorkWeb1 from '@/components/WorkWeb1';
import WorkWeb2 from '@/components/WorkWeb2';
import WorkWeb3 from '@/components/WorkWeb3';
import WorkWeb4 from '@/components/WorkWeb4';
import WorkWeb5 from '@/components/WorkWeb5';
import WorkWeb6 from '@/components/WorkWeb6';
import WorkWeb7 from '@/components/WorkWeb7';
import WorkWeb8 from '@/components/WorkWeb8';
import WorkWeb9 from '@/components/WorkWeb9';
import WorkWeb10 from '@/components/WorkWeb10';
import WorkWeb11 from '@/components/WorkWeb11';
import WorkWeb12 from '@/components/WorkWeb12';

export default {
  name: 'WebPage',
  components: {
    WorkWeb1,
    WorkWeb2,
    WorkWeb3,
    WorkWeb4,
    WorkWeb5,
    WorkWeb6,
    WorkWeb7,
    WorkWeb8,
    WorkWeb9,
    WorkWeb10,
    WorkWeb11,
    WorkWeb12
  },
  data() {
    return {
      web1: false,
      web2: false,
      web3: false,
      web4: false,
      web5: false,
      web6: false,
      web7: false,
      web8: false,
      web9: false,
      web10: false,
      web11: false,
      web12: false
    }
  },
  methods: {
    goTop: function() {
      document.getElementById('web-top').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    goToWeb1() {
      this.web1 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb1() {
      this.web1 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb2() {
      this.web2 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb2() {
      this.web2 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb3() {
      this.web3 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb3() {
      this.web3 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb4() {
      this.web4 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb4() {
      this.web4 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb5() {
      this.web5 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb5() {
      this.web5 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb6() {
      this.web6 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb6() {
      this.web6 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb7() {
      this.web7 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb7() {
      this.web7 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb8() {
      this.web8 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb8() {
      this.web8 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb9() {
      this.web9 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb9() {
      this.web9 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb10() {
      this.web10 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb10() {
      this.web10 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb11() {
      this.web11 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb11() {
      this.web11 = false;
      document.body.classList.remove('fixed');
    },
    goToWeb12() {
      this.web12 = true;
      document.body.classList.add('fixed');
    },
    deleteWeb12() {
      this.web12 = false;
      document.body.classList.remove('fixed');
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.componentFade-enter-to,
.componentFade-leave {
  opacity: 1;
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
