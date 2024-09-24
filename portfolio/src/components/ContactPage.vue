<template>
  <div class="mainContents">
    <h1 id="profile-top">Contact</h1>
    <div class="introPhotoWrap">
      <img class="introPhoto" src="../assets/img/contact-img.png" />
    </div>
    <h2>お問い合わせはメールにて</h2>
    <div class="textWrap">
      <a>
        ここまでご覧いただき誠にありがとうございます！<br>
        お問い合わせの際は、お手数ですがメールの件名先頭に【ポートフォリオより】とご記載の上、<span id="target">hm.hzm331@gmail.com</span>までご連絡ください！
      </a>
    </div>
    <button class="GoBtn" @click="writeToClipboard()"><span>アドレスをコピー</span></button>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  methods: {
    writeToClipboard() {
      const copyText = this.$el.querySelector('#target').textContent
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          alert('メールアドレスをコピーしました')
        })
        .catch(e => {
          console.error(e)
        })
    }
  }
}
</script>

<style>

</style>
