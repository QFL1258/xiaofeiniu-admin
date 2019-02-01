<template>
  <div class="login">
    <h1>菜品列表</h1>
    <el-tabs type='border-card'>
      <el-tab-pane v-for='c in dishList' :key='c.cid' :label='c.cname'>
        <span slot='label'>
          <el-badge :value='c.dishList.length' class="item">{{c.cname}}</el-badge>
        </span>
        <el-row>
          <el-col v-for='d in c.dishList' :xs='12' :md='6' :lg='4' :xl='8' :key='d.cname'>
            <!--<xfn-dish :data='d'></xfn-dish>-->
            {{d.title}}
           <img :src="require('../assets/dish/'+d.imgUrl)" alt='' style='max-width:100%;'>  
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data(){
    return {
      dishList:[]//[{cid:x,cname:x,dishLish:[]}]
    }
  },
  mounted(){
    //异步获取菜品列表
    var url=this.$store.state.globalSettings.apiUrl+'/admin/dish';
    this.$axios.get(url).then(({data})=>{
      console.log(data)
        this.dishList=data;
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>
<style lang="scss">
  .item {
  margin: 10px;
}
</style>
