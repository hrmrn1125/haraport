<template>
  <div class="mainContents">
    <h1 id="work-top">Web</h1>
    <div class="workPhotoWrap">
      <img class="workPhoto" src="../assets/works/caboreco-1.png" />
    </div>
    <h2>Marina Hara(原 茉利奈)</h2>
    <div class="textWrap">
      <a>
        原 茉利奈と申します。1996年3月31日、千葉県船橋市生まれ。東京都あきる野市在住。<br>
      </a>
    </div>
    <button class="GoBtn" @click="goTop"><span>一番上へ</span></button>
  </div>
</template>

<script>
export default {
  name: 'WebPage',
  methods: {
    goTop: function() {
      document.getElementById('work-top').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
</script>

<style>
.workPhotoWrap {
  margin: 60px auto 38px;
  width: 100%;
  height: 250px;
}

.workPhoto {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center top;
}
</style>
