<template>
<div class="workModal">
  <div class="backShadow"></div>
  <div class="workDetail">
    <h1 id="profile-top">Profile</h1>
    <button class="GoBtn" @click="backWeb6()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb6',
  methods: {
    backWeb6() {
      this.$emit("delete-Web6", false);
    }
  }
}
</script>