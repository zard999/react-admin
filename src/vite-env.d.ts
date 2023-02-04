/*
 * @Author: zyh
 * @Date: 2023-01-31 18:39:35
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-04 12:50:24
 * @FilePath: /vite-project/src/vite-env.d.ts
 * @Description: ts 处理类型方法
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
 */
/// <reference types="vite/client" />

// 类型提示显示展开后的信息
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

// 类型提示显示展开深层后的信息
type ExpandRecursively<T> = T extends object ? (T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never) : T;
