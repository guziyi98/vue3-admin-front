<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar></sidebar>
    </div>
    <div class="main-container">
      <div class="header">
        <navbar></navbar>
        <div class="tags-view">tagsview</div>
      </div>
      <div class="app-main">
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;

  .main-container {
    overflow: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      background: cyan;
      .navbar {
        height: 50px;
        background: #1890ff;
      }
      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }
    .app-main {
      /* main = 100% - navbar + tagsview */
      min-height: calc(100vh - 84px);
      background: red;
    }
  }
}
</style>
