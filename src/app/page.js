import Image from "next/image";
import { UserGroupIcon, CurrencyYenIcon, SparklesIcon, CalendarIcon, UserIcon, BeakerIcon, FaceSmileIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="pt-14">
        <div className="w-full">
        <Image
            src="/top.png"
            alt="スタッフが輝き、成長し、長く働き続けられるサロン"
            width={430}
            height={600}
            className="w-full"
          priority
        />
        </div>

        {/* 悩みの代弁セクション */}
        <section className="bg-[#ffa500] text-white py-12 px-6">
          <div className="space-y-8">
            {/* チェックリスト */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 mt-4">
                  <Image
                    src="/nayamu.png"
                    alt="悩んでいる人のアイコン"
                    width={36}
                    height={36}
                    className="w-full h-full"
                  />
                </div>
                <div className="relative bg-white text-gray-800 p-4 rounded-[2rem] rounded-bl-[1rem] before:absolute before:content-[''] before:w-6 before:h-6 before:bg-white before:rounded-full before:left-[-0.75rem] before:top-[40%] after:absolute after:content-[''] after:w-4 after:h-4 after:bg-white after:rounded-full after:left-[-1rem] after:top-[50%] shadow-lg">
                  <p className="text-sm leading-relaxed font-bold">早くデビューしてスタートに立ちたいのに<br />3ヶ月以内のデビューは難しそう…</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/nayamu.png"
                    alt="悩んでいる人のアイコン"
                    width={36}
                    height={36}
                    className="w-full h-full"
                  />
                </div>
                <div className="relative bg-white text-gray-800 p-4 rounded-[2rem] rounded-bl-[1rem] before:absolute before:content-[''] before:w-6 before:h-6 before:bg-white before:rounded-full before:left-[-0.75rem] before:top-[40%] after:absolute after:content-[''] after:w-4 after:h-4 after:bg-white after:rounded-full after:left-[-1rem] after:top-[50%] shadow-lg">
                  <p className="text-1xl leading-relaxed font-bold">プライベートと両立しながら稼ぎたい…</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 mt-4">
                  <Image
                    src="/nayamu.png"
                    alt="悩んでいる人のアイコン"
                    width={36}
                    height={36}
                    className="w-full h-full"
                  />
                </div>
                <div className="relative bg-white text-gray-800 p-4 rounded-[2rem] rounded-bl-[1rem] before:absolute before:content-[''] before:w-6 before:h-6 before:bg-white before:rounded-full before:left-[-0.75rem] before:top-[40%] after:absolute after:content-[''] after:w-4 after:h-4 after:bg-white after:rounded-full after:left-[-1rem] after:top-[50%] shadow-lg">
                  <p className="text-1xl leading-relaxed font-bold">デビュー後の集客が不安。<br />集客力があるサロンで働きたい…</p>
                </div>
              </div>
            </div>

            {/* 解決セクション */}
            <div className="space-y-6 pt-8">
              <h2 className="text-3xl font-black text-white text-left">U-topiaなら</h2>
              <div className="space-y-4">
                <div className="inline-block">
                  <p className="text-xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">最短3ヶ月でデビュー可能！</p>
                </div>
                <div className="inline-block">
                  <p className="text-xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">24歳で年収600万円以上も！<br />将来の不安を解消！</p>
                </div>
                <div className="inline-block">
                  <p className="text-xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">担当できるお客様が120名以上！<br />町田エリア圧倒的な集客力！</p>
                </div>
              </div>
            </div>

            {/* 呼びかけテキスト */}
            <div className="pt-6 pb-6 space-y-3">
            <p className="text-3xl font-bold leading-relaxed whitespace-nowrap">あなたの理想の美容師人生、</p>
              <p className="text-3xl font-bold leading-relaxed whitespace-nowrap">一緒に叶えていきませんか？</p>
            </div>
          </div>
        </section>

        {/* セクション間の画像 */}
        <div className="relative w-full h-[300px] -mt-8">
          <Image
            src="/test1.png"
            alt="明るく活気のあるサロンの様子"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffa500]/50 to-[#fff9f0]/50 mix-blend-overlay"></div>
        </div>

        {/* 転職理由データセクション */}
        <section className="py-10 px-6 bg-[#fff9f0]">
          <div className="space-y-6">
            {/* タイトル */}
            <div className="space-y-3">
              <h2 className="text-3xl font-black">美容師の<span className="text-[#ff0059] font-black">転職理由トップ3</span>を</h2>
              <h2 className="text-3xl font-black">充実の制度と</h2>
              <h2 className="text-3xl font-black">独自のカリキュラムで<span className="text-[#ff0059] font-black">解消</span></h2>
            </div>

            {/* データバー */}
            <div className="space-y-6 pt-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xl font-bold text-gray-800">サロンの雰囲気・人間関係</p>
                  <p className="text-3xl font-black text-[#ff0059]">34.7%</p>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-gradient-to-r from-[#ff8c00] to-[#ffa500] h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xl font-bold text-gray-800">給与が上がらない</p>
                  <p className="text-3xl font-black text-[#ff0059]">27.8%</p>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-gradient-to-r from-[#ff8c00] to-[#ffa500] h-3 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xl font-bold text-gray-800">拘束時間が長い</p>
                  <p className="text-3xl font-black text-[#ff0059]">15.6%</p>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-gradient-to-r from-[#ff8c00] to-[#ffa500] h-3 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>

            {/* 解決メッセージ */}
            <div className="pt-8 space-y-3">
              <p className="text-3xl font-bold">給料、仲間、時間</p>
              <div className="space-y-1">
                <p className="text-3xl font-bold">
                  <span className="underline decoration-[#ffa500] decoration-4 underline-offset-4">U-topia</span>なら
                </p>
                <p className="text-3xl text-[#ff0059] font-bold">悩みになりません。</p>
              </div>
            </div>

            {/* 出典 */}
            <p className="text-xs text-gray-500 pt-8">
              ※1 U-topia調査
            </p>
          </div>
        </section>

        {/* ワクワクセクション */}
        <section className="py-16 px-6 bg-[#ffa500] text-white">
          <div className="space-y-8">
            {/* タイトル */}
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight">
                毎日が楽しい！
              </h2>
              <h2 className="text-4xl font-bold leading-tight">
                U-topiaが選ばれ続ける
              </h2>
              <h2 className="text-4xl font-bold leading-tight">
                3つのワケ
              </h2>
            </div>

            {/* ポイント */}
            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">社内イベント参加率は96.9%※</p>
              </div>
              <div className="inline-block">
                <p className="text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">笑顔と刺激が絶えない、</p>
              </div>
              <div className="inline-block">
                <p className="text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">居心地抜群のサロンです。</p>
              </div>
            </div>

            {/* 画像グリッド */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Image
                src="/event1.jpg"
                alt="社内イベントの様子1"
                width={200}
                height={150}
                className="rounded-lg w-full h-[150px] object-cover"
              />
          <Image
                src="/event2.jpg"
                alt="社内イベントの様子2"
                width={200}
                height={150}
                className="rounded-lg w-full h-[150px] object-cover"
              />
          <Image
                src="/event3.jpg"
                alt="社内イベントの様子3"
                width={200}
                height={150}
                className="rounded-lg w-full h-[150px] object-cover"
              />
          <Image
                src="/event4.jpg"
                alt="社内イベントの様子4"
                width={200}
                height={150}
                className="rounded-lg w-full h-[150px] object-cover"
              />
            </div>

            {/* 出典 */}
            <p className="text-xs pt-4">
              ※2024年実績
            </p>
          </div>
        </section>

        {/* 給与セクション */}
        <section className="py-16 px-6 bg-[#ffa500] text-white">
          <div className="space-y-8">

            {/* 給与情報 */}
            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">正規雇用サロンで</p>
              </div>
              <div className="inline-block">
                <p className="text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">平均月収は40万円オーバー</p>
              </div>
              <div className="inline-block">
                <p className="text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">（新卒1年生も35万オーバー）</p>
              </div>
              <div className="inline-block">
                <p className="text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">業界トップクラスの歩合率で</p>
              </div>
              <div className="inline-block">
                <p className="text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">スタッフに還元します。</p>
              </div>
            </div>

            {/* 歩合率情報 */}
            <div className="pt-8">
              <p className="text-1xl font-black pb-4">⚫︎正社員の歩合率</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-white to-white/95 p-4 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 text-center">
                  <p className="text-[#ff8c00] text-lg font-black tracking-wide">指名</p>
                  <p className="text-[#ff8c00] text-4xl font-black">40%</p>
                </div>
                <div className="bg-gradient-to-br from-white to-white/95 p-4 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 text-center">
                  <p className="text-[#ff8c00] text-lg font-black tracking-wide">フリー</p>
                  <p className="text-[#ff8c00] text-4xl font-black">30%</p>
                </div>
                <div className="bg-gradient-to-br from-white to-white/95 p-4 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 text-center">
                  <p className="text-[#ff8c00] text-lg font-black tracking-wide">店販歩合</p>
                  <p className="text-[#ff8c00] text-4xl font-black">10%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 休暇制度セクション */}
        <section className="py-16 px-6 bg-[#ffa500] text-white">
          <div className="space-y-8">
            {/* タイトル */}
            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">休みを充実させて</p>
              </div>
              <div className="inline-block">
                <p className="text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200">オンも、オフも充実。</p>
              </div>
            </div>

            {/* 休暇制度リスト */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-white/95 p-6 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
                <p className="text-[#ff8c00] text-2xl font-black mb-4 tracking-wide">完全週休二日</p>
                <p className="text-gray-700 leading-relaxed">規定売上をクリアすれば、公休を4日まで追加OK。<br />働いた分だけ"まるっと休める"仕組み。</p>
              </div>

              <div className="bg-gradient-to-br from-white to-white/95 p-6 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
                <p className="text-[#ff8c00] text-2xl font-black mb-4 tracking-wide">有給完全法遵通り</p>
                <p className="text-gray-700 leading-relaxed">休暇1日を「午前休+午後休」の2枠に分割できる制度。<br />役所手続きや通院、子どもの学校行事など"半日で済む用事"にちょうどいい柔軟さです。</p>
              </div>

              <div className="bg-gradient-to-br from-white to-white/95 p-6 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
                <p className="text-[#ff8c00] text-2xl font-black mb-4 tracking-wide">学びも勤務時間に</p>
                <p className="text-gray-700 leading-relaxed">月1回まで、レポートを出せば外部講習の受講時間もそのまま勤務時間にカウントされます。</p>
              </div>

              <div className="bg-gradient-to-br from-white to-white/95 p-6 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
                <p className="text-[#ff8c00] text-2xl font-black mb-4 tracking-wide">土日も休める</p>
                <p className="text-gray-700 leading-relaxed">月の公休は6〜10日、1日の勤務時間は6〜8時間の中から自由に設定可能。<br />ほかの働き方をご希望の場合も、遠慮なくご相談ください。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 数字で見るu-topiaセクション */}
        <section className="py-10 px-6 bg-[#fff9f0]">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">数字で見るU-topia</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {/* 平均年齢 */}
              <div className="bg-white shadow p-6 flex flex-col items-center">
              <p className="text-gray-600 mb-2">平均年齢</p>
                <div className="flex-1 flex items-center justify-center">
                  <UserGroupIcon className="w-12 h-12 text-[#ffa500]" />
                </div>
                <p className="text-4xl font-bold text-center">24.3<span className="text-2xl">歳</span></p>
              </div>

              {/* 平均月収 */}
              <div className="bg-white shadow p-6 flex flex-col items-center">
                <p className="text-gray-600 mb-2">平均月収</p>
                <div className="h-24 flex items-center justify-center">
                  <CurrencyYenIcon className="w-12 h-12 text-[#ffa500]" />
                </div>
                <p className="text-4xl font-bold">約40<span className="text-2xl">万円</span></p>
                
              </div>

              {/* デビュー初月の売上平均 */}
              <div className="bg-white shadow p-6 flex flex-col items-center">
                <p className="text-gray-600 mb-2">デビュー初月の売上平均</p>
                <div className="h-24 flex items-center justify-center">
                  <SparklesIcon className="w-12 h-12 text-[#ffa500]" />
                </div>
                <p className="text-4xl font-bold">約62<span className="text-2xl">万円</span></p>
              </div>

              {/* デビューまでの平均期間 */}
              <div className="bg-white shadow p-6 flex flex-col items-center">
                <p className="text-gray-600 mb-2">デビューまでの平均期間</p>
                <div className="h-24 flex items-center justify-center">
                  <CalendarIcon className="w-12 h-12 text-[#ffa500]" />
                </div>
                <p className="text-4xl font-bold">6.5<span className="text-2xl">ヶ月</span></p>
              </div>

              {/* デビュー月の平均新規入客数 */}
              <div className="bg-white shadow p-6 flex flex-col items-center">
                <p className="text-gray-600 mb-2">デビュー月の平均新規入客数</p>
                <div className="h-24 flex items-center justify-center">
                  <UserIcon className="w-12 h-12 text-[#ffa500] stroke-2" />
                </div>
                <p className="text-4xl font-bold">74<span className="text-2xl">名</span></p>
              </div>

              {/* 有給取得率 */}
              <div className="bg-white shadow p-6 flex flex-col items-center">
                <p className="text-gray-600 mb-2">有給取得率</p>
                <div className="h-24 flex items-center justify-center">
                  <BeakerIcon className="w-12 h-12 text-[#ffa500]" />
                </div>
                <p className="text-4xl font-bold">100<span className="text-2xl">%</span></p>
              
              </div>

              {/* 社内イベントの参加率 */}
              <div className="bg-white shadow p-6 flex flex-col items-center">
                <p className="text-gray-600 mb-2">社内イベントの参加率</p>
                <div className="h-24 flex items-center justify-center">
                  <FaceSmileIcon className="w-12 h-12 text-[#ffa500]" />
                </div>
                <p className="text-4xl font-bold">89.2<span className="text-2xl">%</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* よくある質問セクション */}
        <section className="py-16 px-6 bg-[#ffa500] text-white">
          <div className="space-y-8">
            {/* タイトル */}
            <h2 className="text-4xl font-bold">
              u-topiaに寄せられる<br />
              よくあるご質問
            </h2>

            {/* FAQ リスト */}
            <div className="space-y-6">
              {/* 質問1 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#ffa500] text-xl">?</span>
                    </div>
                  </div>
                  <p className="text-xl">人間関係がギスギスしていないか心配です...</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-700">
                    毎月の社内イベントには89.2%が参加し、スタッフ同士の距離が近いのが特徴。シャンプーや施術の合間に先輩が自然と声を掛け合う文化があり、疑問をその場で解決できます。また、苦手分野に合わせた個別カリキュラムが用意されているので、置き去り感ゼロ。
                  </p>
                </div>
              </div>

              {/* 質問2 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#ffa500] text-xl">?</span>
                    </div>
                  </div>
                  <p className="text-xl">デビュー前の費用負担が不安です。</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-700">
                    デビュー前はもちろん、スタイリストになってからも"お金"と"時間"を会社がサポートします。
                  </p>
                  <div className="mt-4 space-y-6">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">● デビュー前</p>
                      <p className="text-gray-700">・アカデミー完備――営業時間内に練習でき、ウィッグは無料配布。</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">● デビュー後</p>
                      <p className="text-gray-700">・外部講習は月1回まで勤務時間扱い（レポート提出のみ）。</p>
                      <p className="text-gray-700">・ミニモ手数料＆撮影モデル費は全額会社負担で集客とブランディングを後押し。</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    入社後ずっと、自己負担ゼロでスキルと売上を伸ばせる環境です。
                  </p>
                </div>
              </div>

              {/* 質問3 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#ffa500] text-xl">?</span>
                    </div>
                  </div>
                  <p className="text-xl">指名ゼロでも本当に稼げますか？</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-700">
                    はい。初月から100名以上を自動集客する仕組みがあり、ゼロスタートでも平均で月120名を担当しています。完全歩合制なので成果はダイレクトに給与へ反映され、実際に前職の倍近い収入へ伸びたスタッフも多数。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className="py-16 px-6 bg-[#fff9f0]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                休みも収入も仲間も、<br />
                妥協しない働き方を。
              </h2>
              <p className="text-lg text-gray-600">
                少しでも興味が湧いた方は以下のフォームよりお問い合わせください。<br />
                まだ応募するのは…という方でも大丈夫！<br />
                気軽にご質問ください。
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <select className="w-full p-4 rounded-lg bg-white border border-gray-200" defaultValue="">
                  <option value="" disabled>希望職種</option>
                  <option value="stylist">スタイリスト</option>
                  <option value="assistant">アシスタント</option>
                </select>

                <select className="w-full p-4 rounded-lg bg-white border border-gray-200" defaultValue="">
                  <option value="" disabled>希望店舗</option>
                  <option value="shibuya">渋谷店</option>
                  <option value="shinjuku">新宿店</option>
                </select>

                <input
                  type="text"
                  placeholder="お名前"
                  className="w-full p-4 rounded-lg bg-white border border-gray-200"
                />

                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="w-full p-4 rounded-lg bg-white border border-gray-200"
                />

                <input
                  type="tel"
                  placeholder="電話番号"
                  className="w-full p-4 rounded-lg bg-white border border-gray-200"
                />

                <textarea
                  placeholder="メッセージ"
                  rows="5"
                  className="w-full p-4 rounded-lg bg-white border border-gray-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ffa500] text-white py-4 px-6 rounded-full text-xl font-medium hover:bg-[#FF6B6B] transition-colors"
              >
                問い合わせを送信する
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}