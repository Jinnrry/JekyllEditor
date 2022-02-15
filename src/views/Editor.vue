<template>
  <div class="editor">
    <v-md-editor v-model="text" height="800px" right-toolbar="preview toc sync-scroll" @save="handleOnSave"
                 :default-fullscreen="true"></v-md-editor>
  </div>
</template>


<script>

export default {
  name: 'index',
  data() {
    return {
      text: "",
    }
  },
  methods: {
    //获取当前时间，格式YYYY-MM-DD
    getNowFormatDate: function () {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    handleOnSave(text) {
      this.msgShow = "---\n" +
          "layout:     post\n" +
          "title:      \"" + this.$route.query.title + "\"\n" +
          "subtitle:   \"" + this.$route.query.subtitle + "\"\n" +
          "date:       " + this.getNowFormatDate() + " 12:00:00\n" +
          "author:     \"" + this.$route.query.author + "\"\n" +
          "header-img: \"img/" + this.$route.query.bg + ".jpg\"\n" +
          "catalog: true\n" +
          "tags:\n";
      var tags = this.$route.query.tags.split(',');
      for (var i = 0; i < tags.length; i++) {
        this.msgShow += "    - " + tags[i] + "\n";
      }
      this.msgShow += "---\n" + text;
      var content = this.msgShow;
      var file = new File([content], this.getNowFormatDate() + "-" + this.$route.query.filename + ".markdown", {type: "text/plain;charset=utf-8"});
      var FileSaver = require('file-saver');
      FileSaver.saveAs(file);
    }
  }
}
</script>

<style scoped>
.footer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>