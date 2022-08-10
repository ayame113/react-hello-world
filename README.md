# react-hello-world

Deno で React を動かすサンプル。

## ポイント

- CDN版Reactを使用
  - https://ja.reactjs.org/docs/cdn-links.html
- Denoを使用した開発
  - `import React from "https://esm.sh/react@17.0.2";`
    というコードに対してDenoが自動補完や診断を出す。このコードはそのままフロントエンドで動く（ビルドなし）
- ビルドレスフロントエンドの実現
  - https://deno.land/x/ts_serve@v1.3.0/mod.ts
    を使用してtsxファイルを直接フロントエンドで読む込めるようにする。
  - →書いたコードがそのまま動く。
  - index.htmlの中に`<script type="module" src="./test.tsx"></script>`という記述があり、何も考えずにtsxを読み込めばOK。
- Native ESMの使用
  - フロントエンドで直接ES Modulesを動かす
    - `<link rel="preload">`
    - HTTP/2
    - 巨大なnode_modulesなし
  - これらによってbundleした時と同等の速度をビルドなしで実現
