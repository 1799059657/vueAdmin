<template>
  <div class="adduser">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="名字" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickName">
        <el-input v-model="ruleForm.nickName"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <template>
          <el-radio v-model="ruleForm.sex" label="男">男</el-radio>
          <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
        </template>
      </el-form-item>
      <el-form-item label="关注类别" prop="class">
        <el-checkbox-group v-model="hobby" @change="handleCheckedCitiesChange">
          <el-checkbox
            v-for="itme in ruleForm.class"
            :label="itme"
            :key="itme"
            >{{ itme }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleForm)">提交</el-button>
        <el-button @click="resetForm(ruleForm)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Http } from '@/axios'
export default {
  name: 'addUser',
  data() {
    var checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的邮箱格式'))
        }
      }, 100)
    }
    return {
      ruleForm: {
        name: '',
        nickName: '',
        email: '',
        address: '',
        sex: '男',
        class: ['食品', '家居', '旅行', '电子']
      },
      hobby: ['食品', '家居'],
      rules: {
        name: [{ required: true, message: '名称不能为空', trigger: 'blur' }],
        nickName: [
          { required: true, message: '昵称不能为空', trigger: 'blur' }
        ],
        email: [{ required: true, validator: checkEmail, trigger: 'blur' }],
        address: [{ required: true, message: '名称不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleCheckedCitiesChange(val) {
      this.hobby = val ? this.hobby : []
    },
    submitForm(e) {
      e.class = this.hobby

      console.log(e)
      Http.postUserData(e).then(data => {
        const h = this.$createElement
        this.$notify({
          title: '添加成功',
          message: h('i', { style: 'color: teal' }, data.data.name + '添加成功')
        })
        this.$router.push('/')
      })
    },
    resetForm(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
.adduser {
  width: 600px;
  margin: 0 auto;
}
</style>
