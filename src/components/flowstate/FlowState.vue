<template>
  <section>
    <ul class="flow-coloum">
      <li class="flow start">
        <div class="time-l">
          <span class="time-line">{{flowState.start[0][0]}}</span>
          <span class="time-line">{{flowState.start[0][1]}}</span>
        </div>
        <div class="cont-r">
          <p class="flow-title">{{flowState.start[1][0]}}</p>
          <p class="flow-cont">{{flowState.start[1][1]}}</p>
          <em class="flow-tag"></em>
        </div>
      </li>
      <li is="date-show" v-for="(item, index) in flowState.date" :dateFlow="item" :key="index+'date'"></li>
      <li is="process-show" v-for="(item, index) in flowState.process" :proFlow="item" :key="index+'process'"></li>
      <li class="flow end">
        <div class="time-l">
          <span class="time-line">{{flowState.end[0][0]}}</span>
          <span class="time-line">{{flowState.end[0][1]}}</span>
        </div>
        <div class="cont-r">
          <p class="flow-title">{{flowState.end[1][0]}}</p>
          <p class="flow-cont">{{flowState.end[1][1]}}</p>
          <em class="flow-tag"></em>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
let DateShow = {
  props: ['dateFlow'],
  template: `
      <li class="flow date">
        <div class="time-l"></div>
        <div class="cont-r">
          <em class="flow-tag  flow-date">{{dateFlow}}</em>
        </div>
      </li>
  `
}
let ProcessShow = {
  props: ['proFlow'],
  template: `
      <li class="flow process">
        <div class="time-l">
          <span class="time-line">{{proFlow[0][0]}}</span>
          <span class="time-line">{{proFlow[0][1]}}</span>
        </div>
        <div class="cont-r">
          <p class="flow-title">{{proFlow[1][0]}}</p>
          <p class="flow-cont">{{proFlow[1][1]}}</p>
          <em class="flow-tag"></em>
        </div>
      </li>
  `
}
export default {
  data: function () {
    return {
      type: '',
      flowState: {
        'start': [['01-01', '12:00'], ['同意', '数据服务部']],
        'date': ['2015', '2016'],
        'process': [[['01-01', '12:00'], ['同意', '数据服务部']], [['01-01', '12:00'], ['同意', '数据服务部']]],
        'end': [['01-01', '12:00'], ['同意', '数据服务部']]
      }
    }
  },
  components: {
    DateShow,
    ProcessShow
  }
}
</script>
<style>
  .flow-coloum {
    position: relative;
    width:9.2rem;
    margin: 0 auto;
  }
  .flow {
    position: relative;
    height: auto;
    width: 100%;
    display: flex;
    min-height: 1.173rem;
  }
  .flow.start {
    min-height: auto;
  }
  .time-l {
    width: 1.147rem;
  }
  .time-line{
    display: block;
    text-align: center;
  }
  .cont-r {
    position: relative;
    width: 7.173rem;
    padding-left: .453rem;
    border-left: 2px solid #43CAA8;
  }
  .start .cont-r, .end .cont-r {
    border-left: none;
    padding-left: 0;
  }

  .start .cont-r p, .end .cont-r p {
    padding-left: .453rem;
  }
  .start .cont-r p.flow-cont {
    border-left: 2px solid #43CAA8;
  }
  .end .cont-r p.flow-title {
    border-left: 2px solid #43CAA8;
  }
  .flow-tag {
    position: absolute;
    width: .27rem;
    height: .27rem;
    background-color: #43CAA8;
    border-radius: .133rem;
    top: .333rem;
    left: -0.1433rem;
    z-index:9;
  }
  .start .flow-tag, .end .flow-tag {
    left: -0.1313rem;
  }
  .flow-tag.flow-date{
    width: auto;
    height: auto;
    font-size: .186rem;
    line-height: 1.6;
    left:-.42rem;
    top:50%;
    background-color: #ffffff;
    margin-top: -.3rem;
    color: #43CAA8;
    font-weight: 200;
  }
</style>
