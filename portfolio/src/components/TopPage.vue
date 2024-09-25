<template>
<div class="wrapper">
  <div class="logoWrap">
    <img class="logo" src="@/assets/portfolio-logo.png" />
  </div>
  <div class="bodyWrap">
    <div class="leftBody">
      <div class="tabGroup">
        <ul class="tabNavLeft">
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
          <div v-if="isActive === 'skill'"><SkillPage /></div>
          <div v-if="isActive === 'contact'"><ContactPage /></div>
        </div>
      </div>
    </div>
    <div class="rightBody">
      <div class="tabGroup">
        <ul class="tabNavRight">
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
          <div v-if="isShow === 'web'"><WebPage /></div>
          <div v-if="isShow === 'app'"><AppPage /></div>
          <div v-if="isShow === 'others'"><OthersPage /></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ProfilePage from '@/components/ProfilePage';
import SkillPage from '@/components/SkillPage';
import ContactPage from '@/components/ContactPage';
import WebPage from '@/components/WebPage';
import AppPage from '@/components/AppPage';
import OthersPage from '@/components/OthersPage';

export default {
  name: 'TopPage',
  data() {
    return {
      isActive: 'profile',
      isShow: 'web'
    }
  },
  components: {
    ProfilePage,
    SkillPage,
    ContactPage,
    WebPage,
    AppPage,
    OthersPage
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
  z-index: 3;
}

.logo {
  position: absolute;
  width: 70px;
  height: 70px;
  z-index: 3;
}

.bodyWrap {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.leftBody {
  border: 2.4px solid #31302E;
  text-align: center;
  background-color: #D6D6D6;
  width: 50vw;
  height: calc(100vh - 4px);
}

.rightBody {
  border: 2.4px solid #31302E;
  border-left: none;
  text-align: center;
  background-color: #BCB4AF;
  width: 50vw;
}

.tabNavLeft {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: calc(50vw - 324px);
  height: auto;
  text-align: center;
  padding: 40px 160px 20px;
  font-size: 18px;
  font-weight: 600;
  top: 2px;
  background-color: #D6D6D6;
  z-index: 1;
}

.tabNavRight {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: calc(50vw - 324px);
  height: auto;
  text-align: center;
  padding: 40px 160px 30px;
  font-size: 18px;
  font-weight: 600;
  top: 2px;
  background-color: #BCB4AF;
  z-index: 1;
}

.tabNavLeft li:hover {
  opacity: 0.5;
}

.tabNavRight li:hover {
  opacity: 0.5;
}

.active {
  color: #DD7021;
}
</style>
