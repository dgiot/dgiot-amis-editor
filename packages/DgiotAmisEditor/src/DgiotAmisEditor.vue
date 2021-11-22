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
  <vue-amis-editor
    :theme="theme"
    class-name="is-fixed"
    :is-mobile="isMobile"
    :preview="isPreview"
    :value="schema"
    @onChange="onChange"
  />
</template>
<script>
  import 'amis/lib/themes/ang.css'
  import 'amis/lib/themes/cxd.css'
  import 'amis/lib/themes/dark.css'
  import 'amis/lib/themes/default.css'
  import 'amis/lib/helper.css'
  import 'amis/sdk/sdk.css'
  import 'amis-editor/dist/style.css'

  import { Editor } from 'amis-editor'
  import { ReactInVue } from 'vuera'
  export default {
    name: 'DgiotAmisEditor',
    components: {
      VueAmisEditor: ReactInVue(Editor),
    },
    props: {
      isPreview: {
        type: Boolean,
        default: false,
      },
      isMobile: {
        type: Boolean,
        default: false,
      },
      theme: {
        type: String,
        default: 'ang',
      },
      value: {
        type: Object,
        default: function () {
          return { message: 'hello' }
        },
      },
    },
    data() {
      return {
        schema: {},
      }
    },
    mounted() {
      this.schema = this.value
    },
    methods: {
      setSchema(obj) {
        this.schema = obj
      },
      getSchema() {
        return this.schema
      },
      onChange(e) {
        this.$emit('onChange', e)
      },
    },
  }
</script>
<style>
  .ae-Editor {
    height: 100vh;
  }
</style>
