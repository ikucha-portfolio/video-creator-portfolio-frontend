export function FooterB() {
  return (
    <footer
      className="
        relative py-14 px-6 lg:px-12
        bg-transparent text-center
        text-white/70
      "
    >
      {/* ★ 上部のグラデーション区切り線（CONTACT と同じ） */}
      <div
        className="
          absolute top-0 left-0 right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#A9D7E8]/80
          to-transparent
        "
      />

      <div className="max-w-4xl mx-auto space-y-6 pt-10">

        {/* 屋号（世界観に統一） */}
        <p
          className="
            font-mincho
            text-white/70
            tracking-wide
            text-[15px]
          "
          translate="no"
        >
          RYAN.CHRONICLE
        </p>

        {/* コピーライト */}
        <p className="text-white/50 text-xs tracking-wide">
          © {new Date().getFullYear()} RYAN.CHRONICLE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
