<template>
  <div class="editor">
    {{title}}
  </div>
</template>


<script>

export default {
  name: 'index',
  data() {
    return {
      title: this.$route.query.title,
      subtitle: this.$route.query.subtitle,
      date: this.getNowFormatDate() + " 12:00:00",
      author: this.$route.query.author,
      header_img: "img/" + this.$route.query.bg + ".jpg",
    }
  },
  methods: {
    //获取当前时间，格式YYYY-MM-DD
    getNowFormatDate:function () {
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
    }
  }
}
</script>