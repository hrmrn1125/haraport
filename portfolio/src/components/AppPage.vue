<template>
  <div class="mainContents">
    <h1 class="decoPen" id="app-top">App</h1>
    <ul>
      <li>
        <div class="appPhotoWrap" @click="goToApp1">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="appPhoto" src="../assets/works/mob-login-1.png" />
        </div>
        <transition name="fade">
          <WorkApp1 v-show="app1" @delete-App1="deleteApp1" />
        </transition>
        <h2>価値観アプリ(着手中)</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            企画構想・要件定義/フルデザイン<br>
            <h3>【制作期間】</h3>
            2024/7ー現在(業務時間外に随時着手)<br>
            <h3>【使用言語・ツール】</h3>
            Illustrator/Photoshop/XD<br>
            <h3>【ターゲット・テイスト】</h3>
            診断系サイトが好きそうな若者向け。特に悩みを抱えて言語化するのが苦手な20〜30代メイン。深く思案に耽るようなイメージで緑や紫を用いている。ユーザー操作が多いのでシンプルに。
          </a>
        </div>
      </li>
      <li>
        <div class="appPhotoWrap" @click="goToApp2">
          <div class="linkDetail">
            <span>Detail</span>
          </div>
          <img class="appPhoto" src="../assets/works/timer-app-1.png" />
        </div>
        <transition name="fade">
          <WorkApp2 v-show="app2" @delete-App2="deleteApp2" />
        </transition>
        <h2>FlowTimer</h2>
        <div class="textWrap">
          <a>
            <h3>【担当範囲】</h3>
            企画構想・要件定義/フルデザイン<br>
            <h3>【制作期間】</h3>
            2023/3ー2023/11(業務時間外に随時着手)<br>
            <h3>【使用言語・ツール】</h3>
            Illustrator/Photoshop/XD<br>
            <h3>【ターゲット・テイスト】</h3>
            勉強に集中したい若者が主なターゲット。メイン機能は極限までシンプルにして、使いやすさを最重視。
          </a>
        </div>
      </li>
    </ul>
    <button class="GoBtn" @click="goTop"><span>一番上へ</span></button>
  </div>
</template>

<script>
import WorkApp1 from '@/components/WorkApp1';
import WorkApp2 from '@/components/WorkApp2';

export default {
  name: 'AppPage',
  components: {
    WorkApp1,
    WorkApp2
  },
  data() {
    return {
      app1: false,
      app2: false
    }
  },
  methods: {
    goTop: function() {
      document.getElementById('app-top').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    goToApp1() {
      this.app1 = true;
    },
    deleteApp1() {
      this.app1 = false;
    },
    goToApp2() {
      this.app2 = true;
    },
    deleteApp2() {
      this.app2 = false;
    }
  }
}
</script>

<style>
.appPhotoWrap {
  position: relative;
  margin: 68px auto 24px;
  width: 100%;
  height: 260px;
  border: 2.4px solid #31302E;
  background-color: #D6D6D6;
}

.appPhoto {
  width: 100%;
  height: 260px;
  object-fit: contain;
  object-position: center top;
}
</style>