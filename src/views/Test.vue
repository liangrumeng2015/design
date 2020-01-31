<template>
  <div>
    <ul>
      <li v-for="(item,idx) in sortItem" :key="idx">{{item}}</li>
    </ul>
    <ol>
        <li v-for="(item,idx) in changeStudents" :key="idx">{{item.name}}----{{item.age}}</li>
    </ol>
    <input type="text" placeholder="请输入" v-model.trim="msg"/>
  </div>
</template>

<script>
import { sortNumber,ArrayObjSortByKey } from "../config/utils";
export default {
  data() {
    return {
      msg: "123",
      list: [20, 23, 18, 65, 32, 19, 5, 56, 41],
      sortNumber,
      ArrayObjSortByKey,
      students: [
        { name: "jspang", age: 32 },
        { name: "Panda", age: 30 },
        { name: "PanPaN", age: 21 },
        { name: "King", age: 45 }
      ]
    };
  },
  computed: {
    sortItem: function() {
      return this.list.sort(sortNumber);
    },
    changeStudents:function(){
        return ArrayObjSortByKey(this.students,'age')
    }
  }
};
</script>