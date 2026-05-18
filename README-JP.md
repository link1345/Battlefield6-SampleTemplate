
# TypeScript Sample Template Program for Battlefield 6 Rule Editor

[※ Here is the English description of this repository.](./README.md)

このリポジトリは、BFのルールエディタ機能をTypeScriptで書く時に使用すると、楽に書けるように設計されています。

下記の機能を持っています。

* githubにpushすると、自動でeslintで文法チェックが入ります。
* `bun run build`を叩くと、複数のtsファイルを、1つのtsファイルにまとめる
  * BF Portalルールエディタは、1つのtsファイルしか受け付けないため
* `bfportal-vitest-mock`と`vitest`が導入済みなので、容易にユニットテストの使用出来ます。

## Questions / Support

ご質問やご意見がありましたら、PlumRiceのDiscordサーバーでお気軽にご連絡ください

このプロジェクトに関する議論は、適切なスレッド／チャンネルをご利用ください。

https://discord.gg/Zy65k8AxH2

## インストール

0. Bunをインストールする。Windowsの場合はPowerShellを開いて、公式インストーラーを実行する。
  ```powershell
  powershell -c "irm bun.sh/install.ps1|iex"
  ```
  インストール後はターミナルを開き直して、下記コマンドでBunが使えることを確認する。
  ```powershell
  bun --version
  ```
  https://bun.com/docs/installation
1. このリポジトリをダウンロードしてくる。
2. `code` フォルダに、Battlefield6公式から配布されているSDKの中の `PortalSDK/code` を入れる。
3. `bun install`コマンドを叩く。

## 使い方

1. `mods`フォルダに、プログラムを書く。
2. 書き終わったら、`bun run build`コマンドを叩く。
3. `dist/Script.ts`と`dist/String.json`をBF Portalのルールエディタに登録する。

### 文字列の設定の仕方

`dist/String.json`に載せたい文字列を登録します。

### テストの使い方

`bfportal-vitest-mock`パッケージを採用しています。導入・使い方は、下記をご確認ください。

https://github.com/link1345/bfportal-vitest-mock

テストは下記コマンドで実行できます。

```powershell
bun test
```
