<template>
  <el-header class="header-container">
    <svg-icon icon-class="box" class-name="box" />
    <el-link class="home-link" style="color: #1296db">Using Vue</el-link>
    <div class="nav-links">
      <el-menu mode="horizontal" default-active="guide">
        <div class="menu-wrapper">
          <el-input style="border-radius: 4rem" prefix-icon="el-icon-search" />
        </div>
        <div class="menu-wrapper">
          <app-link :to="'guide'">
            <el-menu-item index="guide">指南</el-menu-item>
          </app-link>
        </div>
        <div class="menu-wrapper">
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Vue.js</el-dropdown-item>
              <el-dropdown-item>Vuex</el-dropdown-item>
              <el-dropdown-item>Router</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="menu-wrapper">
          <app-link :to="'https://www.baidu.com'">
            <el-menu-item index="github">GitHub</el-menu-item>
          </app-link>
        </div>
      </el-menu>
    </div>
  </el-header>
</template>

<script>
import AppLink from './Link'
export default {
  components: {
    AppLink
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .home-link {
    line-height: $headerHeight;
    font-size: 1.3rem;
    color: #2c3e50;
  }
  .nav-links {
    position: absolute;
    top: 0;
    right: 30px;
    line-height: $headerHeight;
    height: $headerHeight;
    .menu-wrapper {
      display: inline-block;
    }
  }
  .box {
    font-size: 40px;
    vertical-align: middle;
  }
</style>
