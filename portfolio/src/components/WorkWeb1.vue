<template>
<div class="workModal">
  <div class="backShadow"></div>
  <div class="workDetail">
    <h1 id="profile-top">Profile</h1>
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
  background-color: #000000;
  opacity: 0.72;
  position: fixed;
  top: 0;
  left: 0;
}

.workDetail {
  position: relative;
  z-index: 6;
  background-color: #FFFFFF;
  width: calc(100% - 344px);
  height: calc(100vh - 160px);
  text-align: left;
  margin: 60px 140px;
  padding: 20px 32px;
  border-radius: 14px;
}
</style>
