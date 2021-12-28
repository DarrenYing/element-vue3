<template>
  <div class="el-form-item">
    <label v-if="label">
      {{ label }}
    </label>
    <slot />
    <p v-if="error" class="error">
      {{ error }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "ElFormItem"
}
</script>

<script setup lang="ts">
// 从form组件中获取rules，从input组件中获取用户输入，通过async-validator校验输入，并将validate暴露给父组件form

import Schema from "async-validator";
import {onMounted, ref, inject} from "vue";
import {FormItem, key} from "./type";
import {emitter} from "../../emitter";

interface Props {
  label?: string,
  prop?: string
}
const props = withDefaults(defineProps<Props>(), {
  label: "",
  prop: ""
})

const error = ref("")
// 接收Form.vue里的provide
const formData = inject(key)

const item: FormItem = {
  validate,
}

// 显示暴露给parent
defineExpose(item)

onMounted(() => {
  if (props.prop) {
    emitter.on("validate", () => {
      validate()
    })
    emitter.emit("addFormItem", item)
  }
})

function validate() {
  if (formData?.rules === undefined) {
    return Promise.resolve({result: true})
  }
  const rules = formData.rules[props.prop]
  const value = formData.model[props.prop]
  const schema = new Schema({
    [props.prop]: rules
  })
  return schema.validate({
    [props.prop]: value
  }, (errors => {
    if (errors) {
      error.value = errors[0].message || "校验错误"
    } else {
      error.value = ""
    }
  }))
}

</script>

<style lang="scss">
@import 'src/styles/mixin';
@include b(form-item) {
  margin-bottom: 22px;
  label{
    line-height:1.2;
    margin-bottom:5px;
    display: inline-block;
  }
  & .el-form-item {
    margin-bottom: 0;
  }
}
.error{
  color:red;
}
</style>