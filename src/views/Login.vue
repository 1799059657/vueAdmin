<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      ref="formName"
      status-icon
      label-width="80px"
      class="demo-ruleForm"
      :rules="rules"
    >
      <el-form-item label="账号" prop="userName">
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-row :gutter="10">
          <el-col :span="8">
            <el-button type="primary" @click="submitForm">提交</el-button>
          </el-col>
          <el-col :span="8" :offset="4">
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Http } from '../axios'
export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        userName: '',
        password: ''
      },
      rules: {
        password: [
          { required: true, message: '密码不能为空', trigger: 'change' },
          { min: 5, max: 12, message: '请输入5-12位', trigger: 'change' }
        ],
        userName: [
          { required: true, message: '年龄不能为空', trigger: 'change' },
          { min: 5, max: 8, message: '请输入5-8位', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.formName.validate(valid => {
        if (valid) {
          Http.login({ userName: this.ruleForm.userName }).then(data => {
            console.log(data)
            if (data.data.length > 0) {
              this.testPwd(data.data[0], this.ruleForm.password)
            } else {
              alert('用户不存在')
              this.resetForm()
            }
          })
        } else {
          alert('请输入正确的账号密码！')
          return false
        }
      })
    },
    resetForm() {
      this.ruleForm.userName = ''
      this.ruleForm.password = ''
    },
    testPwd(data, inpPwd) {
      if (data.password === inpPwd) {
        let item = {}
        item.userName = data.userName
        item.token = data.token
        item.headImg = data.headImg
        localStorage.setItem('token', JSON.stringify(item))
        this.$router.push('/')
      } else {
        alert('密码错误！')
        this.ruleForm.password = ''
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: 400px;
  height: 300px;
  margin: 100px auto;
  padding: 80px 30px 0 0;
  border: 1px solid #ccc;
}
</style>
