// src/components/FooterB.jsx

export function FooterB() {
  return (
    <footer className="py-12 px-6 lg:px-12 bg-[color:var(--background)] border-t border-[color:var(--border)]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* コピーライト */}
          <div>
            <p className="text-[color:var(--muted-foreground)] text-sm">
              © {new Date().getFullYear()} 映像工房. All rights reserved.
            </p>
          </div>

          {/* ナビゲーションリンク */}
          <div className="flex gap-8 text-sm text-[color:var(--muted-foreground)]">
            <a href="#" className="hover:text-[color:var(--accent)] transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-[color:var(--accent)] transition-colors">
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
