<template>
  <div class="shop">
    <p>首页/{{ cptName | filterCpt }}</p>

    <el-row type="flex" class="row-bg">
      <el-col :span="6" :offset="3"
        ><div>
          <el-input v-model="input" placeholder="请输入内容"></el-input></div
      ></el-col>
      <el-col :span="2" :offset="1"
        ><div>
          <el-button type="success" @click="submitValue">搜索</el-button>
        </div></el-col
      >
      <el-col :span="2"
        ><div>
          <div><el-button type="success" @click="add">新增</el-button></div>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  data() {
    return {
      input: ''
    }
  },
  props: ['cptName'],
  filters: {
    filterCpt(val) {
      let value = ''
      switch (val) {
        case 'UserList':
          value = '用户列表'
          break
        case 'QList':
          value = 'QQ用户列表'
          break
      }
      return value
    }
  },
  methods: {
    submitValue() {
      if (this.cptName === 'UserList') {
        this.$store.commit('setUserValue', this.input)
      } else if (this.cptName === 'QList') {
        this.$store.commit('setQQUserValue', this.input)
      }
    },
    add() {
      if (this.cptName === 'UserList') {
        this.$router.push('/addUser')
      } else if (this.cptName === 'QList') {
        this.$router.push('/addQQUser')
      }
    }
  }
}
</script>

<style scoped>
.shop {
  padding: 5px;
  text-align: left;
}
</style>
