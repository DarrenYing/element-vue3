<template>
  <!-- form test -->
  <el-form
      ref="myForm"
      :model="model"
      :rules="rules"
  >
    <el-form-item
        label="用户名："
        prop="username"
    >
      <el-input v-model="model.username"/>
    </el-form-item>
    <el-form-item
        label="密码："
        prop="password"
    >
      <el-input
          v-model="model.password"
          type="password"
      />
    </el-form-item>
    <br>
    <el-form-item>
      <el-button
          type="primary"
          @click="login"
      >
        登 录
      </el-button>
    </el-form-item>
  </el-form>

  <!-- button test -->
  <el-button type="primary">primary</el-button>
  <el-button size="small">small</el-button>
  <el-button size="medium">medium</el-button>
  <el-button size="large">large</el-button>

  <!-- container test -->
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  <hr>

  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  <hr>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import ElButton from "./components/button/Button.vue";
import {ref,reactive} from 'vue'
import {FormType} from './components/form/type'

const comp = ref('form')

const model = reactive({
  username: "",
  password: "",
})
const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名！",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码！",
    },
  ],
})

// 获取表单实例
const myForm = ref<FormType>()
const login = () => {
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log(model)
    } else {
      alert("请正确填写表单！")
    }
  })
}

</script>

<style>
body {
  width: 1000px;
  margin: 10px auto;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}


</style>