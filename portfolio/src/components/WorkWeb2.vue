<template>
<div class="workModal">
  <div class="backShadow"></div>
  <div class="workDetail">
    <h1 id="profile-top">Profile</h1>
    <button class="GoBtn" @click="backWeb2()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb2',
  methods: {
    backWeb2() {
      this.$emit("delete-Web2", false);
    }
  }
}
</script>
