<template>
  <div class="upuser">
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
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Http } from '@/axios'
export default {
  name: 'upUser',
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
        name: this.$route.query.name,
        nickName: this.$route.query.nickName,
        email: this.$route.query.email,
        address: this.$route.query.address,
        sex: this.$route.query.sex,
        class: ['食品', '家居', '旅行', '电子']
      },
      hobby: this.$route.query.class,
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

this.$refs['ruleForm'].validate((valid)=>{
        if (valid) {
          Http.putUserData(this.$route.query.id, e).then(data => {
        const h = this.$createElement
        this.$notify({
          title: '修改成功',
          message: h('i', { style: 'color: teal' }, data.data.name + '修改成功')
        })
        this.$router.push('/')
      })
        }else{
          return false
        }
})

      
    },
    resetForm() {
      this.$refs['ruleForm'].resetFields()
    }
  }
}
</script>

<style scoped>
.upuser {
  width: 600px;
  margin: 0 auto;
}
</style>
