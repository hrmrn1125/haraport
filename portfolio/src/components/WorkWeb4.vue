<template>
<div class="workModal">
  <div class="backShadow"></div>
  <div class="workDetail">
    <h1 id="profile-top">Profile</h1>
    <button class="GoBtn" @click="backWeb4()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb4',
  methods: {
    backWeb4() {
      this.$emit("delete-Web4", false);
    }
  }
}
</script>