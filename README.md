<!--
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-02-19 10:58:21
 -->

# TSMobile

记录学习 react-native-template-typescript

## 第一篇踩坑记录

安装过程中遇到的坑坑洼洼
https://juejin.im/post/5e4a4c17f265da570d7354c8

# 安装 redux 相关依赖

`yarn add redux react-redux redux-saga redux-persist redux-type-actions immer reselect @react-native-community/async-storage`

`yarn add @types/react-redux -D`

redux
react-redux // 链接 react 组件
redux-saga // 处理异步副作用
redux-persist // 持久记录 redux 状态 redux-type-actions // 增强类型提示
immer // 简化不可变类型状态的修改
reselect // 缓存 selector 以减少不必要的状态计算
@types/react-redux // react-redux 的类型声明
@react-native-community/async-storage 本地存储，APP 退出也能记录的状态

# 使用 react-navigation v5

https://reactnavigation.org/docs/en/getting-started.html

yarn add @react-native-community/masked-view @react-navigation/native @react-navigation/stack react-native-safe-area-context
