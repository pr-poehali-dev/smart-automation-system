import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Icon from "@/components/ui/icon"

const IMAGES = {
  saturn: "https://cdn.poehali.dev/projects/1d8683b9-e141-4f25-bb45-bcf073cf9d70/files/a06e79ef-3819-4fec-bf00-e4c3ea3cbbd2.jpg",
  jupiter: "https://cdn.poehali.dev/projects/1d8683b9-e141-4f25-bb45-bcf073cf9d70/files/df4589a7-e50d-4787-a79f-bd6197a4d898.jpg",
  europa: "https://cdn.poehali.dev/projects/1d8683b9-e141-4f25-bb45-bcf073cf9d70/files/1e9f2ebc-a1df-4cbf-9604-050174c3d5bd.jpg",
  enceladus: "https://cdn.poehali.dev/projects/1d8683b9-e141-4f25-bb45-bcf073cf9d70/files/dc354097-cbfe-4333-b752-00b5cfbdfc65.jpg",
  model: "https://cdn.poehali.dev/projects/1d8683b9-e141-4f25-bb45-bcf073cf9d70/files/e4998376-e25c-4a6f-a91f-fa43cddc9fb5.jpg",
}

interface SlideProps {
  active: boolean
  children: React.ReactNode
  bg?: string
}

function Slide({ active, children, bg = "from-[#0a0a1a] to-[#0d1b3e]" }: SlideProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 bg-gradient-to-br",
        bg,
        active ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none"
      )}
    >
      <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-center px-6 py-12">
        {children}
      </div>
    </div>
  )
}

function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: Math.random() * 0.7 + 0.3,
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: Math.random() * 3 + "s",
          }}
        />
      ))}
    </div>
  )
}

const slides = [
  {
    id: "title",
    bg: "from-[#060614] to-[#0d1b3e]",
    content: (active: boolean) => (
      <div className="text-center max-w-3xl">
        <div className={cn("text-7xl mb-4 transition-all duration-1000", active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6")}>🪐</div>
        <h1 className={cn("text-4xl md:text-6xl font-bold text-white mb-4 leading-tight transition-all duration-1000 delay-100", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          Спутники планет<br/>и их кольца
        </h1>
        <p className={cn("text-xl md:text-2xl text-blue-300 mb-2 transition-all duration-1000 delay-200", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          Исследовательская работа
        </p>
        <p className={cn("text-blue-400/70 text-lg transition-all duration-1000 delay-300", active ? "opacity-100" : "opacity-0")}>
          Удивительные открытия Солнечной системы
        </p>
        <div className={cn("flex justify-center gap-3 mt-8 text-3xl transition-all duration-1000 delay-500", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <span>🌙</span><span>🪐</span><span>🔭</span><span>🌍</span>
        </div>
      </div>
    ),
  },
  {
    id: "intro",
    bg: "from-[#080820] to-[#0f2040]",
    content: (active: boolean) => (
      <div className="max-w-3xl w-full">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white text-center mb-8 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4")}>
          🎯 Введение
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={cn("bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{ transitionDelay: "200ms" }}>
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-white font-bold text-lg mb-2">Цель работы</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Узнать больше о спутниках планет и их кольцах, рассказать о самых интересных открытиях
            </p>
          </div>
          <div className={cn("bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{ transitionDelay: "350ms" }}>
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-white font-bold text-lg mb-2">Задачи</h3>
            <ul className="space-y-1">
              {["Изучить, у каких планет есть спутники", "Узнать о происхождении колец", "Найти информацию о необычных спутниках", "Создать макет Солнечной системы", "Подготовить презентацию"].map((item, j) => (
                <li key={j} className="text-blue-200 text-sm flex gap-2">
                  <span className="text-blue-400 mt-0.5">▸</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "what",
    bg: "from-[#0a0a20] to-[#1a0a30]",
    content: (active: boolean) => (
      <div className="max-w-4xl w-full">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white text-center mb-8 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4")}>
          🌙 Что такое спутники?
        </h2>
        <p className={cn("text-center text-blue-200 text-lg mb-8 transition-all duration-700 delay-100", active ? "opacity-100" : "opacity-0")}>
          Спутники — это космические тела, которые вращаются вокруг планет
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { emoji: "🌍", color: "from-green-900/50 to-blue-900/50", border: "border-green-500/30", title: "Естественные", desc: "Созданы самой природой. Существуют миллиарды лет. Луна, Европа, Титан — всё это природные спутники.", tag: "Природа" },
            { emoji: "🛸", color: "from-purple-900/50 to-blue-900/50", border: "border-purple-500/30", title: "Искусственные", desc: "Созданы людьми и запущены в космос. Помогают нам в связи, навигации и изучении Земли.", tag: "Человек" },
          ].map((card, i) => (
            <div
              key={i}
              className={cn("bg-gradient-to-br rounded-2xl p-6 border transition-all duration-700", card.color, card.border, active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
              style={{ transitionDelay: `${i * 200 + 200}ms` }}
            >
              <div className="text-5xl mb-4">{card.emoji}</div>
              <div className="inline-block bg-white/20 rounded-full px-3 py-0.5 text-xs text-white mb-3">{card.tag}</div>
              <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "rings-origin",
    bg: "from-[#1a0c20] to-[#2a1040]",
    content: (active: boolean) => (
      <div className="max-w-5xl w-full">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white text-center mb-8 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4")}>
          💫 Откуда берутся кольца у планет?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className={cn("rounded-2xl overflow-hidden border border-yellow-500/30 transition-all duration-1000", active ? "opacity-100 scale-100" : "opacity-0 scale-95")}>
            <img src={IMAGES.saturn} alt="Сатурн с кольцами" className="w-full h-64 object-cover" />
          </div>
          <div className="space-y-3">
            <p className={cn("text-blue-200 mb-4 transition-all duration-700", active ? "opacity-100" : "opacity-0")} style={{ transitionDelay: "200ms" }}>
              Кольца вокруг планет появились из-за:
            </p>
            {[
              { icon: "☄️", text: "Разрушения комет и астероидов" },
              { icon: "🌀", text: "Действий сильной гравитации планет" },
              { icon: "❄️", text: "Частиц льда и космической пыли" },
            ].map((item, i) => (
              <div
                key={i}
                className={cn("bg-white/10 border border-white/10 rounded-xl p-4 flex items-center gap-4 transition-all duration-500", active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")}
                style={{ transitionDelay: `${i * 150 + 300}ms` }}
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <p className="text-white text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ring-facts",
    bg: "from-[#0a0815] to-[#1a1530]",
    content: (active: boolean) => (
      <div className="max-w-4xl w-full">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white text-center mb-8 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4")}>
          ⭐ Интересные факты о кольцах
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { img: IMAGES.jupiter, name: "Юпитер", fact: "Целых 3 кольца, но они не такие яркие, как у Сатурна", color: "border-orange-500/40" },
            { img: IMAGES.saturn, name: "Сатурн", fact: "Самые красивые и заметные кольца во всей Солнечной системе", color: "border-yellow-500/40" },
            { img: IMAGES.enceladus, name: "Нептун", fact: "Тоже имеет кольца, хотя они почти незаметны", color: "border-blue-500/40" },
          ].map((card, i) => (
            <div
              key={i}
              className={cn("rounded-2xl overflow-hidden border transition-all duration-700", card.color, active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="h-36 overflow-hidden">
                <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/10 p-4">
                <h3 className="text-white font-bold text-lg mb-2">{card.name}</h3>
                <p className="text-blue-200 text-xs leading-relaxed">{card.fact}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={cn("text-center text-blue-300 mt-6 text-sm transition-all duration-700 delay-700", active ? "opacity-100" : "opacity-0")}>
          💡 Кольца состоят из мелких частиц льда и пыли
        </p>
      </div>
    ),
  },
  {
    id: "unusual",
    bg: "from-[#050520] to-[#0a1535]",
    content: (active: boolean) => (
      <div className="max-w-5xl w-full">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white text-center mb-6 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4")}>
          🔭 Самые необычные спутники
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { emoji: "🏆", name: "Ганимед", planet: "спутник Юпитера", desc: "Самый большой спутник в Солнечной системе — даже больше планеты Меркурий!" },
            { emoji: "💨", name: "Титан", planet: "спутник Сатурна", desc: "Имеет плотную атмосферу — такой есть только у него среди всех спутников." },
            { img: IMAGES.europa, name: "Европа", planet: "спутник Юпитера", desc: "Под ледяным покровом может скрываться настоящий океан с жизнью!" },
            { img: IMAGES.enceladus, name: "Энцелад", planet: "спутник Сатурна", desc: "Выбрасывает гигантские ледяные фонтаны прямо в космос!" },
          ].map((card, i) => (
            <div
              key={i}
              className={cn("bg-white/8 border border-white/15 rounded-2xl p-4 flex gap-4 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
              style={{ transitionDelay: `${i * 130 + 200}ms` }}
            >
              {card.img ? (
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/20">
                  <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center text-4xl flex-shrink-0 border border-white/10">
                  {card.emoji}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">{card.name}</h3>
                <p className="text-blue-400 text-xs mb-1">{card.planet}</p>
                <p className="text-blue-200 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "model",
    bg: "from-[#0a1010] to-[#0a2020]",
    content: (active: boolean) => (
      <div className="max-w-5xl w-full">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white text-center mb-8 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4")}>
          🎨 Макет Солнечной системы
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className={cn("rounded-2xl overflow-hidden border border-white/20 transition-all duration-1000", active ? "opacity-100 scale-100" : "opacity-0 scale-95")}>
            <img src={IMAGES.model} alt="Макет" className="w-full h-72 object-cover" />
          </div>
          <div>
            <h3 className={cn("text-white font-semibold mb-4 transition-all duration-700 delay-200", active ? "opacity-100" : "opacity-0")}>
              Нам понадобилось:
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: "📦", label: "Картонная основа" },
                { emoji: "🎨", label: "Цветной пластилин" },
                { emoji: "✨", label: "Фольга для колец" },
                { emoji: "🧵", label: "Нитки и проволока" },
                { emoji: "💧", label: "Клей" },
                { emoji: "📄", label: "Цветная бумага" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={cn("bg-white/10 rounded-xl p-3 text-center transition-all duration-500", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
                  style={{ transitionDelay: `${i * 80 + 400}ms` }}
                >
                  <div className="text-2xl mb-1">{item.emoji}</div>
                  <p className="text-blue-200 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "steps",
    bg: "from-[#0a0a18] to-[#151030]",
    content: (active: boolean) => (
      <div className="max-w-3xl w-full">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white text-center mb-8 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4")}>
          🛠️ Этапы работы
        </h2>
        <div className="space-y-3">
          {[
            { num: "01", icon: "⚪", title: "Основа макета", desc: "Сделали круг из плотного картона" },
            { num: "02", icon: "🪐", title: "Планеты", desc: "Скатали шары из пластилина разного размера" },
            { num: "03", icon: "💫", title: "Кольца", desc: "Вырезали из фольги тонкие полоски" },
            { num: "04", icon: "🌙", title: "Спутники", desc: "Сделали маленькие шарики и прикрепили к планетам" },
            { num: "05", icon: "🏷️", title: "Оформление", desc: "Подписали названия планет и спутников" },
          ].map((item, i) => (
            <div
              key={i}
              className={cn("flex items-center gap-4 bg-white/8 border border-white/10 rounded-xl p-4 transition-all duration-600", active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10")}
              style={{ transitionDelay: `${i * 120 + 150}ms` }}
            >
              <span className="text-blue-500/60 font-bold text-2xl w-10 flex-shrink-0">{item.num}</span>
              <span className="text-3xl">{item.icon}</span>
              <div>
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-blue-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "conclusions",
    bg: "from-[#070718] to-[#0d1535]",
    content: (active: boolean) => (
      <div className="max-w-4xl w-full">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white text-center mb-8 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4")}>
          📊 Выводы
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { emoji: "🌌", text: "Создание макета помогло понять устройство Солнечной системы" },
            { emoji: "🪐", text: "Узнали, как располагаются планеты и их спутники" },
            { emoji: "💫", text: "Увидели, как выглядят кольца у планет" },
            { emoji: "📏", text: "Поняли, что спутники бывают разных размеров" },
            { emoji: "🎨", text: "Научились работать с разными материалами" },
          ].map((item, i) => (
            <div
              key={i}
              className={cn("bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-2xl p-5 flex items-start gap-4 transition-all duration-700", active ? "opacity-100 scale-100" : "opacity-0 scale-90")}
              style={{ transitionDelay: `${i * 130 + 200}ms` }}
            >
              <span className="text-4xl">{item.emoji}</span>
              <p className="text-blue-100 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "questions",
    bg: "from-[#08080f] to-[#101025]",
    content: (active: boolean) => (
      <div className="max-w-3xl w-full">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white text-center mb-8 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4")}>
          💬 Вопросы для обсуждения
        </h2>
        <div className="space-y-4">
          {[
            { q: "Почему планеты разного размера?", hint: "Зависит от состава и истории формирования" },
            { q: "Как держатся кольца вокруг планет?", hint: "Подсказка: это сила гравитации 🌀" },
            { q: "Сколько всего спутников в Солнечной системе?", hint: "Их уже открыто более 200!" },
          ].map((item, i) => (
            <div
              key={i}
              className={cn("bg-white/8 border border-white/10 rounded-2xl p-5 transition-all duration-700", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
              style={{ transitionDelay: `${i * 180 + 150}ms` }}
            >
              <p className="text-white font-medium text-lg mb-1">❓ {item.q}</p>
              <p className="text-blue-400 text-sm">{item.hint}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "thanks",
    bg: "from-[#040412] to-[#0a1025]",
    content: (active: boolean) => (
      <div className="max-w-3xl w-full text-center">
        <div className={cn("text-7xl mb-6 transition-all duration-1000", active ? "opacity-100 scale-100" : "opacity-0 scale-50")}>🚀</div>
        <h2 className={cn("text-4xl md:text-5xl font-bold text-white mb-3 transition-all duration-700 delay-100", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          Спасибо за внимание!
        </h2>
        <p className={cn("text-blue-300 text-lg mb-8 transition-all duration-700 delay-200", active ? "opacity-100" : "opacity-0")}>
          Надеюсь, вам было интересно узнать о спутниках планет и их удивительных кольцах
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className={cn("bg-white/8 border border-white/10 rounded-2xl p-5 text-left transition-all duration-700 delay-300", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
            <h3 className="text-white font-semibold mb-3 text-sm">📦 Материалы</h3>
            <ul className="space-y-1.5">
              {["Готовый макет Солнечной системы", "Презентация с фотографиями", "Схема расположения планет", "Рисунки колец планет"].map((src, i) => (
                <li key={i} className="text-blue-200 text-xs flex gap-2"><span className="text-blue-400">▸</span>{src}</li>
              ))}
            </ul>
          </div>
          <div className={cn("bg-white/8 border border-white/10 rounded-2xl p-5 text-left transition-all duration-700 delay-400", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
            <h3 className="text-white font-semibold mb-3 text-sm">📚 Источники</h3>
            <ul className="space-y-1.5">
              {["Детская энциклопедия «Космос»", "Научные журналы", "Интернет-ресурсы для детей"].map((src, i) => (
                <li key={i} className="text-blue-200 text-xs flex gap-2"><span className="text-blue-400">▸</span>{src}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cn("flex justify-center gap-4 text-4xl transition-all duration-700 delay-500", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <span>🌙</span><span>🪐</span><span>⭐</span><span>🌍</span><span>🔭</span>
        </div>
      </div>
    ),
  },
]

export default function Presentation() {
  const [current, setCurrent] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1))

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "f" || e.key === "F") toggleFullscreen()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black overflow-hidden select-none" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>

      <Stars />

      <div className="relative w-full h-full">
        {slides.map((slide, i) => (
          <Slide key={slide.id} active={i === current} bg={slide.bg}>
            {slide.content(i === current)}
          </Slide>
        ))}
      </div>

      <div className="absolute top-4 left-4 z-20 text-white/40 text-sm font-mono">
        {current + 1} / {slides.length}
      </div>

      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={toggleFullscreen}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white/60 hover:text-white"
          title="Полный экран (F)"
        >
          <Icon name={isFullscreen ? "Minimize" : "Maximize"} size={16} />
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "rounded-full transition-all duration-300",
              i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30 hover:bg-white/60"
            )}
          />
        ))}
      </div>

      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center text-white"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      <button
        onClick={next}
        disabled={current === slides.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center text-white"
      >
        <Icon name="ChevronRight" size={24} />
      </button>
    </div>
  )
}
