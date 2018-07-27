<template>

  <div class="container" id="form">
    <form action="" method="get">
      <div class="form-group">
        <label for="title">标题</label>
        <input type="text" class="form-control" id="title" placeholder="title" v-model="title" >
      </div>
      <div class="form-group">
        <label for="subtitle">副标题</label>
        <input type="text" class="form-control" id="subtitle" placeholder="副标题" v-model="subtitle">
      </div>
      <div class="form-group">
        <label for="Tags">Tags</label>
        <input type="text" id="Tags" class="form-control" placeholder="tags" v-model="tags">
      </div>

      <div class="form-group">
        <label for="bg">背景图</label>
        <input type="text" id="bg" class="form-control" placeholder="范围：1到33" v-model="bg">
      </div>
      <div class="form-group">
        <label for="author">作者</label>
        <input type="text" id="author" class="form-control" placeholder="作者"  v-model="author">
      </div>


      <router-link
        :to="{
        path:'index',
        query: {
          title: this.title ,
          subtitle:this.subtitle,
          tags:this.tags,
          bg:this.bg,
          author:this.author
        }
        }" class="btn btn-submit btn-primary " >Go </router-link>

    </form>


  </div>


</template>

<script>
  export default {
    name: "Header",
    data: function(){
      return {
        title: '',
        subtitle: '',
        tags: '',
        bg: '',
        author: ''
      }
    }
  }




</script>

<style scoped>

</style>
