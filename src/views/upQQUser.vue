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
      <el-form-item label="qq" prop="qq">
        <el-input v-model="ruleForm.qq"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <template>
          <el-radio v-model="ruleForm.sex" label="男">男</el-radio>
          <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
        </template>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleForm)">提交</el-button>
        <el-button @click="resetForm(ruleForm)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Http } from "@/axios";
export default {
  name: "upQQUser",
  data() {
    return {
      ruleForm: {
        name: this.$route.query.name,
        nickName: this.$route.query.nickName,
        qq: this.$route.query.qq,
        sex: this.$route.query.sex,
        age: this.$route.query.age,
      },
      rules: {
        name: [{ required: true, message: "名称不能为空", trigger: "blur" }],
        nickName: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
        ],
        qq: [
          { required: true, message: "qq不能为空", trigger: "blur" },
          { min: 8, max: 10, message: "请输入6-8位qq号" },
        ],
        age: [{ required: true, message: "年龄不能为空", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(e) {
      e.class = this.hobby;

      console.log(e);
      Http.putqqUserData(this.$route.query.id, e).then((data) => {
        const h = this.$createElement;
        this.$notify({
          title: "修改成功",
          message: h(
            "i",
            { style: "color: teal" },
            data.data.name + "修改成功"
          ),
        });
        this.$router.push("/");
      });
    },
    resetForm(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.upuser {
  width: 600px;
  margin: 0 auto;
}
</style>
