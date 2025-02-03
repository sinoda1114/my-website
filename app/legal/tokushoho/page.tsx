export const metadata = {
  title: '特定商取引法に基づく表記 | Waalsforce',
  description: 'Waalsorceの特定商取引法に基づく表記のページです。',
}

export default function TokushohoPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-8">特定商取引法に基づく表記</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">法人名</h2>
          <p>株式会社Waalsforce</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">所在地</h2>
          <p>〒150-0043</p>
          <p>東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F-C</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">電話番号</h2>
          <p>080-5299-7686</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">メールアドレス</h2>
          <p>shinoda.y@waalsforce.com</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">代表者</h2>
          <p>篠田敬廣</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">販売価格</h2>
          <p>各商品ページに記載</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">支払方法</h2>
          <ul className="list-disc ml-6">
            <li>クレジットカード決済</li>
            <li>銀行振込</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">代金の支払時期</h2>
          <ul className="list-disc ml-6">
            <li>クレジットカード決済：クレジットカード情報入力時に決済が完了します。
              <p className="text-sm text-gray-600 mt-1">（引落し日は、ご契約のクレジットカード会社の締め日・支払日をご確認ください。）</p>
            </li>
            <li>銀行振込：注文後3日以内</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">商品の引渡時期</h2>
          <p>注文確定後、即時提供（デジタルサービス・オンラインサービス）</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">商品の引渡方法</h2>
          <p>メールにてアクセス情報・ライセンス等を送付</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">返品・交換</h2>
          <ul className="list-disc ml-6">
            <li>お客様都合による返品・交換は不可</li>
            <li>商品に不備がある場合、当社負担で交換</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">販売数量</h2>
          <p>制限なし</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">動作環境</h2>
          <p>各商品ページに記載</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">商品の瑕疵に関する責任</h2>
          <p className="leading-relaxed">
            弊社のサービス・ソフトウェアに瑕疵があった場合、別に定める方法により対応いたします。
            ただし、本サービスの瑕疵に起因する直接的または間接的損害については、
            当社の故意または重大な過失による場合を除き、一切責任を負いません。
          </p>
        </section>
      </div>
    </div>
  )
}
