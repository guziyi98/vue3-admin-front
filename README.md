# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

node: > 17.9
### vscode相关配置
1. vue3 需要禁用 vscode 的 vetur，使用 Volar
2. vscode 需要安装 eslint,eslint 中集成 prettier 配置,prettier只是用来格式化代码，这里需要新建.prettierrc.js文件，此文件为了让Prettier插件能够识别用户配置，配置需与.eslintrc.js中保持一致
3. 安装editorcONFIG for vs code插件，新建.editorconfig文件
4. 安装上述插件都是为了保证项目代码风格统一，eslint负责校验代码，prettier负责统一代码风格，editorconfig保证编辑器基本设置一致

## commitlint 规范代码提交信息
1. build: 主要目的是修改项目构建系统(例如glup, webpack, rollup)的提交
2. chore: 不属于以上类型的其他类型ci主要目的是修改项目继续集成流程的提交
3. docs: 文档更新
4. feat: 新功能，新特性
5. fix: 修改bug
6. perf: 更改代码，以提高性能
7. refactor: 代码重构
8. revert: 恢复上一次提交
9. style: 不影响程序逻辑的代码修改
10. test: 测试用例新增，修改
