export default function Works() {
  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">WORKS</h2>
        <p className="text-gray-600 mb-10">制作実績</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1709359095473-c50228fc8923?auto=format&fit=crop&w=800&q=80"
              alt="Work 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="font-medium text-gray-800 mb-1">企業プロモーション映像</h3>
              <p className="text-sm text-gray-600">Corporate</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1630583206477-f232a811f672?auto=format&fit=crop&w=800&q=80"
              alt="Work 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="font-medium text-gray-800 mb-1">商品紹介動画</h3>
              <p className="text-sm text-gray-600">Product</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1614955177711-2540ad25432b?auto=format&fit=crop&w=800&q=80"
              alt="Work 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="font-medium text-gray-800 mb-1">YouTube用編集</h3>
              <p className="text-sm text-gray-600">YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
