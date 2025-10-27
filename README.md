# 🎬 Video Creator Portfolio

駆け出しの動画クリエイター「Ryan Chronicle」のポートフォリオサイト。  
Figma デザインをもとに、React + Tailwind CSS で制作しました。  
実際のWeb上での見た目も重視し、デザイン再現度と操作感を両立しています。

## 🚀 使用技術
- React (Vite)
- Tailwind CSS
- Lucide React（アイコン）
- Node.js / npm
- デプロイ予定：Vercel

## 🎨 デザインコンセプト
- **カラー:** 優しい水色 × アイボリー × チャコールグレー  
- **フォント:** Noto Sans JP  
- **キーワード:** 「シンプル」「清潔感」「素朴なクリエイティブ」  
- **目的:** 人柄や信頼感が伝わるポートフォリオを目指して構築。

## 🗂 ディレクトリ構成
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # 固定ヘッダー・ナビゲーション
│   │   ├── Hero.jsx        # メインビジュアル
│   │   └── Works.jsx       # 作品一覧セクション
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── tailwind.config.js

## 💻 開発環境での実行方法

# 依存関係をインストール
npm install

# ローカルサーバーを起動
npm run dev

# ブラウザでアクセス
http://localhost:5173

## 🧭 今後の追加予定
- Service / Flow セクションの追加  
- Contact フォームの実装  
- Works セクションのモーダル表示  
- Vercel へのデプロイ

## 👩‍💻 制作者
**Ami Ikuta**  
Nurse → Web Designer / Frontend Developer  
SUNABACO Ebetsu 2025秋 受講生

## 🛠 更新履歴（Development Log）

### 📅 2025-10-27  
#### 🔹 編集内容
- React + Tailwind 構成でプロジェクトを再構築  
- **フロントエンド（my-portfolio）** と **バックエンド（Flask）** を分離し安全管理化  
- Vite + React + Tailwind の環境構築を完了  
- `.gitignore` 設定で `node_modules` 除外確認済み  
- `Header.jsx` を実装（固定ヘッダー＋ハンバーガーメニュー対応）  
- Lucide React で `Menu` / `X` アイコン導入  
- `index.css` に Tailwind ベース設定を追加し、Figmaデザインとの再現を調整  
- 自動翻訳による文字変換（"TARO YAMADA" → "山田太郎"）の対策として `translate="no"` を導入  
- README.md 新規作成・GitHubへ初プッシュ！

---

#### 💡 学び・気づき
- Tailwind と Figma の差を埋めるには「雰囲気の再現」が大事。ピクセル単位より印象重視。  
- Vite プロジェクトでは `index.css` と `tailwind.config.js` の関係を理解しておくと、テーマカラーの調整がスムーズ。  
- React + Tailwind の構成は**デザインの反映スピードが圧倒的に速い！**  
- ブラウザ自動翻訳は想定外の崩れを起こす。`translate="no"`で防げる。  
- GitHub に初めて README を整理してプッシュ → **「作品として管理する」実感が生まれた日。**  
- 今後はセクション単位でブランチを切り、変更履歴を明確に残していく！

