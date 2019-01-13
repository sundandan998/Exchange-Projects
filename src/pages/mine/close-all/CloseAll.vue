<template>
  <div>
      <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
      <el-dialog title="修改手机号/关闭手机验证/关闭谷歌验证/修改支付密码/重置支付密码" :visible.sync="centerDialogVisible" width="50%" center>
        <div class="exchange-mine-close-all-input">
          <p>短信验证码</p>
            <el-input class="exchange-mine-close-all-info" ></el-input>
            <el-input type="" class="exchange-mine-close-all-send" placeholder="发送验证码" ></el-input>
            <p>登录密码</p>
            <el-input class="exchange-mine-close-all-pass"></el-input>
            <p>谷歌验证码</p>
            <el-input class="exchange-mine-close-all-pass"></el-input>
        </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      centerDialogVisible: false
    }
  }
}
</script>
<style>
  .exchange-mine-close-all-input{
    margin-left:80px;
  }
  .exchange-mine-close-all-input p{
    margin:20px 0 10px 0;
  }
  .exchange-mine-close-all-info{
    width: 450px;
  }
  .exchange-mine-close-all-send{
    width: 110px;
  }
  .exchange-mine-close-all-pass{
    width: 560px;
  }
</style>
