<template>
  <div class="mainContents">
    <h1 class="decoPen" id="others-top">Others</h1>
    <ul>
      <li>
        <div class="workPhotoWrap" @click="goToOthers1">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/convi-doda-banner-1.png" />
        </div>
        <transition name="fade">
          <WorkOthers1 v-show="others1" @delete-Others1="deleteOthers1" />
        </transition>
        <h2>doda広告用バナー・画像</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/ライティング・校正<br>
            <h3>【制作期間】</h3>
            2024/5/17ー2024/5/20<br>
            <h3>【使用言語・ツール】</h3>
            Illustrator/Photoshop/XD<br>
            <h3>【ターゲット・テイスト】</h3>
            採用対象である業界未経験の若者がターゲット。幾何学の組み合わせで学びになりそうな雰囲気を演出。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToOthers2">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/banner-3.png" />
        </div>
        <transition name="fade">
          <WorkOthers2 v-show="others2" @delete-Others2="deleteOthers2" />
        </transition>
        <h2>カボニューレコード関連バナー・画像</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン<br>
            <h3>【制作期間】</h3>
            2022/8ー現在(1、2時間程度で随時制作)<br>
            <h3>【使用言語・ツール】</h3>
            Illustrator/Photoshop/XD<br>
            <h3>【ターゲット・テイスト】</h3>
            カボニューレコードの世界観に合わせた青や緑系で、丸ゴシック系フォントを使用したものが多い。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToOthers3">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/dezamemo-taiken-1.png" />
        </div>
        <transition name="fade">
          <WorkOthers3 v-show="others3" @delete-Others3="deleteOthers3" />
        </transition>
        <h2>デザメモ広告用バナー・画像</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            フルデザイン/フルライティング・校正<br>
            <h3>【制作期間】</h3>
            2024/4ー現在<br>
            <h3>【使用言語・ツール】</h3>
            Illustrator/Photoshop/XD<br>
            <h3>【ターゲット・テイスト】</h3>
            デザイン初学者の若者向けに。サービスやLPとテイストを合わせてポップに。
          </a>
        </div>
      </li>
      <li>
        <div class="workPhotoWrap" @click="goToOthers4">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/kaihou-1.png" />
        </div>
        <transition name="fade">
          <WorkOthers4 v-show="others4" @delete-Others4="deleteOthers4" />
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
        <div class="workPhotoWrap" @click="goToOthers5">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="workPhoto" src="../assets/works/dezamemoLP-1.png" />
        </div>
        <transition name="fade">
          <WorkOthers5 v-show="others5" @delete-Others5="deleteOthers5" />
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
    </ul>
    <button class="GoBtn" @click="goTop"><span>一番上へ</span></button>
  </div>
</template>

<script>
import WorkOthers1 from '@/components/WorkOthers1';
import WorkOthers2 from '@/components/WorkOthers2';
import WorkOthers3 from '@/components/WorkOthers3';
import WorkOthers4 from '@/components/WorkOthers4';
import WorkOthers5 from '@/components/WorkOthers5';

export default {
  name: 'WebPage',
  components: {
    WorkOthers1,
    WorkOthers2,
    WorkOthers3,
    WorkOthers4,
    WorkOthers5
  },
  data() {
    return {
      others1: false,
      others2: false,
      others3: false,
      others4: false,
      others5: false,
    }
  },
  methods: {
    goTop: function() {
      document.getElementById('others-top').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    goToOthers1() {
      this.others1 = true;
    },
    deleteOthers1() {
      this.others1 = false;
    },
    goToOthers2() {
      this.others2 = true;
    },
    deleteOthers2() {
      this.others2 = false;
    },
    goToOthers3() {
      this.others3 = true;
    },
    deleteOthers3() {
      this.others3 = false;
    },
    goToOthers4() {
      this.others4 = true;
    },
    deleteOthers4() {
      this.others4 = false;
    },
    goToOthers5() {
      this.others5 = true;
    },
    deleteOthers5() {
      this.others5 = false;
    }
  }
}
</script>

<style>

</style>
