<template>
  <div>
    <el-container id="header-container" class="container">
      <el-header id="el-header" class="container">

      </el-header>
    </el-container>
    <el-container id="aside-main-container" class="container">
      <el-aside id="el-aside" class="container">

      </el-aside>
      <el-main id="el-main" class="container">

      </el-main>
    </el-container>
  </div>

</template>

<script>

export default {
  name: "Main"
}
</script>

<style scoped>
.container {
  padding: 0;
  margin: 0;
  border: 1px solid blue;
  background-color: #faf7f7;
}

#header-container {
  border: 1px solid blue;
  height: 60px;
}

#aside-main-container {
  border: 1px solid yellow;
  height: 1000px;
}

#el-header {
  border: 1px solid red;
}

#el-aside {
  border: 1px solid green;
}

#el-main {
  border: 1px solid black;
}
</style>