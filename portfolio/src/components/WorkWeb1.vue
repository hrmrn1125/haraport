<template>
<div class="workModal">
  <div class="backShadow"></div>
  <div class="workDetail">
    <h1 class="modalTitle" id="profile-top">カボニューレコードフェーズ2</h1>
    <button class="GoBtn" @click="backWeb1()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb1',
  methods: {
    backWeb1() {
      this.$emit("delete-Web1", false);
    }
  }
}
</script>

<style>
h1.modalTitle {
  color: #FFFFFF;
}

h1.modalTitle:before {
  background-image: none;
}

.workModal {
  width: 100vw;
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
}

.backShadow {
  z-index: 5;
  height: 100vh;
  width: 100vw;
  backdrop-filter: grayscale(60%) blur(8px);
  -webkit-backdrop-filter: grayscale(60%) blur(8px);
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
}

.workDetail {
  position: relative;
  z-index: 6;
  width: calc(100% - 344px);
  height: calc(100vh - 160px);
  text-align: left;
  margin: 60px 140px;
  padding: 0 32px;
}
</style>
