<template>
  <div class="qList">
    <el-table
      v-loading="loading"
      :data="tableData"
      border
      style="width: 912px;margin:0 auto"
    >
      <el-table-column
        fixed
        type="index"
        width="50"
        label="序号"
      ></el-table-column>
      <el-table-column prop="qq" label="qq" width="300"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column
        prop="nickName"
        label="昵称"
        width="120"
      ></el-table-column>
      <el-table-column prop="sex" label="性别" width="120"></el-table-column>
      <el-table-column prop="age" label="年纪" width="100"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="open(scope.row.id)" type="text" size="small"
            >删除</el-button
          >
          <router-link :to="{ path: '/qqUpUser', query: scope.row }"
            >编辑</router-link
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      background
      :page-size="pageSize"
      :current-page="currentPage"
      layout="prev, pager, next"
      :total="total"
      @current-change="currentChange"
      @prev-click="prevClick"
      @next-click="nextClick"
    >
    </el-pagination>
  </div>
</template>
<script>
import { Http } from "@/axios";
export default {
  name: "QList",
  data() {
    return {
      tableData: [],
      total: 0,
      pageSize: 5,
      currentPage: 1,
      loading: true,
      timer: null,
    };
  },
  computed: {
    value() {
      return this.$store.state.QQUserValue;
    },
  },
  watch: {
    value(val) {
      this.getPageData(val);
    },
  },
  methods: {
    deleteData(id) {
      Http.delqqUserData(id).then(() => {
        this.initData();
      });
    },
    loadingTab() {
      this.timer = setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    getPageData(newPage) {
      let that = this;
      Http.getqqUserData({
        q: that.$store.state.value,
        _page: newPage,
        _limit: that.pageSize,
      }).then((data) => {
        that.tableData = data.data;
        that.loadingTab();
      });
    },
    currentChange(page) {
      this.getPageData(page);
    },
    prevClick(page) {
      this.getPageData(page);
    },
    nextClick(page) {
      this.getPageData(page);
    },
    initData() {
      Http.getqqUserData({}).then((data) => {
        this.total = data.data.length;
      });
      this.getPageData(this.currentPage);
    },
    open(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.deleteData(id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  filters: {
    toJoin(val) {
      return val.join(" ");
    },
  },
  mounted() {
    this.initData();
  },
};
</script>

<style scoped>
.page {
  margin-top: 30px;
}
</style>
