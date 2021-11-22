# dgiot-amis-editor

<p align="center">
  <img src="https://img.shields.io/github/commit-activity/m/dgiot/dgiot-amis-editor" alt="ommit-activity">
	<img src="https://badgen.net/badge/package/%40dgiot%2Fdgiot-amis-editor/blue"
	alt="package" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/npm/v/@dgiot/dgiot-amis-editor" alt="Npm Version"
	maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/npm/node/@dgiot/dgiot-amis-editor" alt="Node Version"
	maxretrytimes="3" class="m-1 transition-all duration-1000">
	<br>
	<img src="https://badgen.net/jsdelivr/hits/npm/@dgiot/dgiot-amis-editor"
	alt="Jsdeliver Month Downloads" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/packagephobia/install/@dgiot/dgiot-amis-editor"
	alt="Install Size" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://badgen.net/npm/types/@dgiot/dgiot-amis-editor" alt="Type Support"
	maxretrytimes="3" class="m-1 transition-all duration-1000">
	<br>
	<img src="https://img.shields.io/librariesio/release/npm/@dgiot/dgiot-amis-editor"
	alt="Outdated Dep" maxretrytimes="3" class="m-1 transition-all duration-1000">
	<img src="https://img.shields.io/snyk/vulnerabilities/npm/@dgiot/dgiot-amis-editor"
	alt="Vulnerablities" maxretrytimes="3" class="m-1 transition-all duration-1000">
  <a href="https://www.npmjs.com/package/@dgiot/dgiot-amis-editor"><img src="https://img.shields.io/npm/l/@dgiot/dgiot-amis-editor" alt="License"></a>
<p>


![微服务架构图_02.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/web/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E5%9B%BE_02.png)




## Installation

```bash
yarn add @dgiot/dgiot-amis-editor
```

## Quick Start

### [main.js](https://github.com/dgiot/dgiot-amis-editor/blob/master/src/main.js)
```javascript
  import DgiotAmisEditor from '@dgiot/dgiot-amis-editor'
  Vue.use(DgiotAmisEditor)
```

### [examples.vue](https://github.com/dgiot/dgiot-amis-editor/blob/master/src/App.vue)
  ```vue
    <dgiot-amis-editor
      theme="ang"
      class-name="is-fixed"
      :is-mobile="isMobile"
      :preview="isPreview"
      :value="schema"
      @onChange="onChange"
    />
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
    }
  ```
### Online examples

[![Edit gmullerb-react-reducer-provider](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/dgiot/dgiot-amis-editor)
