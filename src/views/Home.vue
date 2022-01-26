<template>
  <div class="body">
    <el-form ref="formRef" :model="form" label-width="120px">
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="文章副标题">
        <el-input v-model="form.subtitle"></el-input>
      </el-form-item>

      <el-form-item label="文件名">
        <el-input v-model="form.filename"></el-input>
      </el-form-item>

      <el-form-item label="Tags">
        <el-input v-model="form.tags"></el-input>
      </el-form-item>

      <el-form-item label="背景图">
        <el-input v-model="form.bg"></el-input>
      </el-form-item>

      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>

      <router-link
          :to="{
            path:'editor',
            query: {
              title: this.form.title ,
              subtitle:this.form.subtitle,
              tags:this.form.tags,
              bg:this.form.bg,
              filename:this.form.filename,
              author:this.form.author
            }
        }" class="btn btn-submit btn-default ">
        <el-button>Go</el-button>
      </router-link>

    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {},
  data: function () {
    return {
      form: {
        filename: '',
        title: '',
        subtitle: '',
        tags: '',
        bg: Math.round(Math.random() * 37) + 1,
        author: ''
      }

    }
  }

}
</script>


<style scoped>
.body {
  width: 80%;
  margin: auto;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>