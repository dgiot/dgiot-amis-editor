<!--
* @Author: h7ml
* @Date: 2021-11-22 14:12:45
* @LastEditors: h7ml
* @LastEditTime: 2021-11-22 14:12:45
* @Description:
* @FilePath: examples\App.vue
* @DocumentLink:
-->
<template>
  <div id="app">
    <dgiot-amis-editor
      theme="ang"
      class-name="is-fixed"
      :is-mobile="isMobile"
      :preview="isPreview"
      :value="schema"
      @onChange="onChange"
    />
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        isPreview: false,
        isMobile: false,
        post: {
          json: '',
          amis_page_id: 15,
        },
        baseURL: 'https://prod.iotn2n.com',
        schema: {},
      }
    },
    computed: {},
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {},
    methods: {
      onChange(e) {
        console.log('onChange', e)
      },
    }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
