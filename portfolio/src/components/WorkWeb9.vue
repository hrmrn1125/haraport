<template>
<div class="workModal">
  <div class="backShadow"></div>
  <div class="workDetail">
    <h1 id="profile-top">Profile</h1>
    <button class="GoBtn" @click="backWeb9()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb9',
  methods: {
    backWeb9() {
      this.$emit("delete-Web9", false);
    }
  }
}
</script>