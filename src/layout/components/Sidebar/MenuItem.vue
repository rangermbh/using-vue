<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <template v-if="hasOnlyOneChild(item.children,item) && (!onlyChild.children || onlyChild.noShowingChild)">
      <menu-link v-if="onlyChild.meta" :to="resolvePath(onlyChild.path)">
        <el-menu-item :index="resolvePath(onlyChild.path)">
          <template slot="title">{{ onlyChild.meta.title }}</template>
        </el-menu-item>
      </menu-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">{{ item.meta.title }}</template>
      <menu-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import MenuLink from './MenuLink'
import { isExternal } from '@/utils/validate'
export default {
  name: 'MenuItem',
  components: {
    MenuLink
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyChild: null
    }
  },
  methods: {
    // If has only one child
    hasOnlyOneChild(children = [], parent) {
      const displayChild = children.filter(item => {
        // If we don't set hidden in route, the default value is undefined
        if (!item.hidden) {
          this.onlyChild = item
          return true
        } else {
          return false
        }
      })
      if (displayChild.length === 1) {
        return true
      }
      if (displayChild.length === 0) {
        // show parent if there is no child
        this.onlyChild = { ...parent, path: '', noShowingChild: true }
        return true
      }
      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style scoped>

</style>
