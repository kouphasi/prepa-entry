<template>
  <header class="header">
    <div class="left">
      <img src="./img/ess_logo.jpg" alt="" class="logo" />
      <h1>Sophia ESS Discussion</h1>
    </div>
    <nav class="right">
      <router-link to="/" class="box">プレパ参加登録</router-link>
      <router-link to="/check" class="box">登録確認</router-link>
      <router-link to="login" class="box">for Cheef</router-link>
    </nav>
  </header>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">About</router-link> |
    <router-link to="/cp">Check</router-link>
    <router-link to="/check">Checkp</router-link>
  </nav> -->

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: rgb(255, 253, 164); */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700;800&display=swap");
header {
  background-color: coral;
  display: flex;
  justify-content: space-between;
  font-family: "M PLUS Rounded 1c", sans-serif;
}
.logo {
  width: 4rem;
  height: 4rem;
  padding-top: 1rem;
}
.left {
  display: inline-flex;
}
.left {
  padding: 5px 15px;
}
.box {
  display: inline-flex;
  justify-content: right;
  text-align: right;
  margin: 1rem auto;
  padding: 0 2rem;
  /* border: 2px solid black; */
}
</style>
