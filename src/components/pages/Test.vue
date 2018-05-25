<template>
  <div>
    <h1 @click="clickTest">This is a test component, you should delete it after framework created completely.</h1>
    <p @click="clickTest">{{msg}}</p>
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <figure class="fls-img-box1">
    </figure>
    <figure class="fls-img-box2">
      <img src="../../assets/images/global/girl1.jpg">
    </figure>
    <figure class="fls-img-box3"></figure>
    <p>{{tc}},{{getters}}</p>
  </div>
</template>
<script>
// import $ from 'jquery'
import { Group, Cell } from 'vux'
export default {
  name: 'test',
  data: function () {
    return {
      msg: 'test'
    }
  },
  created: function () {
    /**
     * [API请求示例]
     * @param  {[type]} res [description]
     * @return {[type]}     [description]
     */
    this.$http.post('/ajax/user/isSchoolPop').then(res => console.log('axios', res))
  },
  computed: {
    tc: function () {
      return this.$store.state.count
    },
    getters: function () {
      return this.$store.getters.dCount
    }
  },
  components: {
    Group,
    Cell
  },
  methods: {
    clickTest: function (event) {
      // vux 状态管理应用
      // this.$store.commit('increment')
      // 弹框全局应用
      this.$vux.alert.show({
        title: 'test alert!',
        content: 'this is a test alert box!'
      })
      // console.log('hello world', $('.fls-img-box1').width())
    }
  },
  /**
   * [beforeRouteEnter 添加页面进入时动画]
   * @param  {[type]}   t    [description]
   * @param  {[type]}   from [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  beforeRouteEnter (t, from, next) {
    console.log('enter test!')
    next()
  }
}
</script>
// 以下是添加外部样式的方法，我们统一用scss进行编译.
// 根据情况而定用外部文件还是内敛样式。一般原则，文件
// 较大，样式较多时用外部样式。文件较小，样式也相对较少时
// 应用内联样式。
<style scoped>
  h1{
    color: #ff0000;
  }
  p{
    color: green;
  }
  .fls-img-box1{
    width: 256px;
    height: 192px;
    background: url(../../assets/images/global/girl1.jpg) 0 0 no-repeat;
    background-size: 100%;
  }
</style>
<style>
  @import '../../assets/styles/pages/_test'
</style>
<style lang="less">
  @import '../../assets/styles/pages/_test';
</style>
<style lang="scss">
  @import '../../assets/styles/pages/test'
</style>
