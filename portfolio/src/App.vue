<template>
<div class="wrapper">
  <div class="logoWrap">
    <img class="logo" src="@/assets/portfolio-logo.png" />
  </div>
  <div class="bodyWrap">
    <div class="leftBody">
      <div class="tabGroup">
        <ul class="tabNav">
          <li @click="change('profile')" :class="{'active': isActive === 'profile'}">
            Profile
          </li>
          <li @click="change('skill')" :class="{'active': isActive === 'skill'}">
            Skill
          </li>
          <li @click="change('contact')" :class="{'active': isActive === 'contact'}">
            Contact
          </li>
        </ul>
        <div class="tabContent">
          <div v-if="isActive === 'profile'"><ProfilePage /></div>
          <div v-if="isActive === 'skill'">タブBの内容を表示</div>
          <div v-if="isActive === 'contact'">タブCの内容を表示</div>
        </div>
      </div>
    </div>
    <div class="rightBody">
      <div class="tabGroup">
        <ul class="tabNav">
          <li @click="select('web')" :class="{'active': isShow === 'web'}">
            Web
          </li>
          <li @click="select('app')" :class="{'active': isShow === 'app'}">
            App
          </li>
          <li @click="select('others')" :class="{'active': isShow === 'others'}">
            Others
          </li>
        </ul>
        <div class="tabContent">
          <div v-if="isShow === 'web'">タブAの内容を表示</div>
          <div v-if="isShow === 'app'">タブBの内容を表示</div>
          <div v-if="isShow === 'others'">タブCの内容を表示</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ProfilePage from '@/components/ProfilePage';

export default {
  data() {
    return {
      isActive: 'profile',
      isShow: 'web'
    }
  },
  components: {
    ProfilePage
  },
  methods: {
    change: function(num) {
      this.isActive = num
    },
    select: function(num) {
      this.isShow = num
    }
  }
}
</script>

<style>
.wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.logoWrap {
  position: absolute;
  top: 40px;
  left: 40px;
}

.logo {
  position: absolute;
  width: 70px;
  height: 70px;
}

.bodyWrap {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.leftBody {
  border: 2px solid #31302E;
  text-align: center;
  background-color: #D6D6D6;
  width: 50vw;
  height: calc(100vh - 4px);
  overflow-y: auto;
}

.rightBody {
  border: 2px solid #31302E;
  border-left: none;
  text-align: center;
  background-color: #BCAFA6;
  width: 50vw;
  height: calc(100vh - 4px);
  overflow-y: auto;
}

.tabNav {
  display: flex;
  justify-content: space-between;
  max-width: 50vw;
  height: auto;
  text-align: center;
  padding: 40px 160px 0;
  font-size: 18px;
  font-weight: 600;
}

.tabContent {
  margin-top: 40px;
}
</style>
