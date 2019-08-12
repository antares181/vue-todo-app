<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 60px 0;
  /* background: #4aa3ff; */
  background: rgb(112, 230, 132);
  background: linear-gradient(
    215deg,
    rgba(112, 230, 132, 1) 3%,
    rgba(0, 206, 255, 1) 100%
  );
  min-height: 100vh;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.done {
  height: 17px;
  width: 17px;
  border-radius: 100px;
  background: #6fb500;
  position: absolute;
  right: 0;
  top: 5px;
}
.delete {
  height: 17px;
  width: 17px;
  border-radius: 100px;
  background: #dd0055;
  position: absolute;
  right: 25px;
  top: 5px;
}
.not-done {
  height: 17px;
  width: 17px;
  border-radius: 100px;
  background: #dadada;
  position: absolute;
  right: 0;
  top: 5px;
}
.todo-list {
  border-radius: 10px;
  padding: 30px 20px;
  margin: 0 auto;
  width: 380px;
  background: #fafafa;
  box-shadow: 0 0 61px 2px #00000026;
}
.todo-list h1 {
  text-align: center;
}
h1 {
  font-size: 16px;
}
input:focus,
button:focus {
  outline: none !important;
}
.form {
  border: 1px solid #e8e8e8;
  padding: 15px 20px;
  width: 100%;
  border-radius: 200px;
  font-size: 16px;
}
.header {
  display: flex;
  width: 100%;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
}
.content-item:hover {
  background: #fafafa;
}
.action {
  text-align: center;
  width: 100%;
}
.content-item {
  box-shadow: 0 0 30px 2px #00000026;
  font-size: 14px;
  border-radius: 40px;
  background: white;
  box-shadow: 0 5px 18px -8px #c7c7c7;
  padding: 15px 20px;
  margin-bottom: 10px;
}
.btn {
  margin-top: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background: blue;
  border-radius: 300px;
  padding: 20px 50px;
  border: none;
}
.btn-grey {
  margin-top: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background: grey;
  border-radius: 300px;
  padding: 20px 50px;
  border: none;
}
.btn-grey:hover {
  margin-top: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background: rgb(105, 105, 105);
  border-radius: 300px;
  padding: 20px 50px;
  border: none;
}
.btn:hover {
  margin-top: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background: rgb(11, 11, 170);
  border-radius: 300px;
  padding: 20px 50px;
  border: none;
}
</style>
