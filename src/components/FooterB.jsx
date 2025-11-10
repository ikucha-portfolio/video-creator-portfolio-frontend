export function FooterB() {
  return (
    <footer className="py-10 px-6 lg:px-12 bg-[#FAFAFA] border-t border-[#E5E5E5] rounded-b-[24px]">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* コピーライト */}
        <p className="text-[#555] text-sm">
          © {new Date().getFullYear()} 映像工房. 無断転載を禁じます。
        </p>

        {/* リンク */}
        <div className="flex justify-center gap-10 text-sm text-[#89C4E1] font-normal">
          <a
            href="#"
            className="hover:text-[#6BB3D1] transition-colors duration-200"
          >
            プライバシーポリシー
          </a>
          <a
            href="#"
            className="hover:text-[#6BB3D1] transition-colors duration-200"
          >
            利用規約
          </a>
        </div>
      </div>
    </footer>
  );
}
