<template>
<div class="workModal">
  <div class="backShadow"></div>
  <div class="workDetail">
    <h1 id="profile-top">Profile</h1>
    <button class="GoBtn" @click="backWeb5()"><span>閉じる</span></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkWeb5',
  methods: {
    backWeb5() {
      this.$emit("delete-Web5", false);
    }
  }
}
</script>