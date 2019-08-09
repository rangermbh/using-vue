<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper" style="height: 100%">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBgColor"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.activeMenuText"
        mode="vertical"
      >
        <menu-item v-for="route in sidebarRoutes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { sidebarRoutes } from '@/router'
import variables from '@/styles/variables.scss'
import MenuItem from './MenuItem'
export default {
  name: 'Sidebar',
  components: {
    MenuItem
  },
  data() {
    return {
      sidebarRoutes: sidebarRoutes,
      activeMenu: ''
    }
  },
  computed: {
    variables() {
      return variables
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .sidebar-container {
    position: fixed;
    left: 0;
    top: $headerHeight;
    z-index: 1600;
    width: $sideBarWidth;
    height: calc(100vh - 60px);
    border-right: 1px solid #eaecef;
  }
</style>
