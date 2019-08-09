<template>
  <el-container class="app-wrapper">
    <Header />
    <Sidebar />
    <Main />
  </el-container>
</template>

<script>
import { Header, Main, Sidebar } from './components'
export default {
  name: 'Layout',
  components: {
    Header,
    Sidebar,
    Main
  }
}
</script>

<style scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
  }
</style>
