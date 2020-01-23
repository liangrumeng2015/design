<template>
  <div>
    <v-quillEditor v-on:editorContent="editorContent" />
  </div>
</template>
<script>
import quillEditor from "../components/quillEditor";
export default {
  data() {
    return {
      msg: ""
    };
  },
  components: {
    "v-quillEditor": quillEditor
  },
  methods:{
      editorContent(data){
          console.log('得到的编辑里面的内容',data);
      }
  }
};
</script>