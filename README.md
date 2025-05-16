# 機械学習の活性化関数と評価指標の可視化ツール

## 概要
このプロジェクトはReactとDockerを使用して、機械学習における重要な概念を視覚的に学習するためのツールです。

## 主な機能
- **活性化関数の可視化**：
  - Sigmoid関数
  - ReLU関数
  - Leaky ReLU関数
  - tanh関数
  - Softmax関数の挙動
- **評価指標の可視化**：
  - 混同行列
  - 精度、再現率、F値などの指標

## 技術スタック
- React.js



# G検定のための視覚化ツール

G検定（ジェネラリスト検定）対策として重要な「活性化関数」や「評価指標」を直感的に理解するための視覚化Webアプリです。  
**React + Recharts** によりシンプルかつ見やすいグラフと比較表を提供します。

🔗 **公開ページ**: [https://matsu-essence.github.io/g-cert-master-public/](https://matsu-essence.github.io/g-cert-master-public/)

---

## ✨ 特徴

- **活性化関数の可視化**：
  - Sigmoid関数
  - ReLU関数
  - Leaky ReLU関数
  - tanh関数
  - Softmax関数の挙動
- **評価指標の可視化**：
  - 混同行列
  - 精度、再現率、F値などの指標
- 活性化関数の**出力範囲・導関数・利点・欠点・用途**を一覧で整理
- G検定の理解を**視覚的・直感的に深める**設計
- シンプルなUI、スマートフォン表示にも配慮

---

## 📦 使用技術

- React（Create React App）
- Recharts（グラフ描画ライブラリ）
- GitHub Pages（ホスティング）

---

## 🚀 ローカル環境での動作方法

```bash
git clone https://github.com/matsu-essence/g-cert-master-public.git
cd g-cert-master-public
npm install
npm start
