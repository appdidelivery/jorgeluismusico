import Head from 'next/head';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500 selection:text-zinc-950">
      
      {/* INJEÇÃO DE SEO (EEAT) - Atualizado para Course e Autoridade */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "A Malícia da Noite: Método de Ouvido",
            "description": "O fim da dependência das cifras. Aprenda a tocar de ouvido com os atalhos reais dos palcos com Jorge Luis.",
            "provider": {
              "@type": "Person",
              "name": "Jorge Luis",
              "jobTitle": "Músico Profissional e Mentor",
              "knowsAbout": ["Música", "Performance de Palco", "Violão", "Cavaquinho", "Tirar Música de Ouvido"]
            },
            "educationalCredentialAwarded": "Domínio Prático de Palco"
          })
        }}
      />

      {/* TOP BAR */}
      <div className="bg-amber-500 text-zinc-950 text-center text-xs md:text-sm font-extrabold py-2 tracking-wide">
        ⚠️ ACESSO EXCLUSIVO: VAGAS LIMITADAS PARA O GRUPO VIP DE WHATSAPP
      </div>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center px-4 pt-16 pb-12 max-w-5xl mx-auto text-center">
        <span className="text-amber-500 font-semibold tracking-widest text-sm mb-6 uppercase border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 rounded-full">
          🔥 Novo Formato Microlearning
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
          O fim da dependência das cifras. Pegue a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">&quot;Malícia da Noite&quot;</span> e aprenda a tocar de ouvido com os atalhos reais dos palcos.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl font-light">
          Um método rápido, prático e sem teoria maçante. Descubra os segredos que os músicos profissionais usam para dominar qualquer roda de samba ou show.
        </p>

        {/* CTA HERO */}
        <a 
          href="#link-do-grupo-whatsapp" 
          className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-zinc-950 font-extrabold py-4 px-8 rounded-full text-lg md:text-xl shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all hover:scale-105 animate-pulse flex items-center justify-center gap-3 w-full max-w-md mx-auto"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          ENTRAR NO GRUPO VIP
        </a>
        <p className="text-sm text-zinc-500 mt-4 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          Grupo silenciado apenas para o envio das aulas.
        </p>
      </section>

      {/* VSL & COPY SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-zinc-900/50 p-6 md:p-10 rounded-3xl border border-zinc-800">
          
          {/* VSL PLACEHOLDER */}
          <div className="w-full aspect-video bg-zinc-950 border border-amber-500/20 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors"></div>
            <p className="text-amber-500 font-medium z-20 flex flex-col items-center gap-2">
              <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              [ Vídeo: Play Aperte o Play ]
            </p>
          </div>

          {/* SIDE COPY - QUEBRA DE OBJEÇÃO */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Aprender música não precisa parecer matemática avançada.
            </h2>
            <p className="text-zinc-400 text-lg">
              Nos palcos do Sul, ninguém te pergunta qual o grau da escala mixolídia. A plateia só quer saber se você tem o <strong className="text-zinc-200">felling</strong>.
            </p>
            <ul className="space-y-4 mt-6">
              {[
                "Sem partituras complexas que te travam.",
                "Focado puramente na intuição e na audição.",
                "O 'caminho das pedras' para pegar qualquer tom na hora."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-300">
                  <svg className="w-6 h-6 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MICROLEARNING MVP GRID */}
      <section className="bg-zinc-950 py-20 px-4 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">O que você vai dominar na <span className="text-amber-500">Prática</span></h2>
            <p className="text-zinc-400">4 Módulos Expressos (Microlearning) desenhados para gerar resultado imediato.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">O "Radar" do Músico</h3>
              <p className="text-zinc-400">Desenvolva a percepção de palco. Como ouvir uma música uma única vez e já mapear o tom e a estrutura no braço do instrumento.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">O Fim do "Tocar Quadrado"</h3>
              <p className="text-zinc-400">Aprenda a aplicar o Groove e o Swing verdadeiro. Chega de batidas robóticas; toque com a pressão que a noite exige.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">O "Tempero" (Acordes de Passagem)</h3>
              <p className="text-zinc-400">O segredo que separa os amadores dos profissionais. Descubra os acordes de passagem que dão aquele 'molho' na harmonia.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Kit Sobrevivência do Palco</h3>
              <p className="text-zinc-400">Deu branco? O cantor mudou o tom do nada? Aprenda as rotas de fuga para nunca parar de tocar no meio da música.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORIDADE / EEAT */}
      <section className="py-20 px-4 bg-zinc-900/30 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-zinc-800 border-4 border-amber-500/20 shrink-0 overflow-hidden shadow-2xl flex items-center justify-center">
            <span className="text-zinc-600 font-medium text-sm text-center px-4">[ Foto do<br/>Jorge Luis no Palco ]</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Quem é <span className="text-amber-500">Jorge Luis?</span></h2>
            <p className="text-zinc-300 text-lg mb-4 leading-relaxed">
              Músico profissional com forte vivência na cena musical do Sul do país. Minha validação não vem de diplomas teóricos emoldurados na parede, vem das <strong>noites suadas em cima dos palcos, bares lotados e rodas de samba</strong>.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Desenvolvi a "Malícia da Noite" porque vi dezenas de músicos tecnicamente incríveis travando quando alguém puxava uma música fora da pastinha de cifras. Eu vou te ensinar a vida real do instrumento.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER & FINAL CTA */}
      <footer className="bg-zinc-950 py-16 px-4 text-center border-t border-zinc-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Pronto para aposentar suas cifras?</h2>
          <a 
            href="#link-do-grupo-whatsapp" 
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-zinc-950 font-extrabold py-5 px-8 rounded-full text-lg shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all hover:scale-105 flex items-center justify-center gap-3 w-full"
          >
            GARANTIR MINHA VAGA NO GRUPO VIP
          </a>
          <p className="text-zinc-500 text-sm mt-8">
            © {new Date().getFullYear()} Jorge Luis Mentoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </main>
  );
}