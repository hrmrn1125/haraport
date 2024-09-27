<template>
<div class="wrapper">
  <div class="mainTab">
    <ul class="mainMenuWrap">
      <li class="mainMenu" @click="clicked('left')" :class="{'active': isChanged === 'left'}">
        <a class="mainMenuText">Profile</a>
      </li>
      <li class="mainMenu" @click="clicked('right')" :class="{'active': isChanged === 'right'}">
        <a class="mainMenuText">Works</a>
      </li>
    </ul>
  </div>
  <div class="bodyWrapMob">
    <div class="leftBody" v-if="isChanged === 'left'">
      <div class="tabGroup">
        <ul class="tabNavLeft">
          <li class="subMenu" @click="change('profile')" :class="{'active': isActive === 'profile'}">
            Profile
          </li>
          <li class="subMenu" @click="change('skill')" :class="{'active': isActive === 'skill'}">
            Skill
          </li>
          <li class="subMenu" @click="change('contact')" :class="{'active': isActive === 'contact'}">
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
    <div class="rightBody" v-if="isChanged === 'right'">
      <div class="tabGroup">
        <ul class="tabNavRight">
          <li class="subMenu" @click="select('web')" :class="{'active': isShow === 'web'}">
            Web
          </li>
          <li class="subMenu" @click="select('app')" :class="{'active': isShow === 'app'}">
            App
          </li>
          <li class="subMenu" @click="select('others')" :class="{'active': isShow === 'others'}">
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
  <div class="logoWrap">
    <img class="logo" src="@/assets/portfolio-logo.png" />
  </div>
  <div class="bodyWrap">
    <div class="leftBody">
      <div class="tabGroup">
        <ul class="tabNavLeft">
          <li class="subMenu" @click="change('profile')" :class="{'active': isActive === 'profile'}">
            Profile
          </li>
          <li class="subMenu" @click="change('skill')" :class="{'active': isActive === 'skill'}">
            Skill
          </li>
          <li class="subMenu" @click="change('contact')" :class="{'active': isActive === 'contact'}">
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
          <li class="subMenu" @click="select('web')" :class="{'active': isShow === 'web'}">
            Web
          </li>
          <li class="subMenu" @click="select('app')" :class="{'active': isShow === 'app'}">
            App
          </li>
          <li class="subMenu" @click="select('others')" :class="{'active': isShow === 'others'}">
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
      isShow: 'web',
      isChanged: 'left'
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
    },
    clicked: function(num) {
      this.isChanged = num
    }
  }
}
</script>

<style>
body.fixed {
  overflow: hidden;
}

.wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

.mainTab {
  display: none;
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

.bodyWrapMob {
  display: none;
}

.leftBody {
  border: 2.4px solid #31302E;
  text-align: center;
  background-color: #D6D6D6;
  width: 50vw;
  height: calc(100vh - 4px);
  overflow-x: hidden;
}

.rightBody {
  border: 2.4px solid #31302E;
  border-left: none;
  text-align: center;
  background-color: #BCB4AF;
  width: 50vw;
  overflow-x: hidden;
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
  overflow-x: hidden;
}

.tabNavRight {
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
  background-color: #BCB4AF;
  z-index: 1;
  overflow-x: hidden;
}

@media (hover: hover) {
  .tabNavLeft li:hover {
    opacity: 0.5;
  }

  .tabNavRight li:hover {
    opacity: 0.5;
  }
}

.subMenu.active {
  color: #DD7021;
}

@media screen and (min-width:870px) and (max-width:979px) {
  .tabNavLeft {
    width: calc(50vw - 264px);
    padding: 40px 130px 20px;
  }

  .tabNavRight {
    width: calc(50vw - 264px);
    padding: 40px 130px 30px;
  }
}

@media screen and (min-width:750px) and (max-width:869px) {
  .tabNavLeft {
    width: calc(50vw - 224px);
    padding: 40px 110px 20px;
  }

  .tabNavRight {
    width: calc(50vw - 224px);
    padding: 40px 110px 30px;
  }
}

@media screen and (max-width:749px) {
  h1 {
    font-weight: 600;
  }

  h2 {
    font-weight: 500;
  }

  h3 {
    font-weight: 500;
  }

  a {
    font-size: 14px;
  }

  .bodyWrap {
    display: none;
  }

  .bodyWrapMob {
    display: block;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  .mainTab {
    display: block;
    position: fixed;
    width: calc(100% - 140px);
    height: 32px;
    top: 20px;
    left: 70px;
    background-color: #FFFFFF;
    border-radius: 34px;
    border: 2.4px solid #31302E;
    z-index: 4;
  }

  .mainMenuWrap {
    display: flex;
  }

  .mainMenu {
    display:table;
    text-align:center;
    width: 50%;
    height: 36px;
    margin-top: -2px;
  }

  .mainMenu.active {
    width: calc(50% + 2px);
    margin-left: -1px;
  }

  .mainMenu.active .mainMenuText {
    color: #FFFFFF;
    background-color: #31302E;
    transition: all 0.4s;
  }

  .mainMenuText {
    display:table-cell;
    vertical-align:middle;
    font-weight: 600;
    border-radius: 34px;
  }

  .logoWrap {
    top: 20px;
    left: 16px;
  }

  .logo {
    width: 40px;
    height: 40px;
  }

  .leftBody {
    width: 100vw;
  }

  .rightBody {
    border-left: 2.4px solid #31302E;
    width: 100vw;
  }

  .tabNavLeft {
    width: calc(100vw - 152px);
    padding: 78px 74px 20px;
    font-size: 16px;
  }

  .tabNavRight {
    width: calc(100vw - 152px);
    padding: 78px 74px 20px;
    font-size: 16px;
  }
}
</style>
