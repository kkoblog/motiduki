import Image from 'next/image';
import { UserGroupIcon, CurrencyYenIcon, SparklesIcon, CalendarIcon, UserIcon, BeakerIcon, FaceSmileIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <main className='pt-16'>
        <div className="relative">
          <Image
            src='/top2.png'
            alt='スタッフが輝き、成長し、長く働き続けられるサロン'
            width={430}
            height={600}
            className='w-full'
            priority
          />
          {/* スライドショー */}
          <div className="absolute -top-[3%] left-0 right-0 h-[500px] flex gap-4 overflow-hidden px-4">
            <div className="flex gap-8 animate-slide items-center h-full">
              {/* 最初のセット */}
              <div className="flex-none w-[280px] h-[350px] rounded-b-[140px] rounded-t-[0px] overflow-hidden transform -translate-y-4 shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/maintop1.jpg"
                  alt="スタッフ1"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-none w-[280px] h-[350px] rounded-b-[140px] rounded-t-[0px] overflow-hidden transform translate-y-4 shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/staff5.jpg"
                  alt="スタッフ2"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-none w-[280px] h-[350px] rounded-b-[140px] rounded-t-[0px] overflow-hidden transform -translate-y-4 shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/staff4.jpg"
                  alt="スタッフ3"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-none w-[280px] h-[350px] rounded-b-[140px] rounded-t-[0px] overflow-hidden transform translate-y-4 shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/maintop2.jpg"
                  alt="スタッフ4"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-none w-[280px] h-[350px] rounded-b-[140px] rounded-t-[0px] overflow-hidden transform -translate-y-4 shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/maintop3.jpg"
                  alt="スタッフ5"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* 無限ループのために同じ画像を繰り返し */}
              <div className="flex-none w-[280px] h-[350px] rounded-b-[140px] rounded-t-[0px] overflow-hidden transform -translate-y-4 shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/maintop1.jpg"
                  alt="スタッフ1"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-none w-[280px] h-[350px] rounded-b-[140px] rounded-t-[0px] overflow-hidden transform translate-y-4 shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/staff5.jpg"
                  alt="スタッフ2"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-none w-[280px] h-[350px] rounded-b-[140px] rounded-t-[0px] overflow-hidden transform -translate-y-4 shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/staff4.jpg"
                  alt="スタッフ3"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-none w-[280px] h-[350px] rounded-b-[140px] rounded-t-[0px] overflow-hidden transform translate-y-4 shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/maintop2.jpg"
                  alt="スタッフ4"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-none w-[280px] h-[350px] rounded-b-[140px] rounded-t-[0px] overflow-hidden transform -translate-y-4 shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/maintop3.jpg"
                  alt="スタッフ5"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[60%] h-[10%] cursor-pointer z-10 bg-transparent"
            aria-label="まずは話を聞いてみる"
          />
        </div>

        {/* 悩みの代弁セクション */}
        <section className='bg-[#fff9f0] text-gray-800 py-12 px-6'>
          <div className='space-y-8'>
            {/* チェックリスト */}
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
              <div className='w-12 h-12 flex items-center justify-center flex-shrink-0 mt-4'>
                  <Image
                    src='/nayamu.png'
                    alt='悩んでいる人のアイコン'
                    width={36}
                    height={36}
                    className='w-full h-full'
                  />
                </div>
                <div className='relative bg-white text-gray-800 p-4 rounded-[2rem] rounded-bl-[1rem] before:absolute before:content-[none] before:w-6 before:h-6 before:bg-white before:rounded-full before:left-[-0.75rem] before:top-[40%] after:absolute after:content-[none] after:w-4 after:h-4 after:bg-white after:rounded-full after:left-[-1rem] after:top-[50%] shadow-lg'>
                  <p className='text-sm leading-relaxed font-bold'>早くデビューして<br />スタートに立ちたいのに、<br />3ヶ月以内のデビューは難しそう…</p>
                </div>
              </div>
              
              <div className='flex items-center space-x-3'>
                <div className='w-12 h-12 flex items-center justify-center flex-shrink-0'>
                  <Image
                    src='/nayamu.png'
                    alt='悩んでいる人のアイコン'
                    width={36}
                    height={36}
                    className='w-full h-full'
                  />
                </div>
                <div className='relative bg-white text-gray-800 p-4 rounded-[2rem] rounded-bl-[1rem] before:absolute before:content-[none] before:w-6 before:h-6 before:bg-white before:rounded-full before:left-[-0.75rem] before:top-[40%] after:absolute after:content-[none] after:w-4 after:h-4 after:bg-white after:rounded-full after:left-[-1rem] after:top-[50%] shadow-lg'>
                  <p className='text-1xl leading-relaxed font-bold'>プライベートと両立しながら稼ぎたい…</p>
                </div>
              </div>
              
              <div className='flex items-start space-x-3'>
              <div className='w-12 h-12 flex items-center justify-center flex-shrink-0 mt-4'>
                  <Image
                    src='/nayamu.png'
                    alt='悩んでいる人のアイコン'
                    width={36}
                    height={36}
                    className='w-full h-full'
                  />
                </div>
                <div className='relative bg-white text-gray-800 p-4 rounded-[2rem] rounded-bl-[1rem] before:absolute before:content-[none] before:w-6 before:h-6 before:bg-white before:rounded-full before:left-[-0.75rem] before:top-[40%] after:absolute after:content-[none] after:w-4 after:h-4 after:bg-white after:rounded-full after:left-[-1rem] after:top-[50%] shadow-lg'>
                  <p className='text-1xl leading-relaxed font-bold'>デビュー後の集客が不安。<br />集客力があるサロンで働きたい…</p>
                </div>
              </div>
            </div>

            {/* 解決セクション */}
            <div className='space-y-6 pt-8'>
              <h2 className='text-3xl font-black text-gray-800 text-left'>U-topiaなら</h2>
              <div className='space-y-4'>
                <div className='inline-block'>
                  <p className='text-xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>最短3ヶ月でデビュー可能！</p>
                </div>
                <div className='inline-block'>
                  <p className='text-xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>24歳で年収600万円以上も！<br />将来の不安を解消！</p>
                </div>
                <div className='inline-block'>
                  <p className='text-xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>担当できるお客様が120名以上！<br />町田エリア圧倒的な集客力！</p>
                </div>
              </div>
            </div>

            {/* 呼びかけテキスト */}
            <div className='pt-6 pb-6 space-y-3'>
               <div className='text-[26px] font-bold leading-relaxed text-left px-0'>
                <p className='mb-2'>あなたの<br />理想の美容師人生、</p>
                <p className='mb-0'>一緒に叶えていきませんか？</p>
                
              </div>
            </div>
          </div>
        </section>

        {/* セクション間の画像 */}
        <div className='relative w-full h-[300px] -mt-8'>
            <Image
            src='/topzenin.jpg'
            alt='明るく活気のあるサロンの様子'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-b from-[#ffa500]/50 to-[#fff9f0]/50 mix-blend-overlay'></div>
        </div>

        {/* 転職理由データセクション */}
        <section className='py-10 px-6 bg-[#fff9f0]'>
          <div className='space-y-6'>
            {/* タイトル */}
            <div className='space-y-3'>
              <h2 className='text-4xl font-black'>美容師の</h2>
              <h2 className='text-4xl font-black'><span className='text-[#ff0059] font-black'>転職理由トップ3</span>を</h2>
              <h2 className='text-4xl font-black'>充実の制度と</h2>
              <h2 className='text-4xl font-black'>独自のカリキュラム</h2>
              <h2 className='text-4xl font-black'>で<span className='text-[#ff0059] font-black'>解消</span></h2>
            </div>

            {/* データバー */}
            <div className='space-y-6 pt-4'>
              <div className='bg-white p-6 rounded-2xl shadow-lg'>
                <div className='flex justify-between items-center mb-2'>
                  <p className='text-xl font-bold text-gray-800'>サロンの雰囲気・人間関係</p>
                  <p className='text-3xl font-black text-[#ff0059]'>34.7%</p>
                </div>
                <div className='w-full bg-gray-100 rounded-full h-3'>
                  <div className='bg-gradient-to-r from-[#ff8c00] to-[#ffa500] h-3 rounded-full' style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-2xl shadow-lg'>
                <div className='flex justify-between items-center mb-2'>
                  <p className='text-xl font-bold text-gray-800'>給与が上がらない</p>
                  <p className='text-3xl font-black text-[#ff0059]'>27.8%</p>
                </div>
                <div className='w-full bg-gray-100 rounded-full h-3'>
                  <div className='bg-gradient-to-r from-[#ff8c00] to-[#ffa500] h-3 rounded-full' style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-2xl shadow-lg'>
                <div className='flex justify-between items-center mb-2'>
                  <p className='text-xl font-bold text-gray-800'>拘束時間が長い</p>
                  <p className='text-3xl font-black text-[#ff0059]'>15.6%</p>
                </div>
                <div className='w-full bg-gray-100 rounded-full h-3'>
                  <div className='bg-gradient-to-r from-[#ff8c00] to-[#ffa500] h-3 rounded-full' style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>

            {/* 解決メッセージ */}
            <div className='pt-8 space-y-3'>
              <p className='text-3xl font-bold'>給料、仲間、時間</p>
              <div className='space-y-1'>
                <p className='text-3xl font-bold'>
                  <span className='underline decoration-[#ffa500] decoration-4 underline-offset-4'>U-topia</span>なら
                </p>
                <p className='text-3xl text-[#ff0059] font-bold'>悩みになりません。</p>
              </div>
            </div>

            {/* 出典 */}
            <p className='text-xs text-gray-500 pt-8'>
              ※1 U-topia調査
            </p>
          </div>
        </section>

        {/* ワクワクセクション */}
        <section className='py-16 px-6 bg-[#ffa500] text-white'>
          <div className='space-y-8'>
            {/* タイトル */}
            <div className='space-y-2'>
              <h2 className='text-4xl font-bold leading-tight'>
                毎日が楽しい！
              </h2>
              <h2 className='text-4xl font-bold leading-tight'>
                U-topiaが
              </h2>
              <h2 className='text-4xl font-bold leading-tight'>
                選ばれ続ける
              </h2>
              <h2 className='text-4xl font-bold leading-tight'>
                <span className='text-[#ff0059]'>3つ</span>のワケ
              </h2>
            </div>

            {/* ポイント */}
            <div className='space-y-4'>
              <div className='inline-block'>
                <p className='text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>社内イベント参加率は96.9%※</p>
              </div>
              <div className='inline-block'>
                <p className='text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>笑顔と刺激が絶えない、</p>
              </div>
              <div className='inline-block'>
                <p className='text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>居心地抜群のサロンです。</p>
              </div>
            </div>

            {/* 画像グリッド */}
            <div className='grid grid-cols-2 gap-4 pt-4'>
              <div className="space-y-1">
                <Image
                  src='/syanai1-2.png'
                  alt='バーベキューの様子'
                  width={200}
                  height={150}
                  className='rounded-lg w-full h-[150px] object-cover'
                />
                <p className="text-white text-xs text-center">バーベキュー</p>
              </div>
              <div className="space-y-1">
                <Image
                  src='/syanai2.JPG'
                  alt='忘年会の様子'
                  width={200}
                  height={150}
                  className='rounded-lg w-full h-[150px] object-cover'
                />
                <p className="text-white text-xs text-center">忘年会</p>
              </div>
              <div className="space-y-1">
                <Image
                  src='/syanai3.JPG'
                  alt='政策発表会の様子'
                  width={200}
                  height={150}
                  className='rounded-lg w-full h-[150px] object-cover'
                />
                <p className="text-white text-xs text-center">政策発表会</p>
              </div>
              <div className="space-y-1">
                <Image
                  src='/syanai4.JPG'
                  alt='全国雑誌撮影の様子'
                  width={200}
                  height={150}
                  className='rounded-lg w-full h-[150px] object-cover'
                />
                <p className="text-white text-xs text-center">全国雑誌撮影</p>
              </div>
            </div>

            {/* 出典 */}
            <p className='text-xs pt-4'>
              ※2024年実績
            </p>
          </div>
        </section>

        {/* 給与セクション */}
        <section className='py-16 px-6 bg-[#ffa500] text-white'>
          <div className='space-y-8'>

            {/* 給与情報 */}
            <div className='space-y-4'>
              <div className='inline-block'>
                <p className='text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>正規雇用サロンで</p>
              </div>
              <div className='inline-block'>
                <p className='text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>平均月収は40万円オーバー</p>
              </div>
              <div className='inline-block'>
                <p className='text-1xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>（新卒1年生も35万オーバー）</p>
              </div>
              <div className='inline-block'>
                <p className='text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>業界トップクラスの歩合率で</p>
              </div>
              <div className='inline-block'>
                <p className='text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>スタッフに還元します。</p>
              </div>
            </div>

            {/* 歩合率情報 */}
            <div className='pt-8'>
              <p className='text-1xl font-black pb-4'>⚫︎正社員の歩合率</p>
              <div className='grid grid-cols-3 gap-2 md:gap-4'>
                <div className='aspect-square bg-gradient-to-br from-white to-white/95 p-2 md:p-4 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 text-center flex flex-col justify-center'>
                  <p className='text-[#ff8c00] text-sm md:text-lg font-black tracking-wide'>指名</p>
                  <p className='text-[#ff8c00] text-3xl md:text-4xl font-black'>40%</p>
                </div>
                <div className='aspect-square bg-gradient-to-br from-white to-white/95 p-2 md:p-4 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 text-center flex flex-col justify-center'>
                  <p className='text-[#ff8c00] text-sm md:text-lg font-black tracking-wide'>フリー</p>
                  <p className='text-[#ff8c00] text-3xl md:text-4xl font-black'>30%</p>
                </div>
                <div className='aspect-square bg-gradient-to-br from-white to-white/95 p-2 md:p-4 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 text-center flex flex-col justify-center'>
                  <p className='text-[#ff8c00] text-sm md:text-lg font-black tracking-wide'>店販歩合</p>
                  <p className='text-[#ff8c00] text-3xl md:text-4xl font-black'>10%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 休暇制度セクション */}
        <section className='py-16 px-6 bg-[#ffa500] text-white'>
          <div className='space-y-8'>
            {/* タイトル */}
            <div className='space-y-4'>
              <div className='inline-block'>
                <p className='text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>休みを充実させて</p>
              </div>
              <div className='inline-block'>
                <p className='text-2xl text-white font-black bg-gradient-to-r from-[#ff8c00] to-[#ffa500] p-4 shadow-lg border border-white/20 transform hover:scale-[1.02] transition-transform duration-200'>オンも、オフも充実。</p>
              </div>
            </div>

            {/* 休暇制度リスト */}
            <div className='space-y-6'>
              <div className='bg-gradient-to-br from-white to-white/95 p-6 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300'>
                <p className='text-[#ff8c00] text-2xl font-black mb-4 tracking-wide'>完全週休二日</p>
                <p className='text-gray-700 leading-relaxed'>早番遅番制度を設けています。<br />早番9時〜18時・遅番11時〜20時。<br />自分の時間を確保しやすい働き方です。</p>
              </div>



              <div className='bg-gradient-to-br from-white to-white/95 p-6 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300'>
                <p className='text-[#ff8c00] text-2xl font-black mb-4 tracking-wide'>有給完全法遵通り</p>
                <p className='text-gray-700 leading-relaxed'>U-topiaでは、計画的有給付与を採用しています。<br />12/31〜1/3までの4日間は有給として消化し、その他の有給は好きなところで有給を消化していただきます。</p>
              </div>

              <div className='bg-gradient-to-br from-white to-white/95 p-6 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300'>
                <p className='text-[#ff8c00] text-2xl font-black mb-4 tracking-wide'>学びも勤務時間に</p>
                <p className='text-gray-700 leading-relaxed'>月1回まで、レポートを出せば外部講習の受講時間もそのまま勤務時間にカウントされます。</p>
              </div>

              <div className='bg-gradient-to-br from-white to-white/95 p-6 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300'>
                <p className='text-[#ff8c00] text-2xl font-black mb-4 tracking-wide'>土日も休める</p>
                <p className='text-gray-700 leading-relaxed'>U-topiaでは、月に2日希望休が取れるので土日に公休を充てることも可能。<br />ママさん美容師も働けるよう、時短勤務でのパートも可能です。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 数字で見るu-topiaセクション */}
        <section className='py-10 px-6 bg-[#fff9f0]'>
          <div className='space-y-6'>
            <h2 className='text-4xl font-bold'>数字で見るU-topia</h2>
            
              <div className='grid grid-cols-2 gap-2 md:gap-4'>
              {/* 平均年齢 */}
              <div className='bg-white shadow p-8 flex flex-col items-center w-[170px] h-[210px] md:w-[190px] md:h-[230px] mx-auto'>
                <p className='text-gray-600 mb-2 text-sm md:text-base'>平均年齢</p>
                <div className='flex-1 flex items-center justify-center'>
                  <Image
                    src='/13122.png'
                    alt='会話するアイコン'
                    width={64}
                    height={64}
                    className='w-16 h-12 md:w-16 md:h-16'
                  />
                </div>
                <p className='text-3xl md:text-4xl font-bold text-center whitespace-nowrap'>24.3<span className='text-2xl md:text-2xl'>歳</span></p>
              </div>

              {/* 平均月収 */}
              <div className='bg-white shadow p-8 flex flex-col items-center w-[170px] h-[210px] md:w-[190px] md:h-[230px] mx-auto'>
                <p className='text-gray-600 mb-2 text-sm md:text-base'>平均月収</p>
                <div className='flex-1 flex items-center justify-center'>
                <Image
                    src='/1330.png'
                    alt='お金アイコン'
                    width={64}
                    height={64}
                    className='w-16 h-12 md:w-16 md:h-16'
                  />
                </div>
                <p className='text-3xl md:text-4xl font-bold whitespace-nowrap'>約40<span className='text-2xl md:text-2xl'>万円</span></p>
              </div>

              {/* デビュー初月の売上平均 */}
              <div className='bg-white shadow p-8 flex flex-col items-center w-[170px] h-[210px] md:w-[190px] md:h-[230px] mx-auto'>
                <p className='text-gray-600 mb-2 text-sm md:text-base'>デビュー初月の売上平均</p>
                <div className='flex-1 flex items-center justify-center'>
                <Image
                    src='/9226.png'
                    alt='平均アイコン'
                    width={64}
                    height={64}
                    className='w-16 h-12 md:w-16 md:h-16'
                  />
                </div>
                <p className='text-3xl md:text-4xl font-bold whitespace-nowrap'>約62<span className='text-2xl md:text-2xl'>万円</span></p>
              </div>

              {/* デビューまでの平均期間 */}
              <div className='bg-white shadow p-8 flex flex-col items-center w-[170px] h-[210px] md:w-[190px] md:h-[230px] mx-auto'>
                <p className='text-gray-600 mb-2 text-sm md:text-base'>デビューまでの平均期間</p>
                <div className='flex-1 flex items-center justify-center'>
                <Image
                    src='/25935.png'
                    alt='デビューまでの平均期間アイコン'
                    width={64}
                    height={64}
                    className='w-16 h-12 md:w-16 md:h-16'
                  />
                </div>
                <p className='text-3xl md:text-4xl font-bold whitespace-nowrap'>6.5<span className='text-2xl md:text-2xl'>ヶ月</span></p>
              </div>

              {/* デビュー月の平均新規入客数 */}
              <div className='bg-white shadow p-8 flex flex-col items-center w-[170px] h-[210px] md:w-[190px] md:h-[230px] mx-auto'>
                <p className='text-gray-600 mb-2 text-sm md:text-base'>デビュー月の<br />平均新規入客数</p>
                <div className='flex-1 flex items-center justify-center'>
                <Image
                    src='/1200.png'
                    alt='デビュー月の平均新規入客数アイコン'
                    width={64}
                    height={64}
                    className='w-12 h-16 md:w-16 md:h-16'
                  />
                </div>
                <p className='text-3xl md:text-4xl font-bold whitespace-nowrap'>74<span className='text-2xl md:text-2xl'>名</span></p>
              </div>

              {/* 有給取得率 */}
              <div className='bg-white shadow p-8 flex flex-col items-center w-[170px] h-[210px] md:w-[190px] md:h-[230px] mx-auto'>
                <p className='text-gray-600 mb-2 text-sm md:text-base'>有給取得率</p>
                <div className='flex-1 flex items-center justify-center'>
          <Image
                    src='/16744.png'
                    alt='有給取得率アイコン'
                    width={64}
                    height={64}
                    className='w-12 h-16 md:w-16 md:h-16'
                  />
                </div>
                <p className='text-3xl md:text-4xl font-bold whitespace-nowrap'>100<span className='text-2xl md:text-2xl'>%</span></p>
              </div>

              {/* 社内イベントの参加率 */}
              <div className='bg-white shadow p-8 flex flex-col items-center w-[170px] h-[210px] md:w-[190px] md:h-[230px] mx-auto'>
                <p className='text-gray-600 mb-2 text-sm md:text-base'>社内イベントの参加率</p>
                <div className='flex-1 flex items-center justify-center'>
          <Image
                     src='/8292.png'
                     alt='社内イベントの参加率アイコン'
                     width={64}
                     height={64}
                     className='w-16 h-12 md:w-16 md:h-16'
                   />
                </div>
                <p className='text-3xl md:text-4xl font-bold whitespace-nowrap'>96.9<span className='text-2xl md:text-2xl'>%</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* よくある質問セクション */}
        <section className='py-16 px-6 bg-[#ffa500] text-white'>
          <div className='space-y-8'>
            {/* タイトル */}
            <h2 className='text-4xl font-bold'>
              u-topiaに寄せられる<br />
              よくあるご質問
            </h2>

            {/* FAQ リスト */}
            <div className='space-y-6'>
              {/* 質問1 */}
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                      <span className='text-[#ffa500] text-xl'>?</span>
                    </div>
                  </div>
                  <p className='text-xl'>人間関係がギスギスしていないか心配です...</p>
                </div>
                <div className='bg-white rounded-lg p-6'>
                  <p className='text-gray-700'>
                    毎月の社内イベントには96.9%が参加し、スタッフ同士の距離が近いのが特徴。シャンプーや施術の合間に先輩が自然と声を掛け合う文化があり、疑問をその場で解決できます。また、苦手分野に合わせた個別カリキュラムが用意されているので、置き去り感ゼロ。
                  </p>
                </div>
              </div>

              {/* 質問2 */}
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                      <span className='text-[#ffa500] text-xl'>?</span>
                    </div>
                  </div>
                  <p className='text-xl'>デビュー前の費用負担が不安です。</p>
                </div>
                <div className='bg-white rounded-lg p-6'>
                  <p className='text-gray-700'>
                    デビュー前はもちろん、スタイリストになってからも&apos;お金&apos;と&apos;時間&apos;を会社がサポートします。
                  </p>
                  <div className='mt-4 space-y-6'>
                    <div>
                      <p className='font-bold text-gray-900 mb-2'>● デビュー前</p>
                      <p className='text-gray-700'>・アカデミー完備――営業時間内に練習でき、ウィッグは無料配布。</p>
                    </div>
                    <div>
                      <p className='font-bold text-gray-900 mb-2'>● デビュー後</p>
                      <p className='text-gray-700'>・外部講習は月1回まで勤務時間扱い（レポート提出のみ）。</p>
                      <p className='text-gray-700'>・ミニモ手数料＆撮影モデル費は全額会社負担で集客とブランディングを後押し。</p>
                    </div>
                  </div>
                  <p className='mt-4 text-gray-700'>
                    入社後ずっと、自己負担ゼロでスキルと売上を伸ばせる環境です。
                  </p>
                </div>
              </div>

              {/* 質問3 */}
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                      <span className='text-[#ffa500] text-xl'>?</span>
                    </div>
                  </div>
                  <p className='text-xl'>指名ゼロでも本当に稼げますか？</p>
                </div>
                <div className='bg-white rounded-lg p-6'>
                  <p className='text-gray-700'>
                    はい。初月から100名以上を自動集客する仕組みがあり、ゼロスタートでも平均で月120名を担当しています。完全歩合制なので成果はダイレクトに給与へ反映され、実際に前職の倍近い収入へ伸びたスタッフも多数。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className='py-16 px-6 bg-[#fff9f0]'>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h2 className='text-[2.0rem] md:text-4xl font-bold leading-tight'>
                <div className='whitespace-pre-line'>休みも収入も仲間も、<br />
                妥協しない働き方を。</div>
              </h2>
              <p className='text-lg text-gray-600'>
                話を聞いてみたい方は、まずは下のLINEから！<br />
                カジュアルな相談・見学だけでもOKです。<br />
                あなたの気になることを何でも聞かせてください。
              </p>
            </div>

            <a
              href="https://lin.ee/xTIlpCKO"
          target="_blank"
          rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#00B900] text-white py-4 px-6 rounded-full text-xl font-bold hover:opacity-90 transition-opacity text-center shadow-lg"
            >
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                </svg>
                <span>公式LINEで相談する</span>
              </div>
            </a>
          </div>
        </section>

        {/* 店舗情報セクション */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#FF7F50]">U-topia</h3>
              <div className="space-y-2 text-gray-700">
                <p>東京都町田市原町田６－１７－１</p>
                <p>藤ビル３０２</p>
                <p className="pt-2">
                  <span className="font-medium">TEL</span>{" "}
                  <a href="tel:042-794-6747" className="text-[#FF7F50] hover:underline">
                    042-794-6747
                  </a>
                </p>
                
                {/* SNSリンク */}
                <div className="pt-4 space-y-3">
                  
                  <div className="flex flex-col gap-3">
                    {/* TikTokアカウント */}
                    <a
                      href="https://www.tiktok.com/@utopia_moti1015"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <div className="bg-white rounded-full p-2 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-black"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">TikTokアカウント</p>
                        <p className="text-xs text-white/80">@utopia_moti1015</p>
                      </div>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    {/* 採用担当者Instagram */}
                    <a
                      href="https://www.instagram.com/utopia_yushi/?igsh=MWI2cHdpd3o4OGk4&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <div className="bg-white rounded-full p-2 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-pink-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">採用担当者Instagram</p>
                        <p className="text-xs text-white/90">@utopia_yushi</p>
                      </div>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full aspect-video">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.35458338666!2d139.44467797593373!3d35.54494408744851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f94cb61e108d%3A0xc02f5be053d666d9!2sU-topia!5e0!3m2!1sja!2sjp!4v1758601734717!5m2!1sja!2sjp" 
                className="w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}