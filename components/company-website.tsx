'use client'

import React from 'react'
import { Brain, Bot, MapPin, Mail } from 'lucide-react'



export function CompanyWebsiteComponent() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header role="banner" className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">株式会社 Waalsforce</h1>
          <nav role="navigation" aria-label="メインナビゲーション">
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">ホーム</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">サービス</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">会社概要</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main role="main">
        <section id="home" aria-label="ホーム" className="relative h-[70vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/back2.jpg"
              alt="最先端のAI技術を象徴する抽象的なデジタルアート"
              className="w-full h-full object-cover"
              loading="eager"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-white text-center">
            <h2 className="text-5xl font-bold mb-6">AIで未来を創造する</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます
            </p>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">サービス</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">生成AIソリューションの提供</h3>
                <p>
                  最新の生成AI技術を活用し、お客様のビジネスに最適なソリューションを提供します。
                  テキスト生成、画像生成、音声生成など、様々な分野でAIの力を活用し、
                  業務効率化や新しい価値の創造をサポートします。
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <Bot className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">AIの導入コンサルティング</h3>
                <p>
                  AI導入の戦略立案から実装まで、包括的なコンサルティングサービスを提供します。
                  お客様のビジネスニーズを深く理解し、最適なAIソリューションの選定と
                  スムーズな導入をサポートします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">会社概要</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">基本情報</h3>
                <dl className="space-y-4">
                  <div className="flex gap-4">
                    <dt className="font-medium min-w-32">会社名</dt>
                    <dd>株式会社Waalsforce</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-medium min-w-32">代表者</dt>
                    <dd>篠田 敬廣</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-medium min-w-32">設立日</dt>
                    <dd>2024年05月07日</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-medium min-w-32">資本金</dt>
                    <dd>1,000,000円</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-medium min-w-32">業種</dt>
                    <dd>サービス業（コンサルティング）</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">所在地</h3>
                <address className="not-italic">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                    <p>
                      〒150-0043<br />
                      東京都渋谷道玄坂１丁目１０番８号<br />
                      渋谷道玄坂東急ビル２Ｆ－Ｃ
                    </p>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">お問い合わせ</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-lg mb-6">
                  お問い合わせは以下のメールアドレスまでお願いいたします。
                </p>
                <a
                  href="mailto:shinoda.y@waalsforce.co.jp"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  shinoda.y@waalsforce.co.jp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-sm">
              <p>&copy; Waalsforce Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}