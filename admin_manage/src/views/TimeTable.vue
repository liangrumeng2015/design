<template>
  <div>
    <el-select v-model="majorId" placeholder="选择班级" style="margin-bottom:20px">
      <el-option
        v-for="item in majorIdOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="week01" label="周一"></el-table-column>
      <el-table-column prop="week02" label="周二"></el-table-column>
      <el-table-column prop="week03" label="周三"></el-table-column>
      <el-table-column prop="week04" label="周四"></el-table-column>
      <el-table-column prop="week05" label="周五"></el-table-column>
      <el-table-column prop="week06" label="周六"></el-table-column>
      <el-table-column prop="week07" label="周日"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          week01: "化学课01",
          week02: "化学课1"
        },
        {
          week01: "化学课02",
          week02: "化学课2"
        },
        {
          week01: "化学课03",
          week03: "2016-05-04"
        },
        {
          week04: "ddd"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      majorId: "",
      majorIdOptions: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  }
};
</script>