<template>
 <div class="login">
  <h1 class="login-title">ログイン</h1>
  <div class="login-box">
    <form action="">
      <input type="text" placeholder="IDを入力してください" class="input">
      <br>
      <input type="password" placeholder="パスワードを入力してください" class="input">
      <br>
      <input type="submit" value="ログインする" class="login-button">
    </form>
  </div>
 </div>
</template>

<script>

export default {
}

</script>

<style scoped>
.main{
  border-top: 2px solid #fff;
  color: #fff;
  text-align: center;
  height: 100vh;
}
.login-title{
  padding-top: 70px;
}
.input{
  width: 30em;
  padding: 10px;
  margin-top: 50px;
  border: none;
  border-bottom: #fff 2px solid;
  background-color: #000;
  color: #fff;
  outline: none;
}
.input:focus{
  outline: none;
}
.login-button{
  margin-top: 50px;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;
  color: #000;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
.login-button:active{
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.login-button:focus{
  outline: none;
}
</style>