<template>
  <div class="top">
      <el-row :gutter="20">
      <el-col :span="6"><div class="logo"><img src="@/assets/logo.png" alt=""><img src="@/assets/logotxt.png" alt=""></div></el-col>
      <el-col :span="3" :offset="8"><div class="user">
          <img :src="user.headImg" alt="">
          <span>{{user.userName}}</span>
        </div>
        </el-col>
        <el-col :span="1">
          <el-button class="btn" type="warning" @click="upgin" round>退出登录</el-button>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Top',
  computed:{
    user(){
      return JSON.parse(localStorage.getItem('token'))
    }
  },
  methods:{
    upgin(){
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  height: 60px;
  background: #545c64;
}


.logo{
  position: relative;
  height: 60px;
}
.logo img{
  width: 50%;
  height: 100%;
}
.user{
  position: relative;
  height: 52px;
  border-radius: 5px;
  min-width: 150px;
  margin-top: 2px; 
  border: 1px white solid;
}
.user img{
  width: 50px;
  height: 50px;
  border:1px orange solid;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 0;
  
}
.user span{
  width: 50px;
  height: 60px;
  color: white;
  position: absolute;
  left: 80px;
  top: 15px;
}
.btn{
  margin-top: 10px;
}
</style>
