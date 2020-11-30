<template>
  <div class="menu">
    <el-menu
      default-active="1-1"
      :unique-opened="unique"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click.native="gedex('UserList')"
            >用户列表</el-menu-item
          >
          <el-menu-item index="1-2">权限管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-coffee"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">商品列表</el-menu-item>
          <el-menu-item index="2-2">类别管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>QQ管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click.native="gedex('QList')"
            >QQ用户列表</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      unique: true
    }
  },
  model: {
    prop: 'cptName',
    event: 'toCptName'
  },
  props: {
    cptName: {
      type: String,
      default: 'UserList'
    }
  },
  methods: {
    gedex(e) {
      this.$emit('toCptName', e)
    }
  }
}
</script>

<style scoped>
.el-menu {
  height: 100vh;
}
</style>
