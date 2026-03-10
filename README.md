# Portfolio (Next.js)

フロントエンドエンジニア向けのポートフォリオサイトです。  
`About / Skills / Projects / Contact` を1ページで構成し、実装内容を短時間で把握できる構成にしています。

## Deploy URL

- Production: `https://portfolio-neon-sigma-63.vercel.app/`

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Icons

## Main Sections

- `About`: 開発スタンス・強み
- `Skills`: 主要技術の一覧
- `Projects`: 各Demoの概要、実装機能、工夫した点、使用技術
- `Contact`: Email / GitHub への導線

## Local Setup

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

## Scripts

- `npm run dev`: 開発サーバー起動
- `npm run build`: 本番ビルド
- `npm run start`: 本番サーバー起動
- `npm run lint`: ESLint 実行

## Directory (excerpt)

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Header.tsx
    Footer.tsx
    sections/
      AboutSection.tsx
      SkillsSection.tsx
      ProjectsSection.tsx
      ContactSection.tsx
  constants/
    nav.ts
```
