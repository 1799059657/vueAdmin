<template>
  <div class="home">
    <Top></Top>
    <el-container>
      <el-aside width="300px">
        <Menu v-model="cptName"></Menu>
      </el-aside>
      <el-container>
        <el-header height="100px">
          <Shop :cptName="cptName"></Shop>
        </el-header>
        <el-main>
          <components :is="cptName"></components>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '../components/home/Menu'
import Shop from '../components/home/Shop'
import UserList from '../components/home/UserList'
import QList from '../components/home/QList'
import Top from '../components/home/Top'
export default {
  name: 'Home',
  data() {
    return {
      cptName: 'UserList'
    }
  },
  components: {
    Menu,
    Shop,
    UserList,
    QList,
    Top
  }
}
</script>

<style scoped>

</style>
