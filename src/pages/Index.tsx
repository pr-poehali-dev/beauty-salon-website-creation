import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/3f404538-a2e7-4f1d-8e4d-c6a1dc0d1ec1/files/103302cf-3e54-452f-8e40-70998e71a9d7.jpg';

const services = [
  { name: 'Стрижка и укладка', price: 'от 2 500 ₽', icon: 'Scissors', desc: 'Авторские стрижки и профессиональная укладка' },
  { name: 'Окрашивание', price: 'от 4 800 ₽', icon: 'Palette', desc: 'Колорирование, омбре, балаяж, тонирование' },
  { name: 'Маникюр и педикюр', price: 'от 1 900 ₽', icon: 'Hand', desc: 'Гель-лак, укрепление, дизайн ногтей' },
  { name: 'Уход за лицом', price: 'от 3 200 ₽', icon: 'Sparkles', desc: 'Чистки, пилинги, увлажняющие процедуры' },
  { name: 'Брови и ресницы', price: 'от 1 400 ₽', icon: 'Eye', desc: 'Оформление, ламинирование, наращивание' },
  { name: 'Массаж', price: 'от 2 800 ₽', icon: 'Flower2', desc: 'Расслабляющий, лимфодренажный, антицеллюлитный' },
];

const masters = [
  { name: 'Анна Соколова', role: 'Топ-стилист', exp: '12 лет', emoji: '✂️' },
  { name: 'Мария Левина', role: 'Колорист', exp: '8 лет', emoji: '🎨' },
  { name: 'Елена Громова', role: 'Мастер ногтевого сервиса', exp: '10 лет', emoji: '💅' },
  { name: 'Дарья Орлова', role: 'Косметолог-эстетист', exp: '6 лет', emoji: '🌸' },
];

const reviews = [
  { text: 'Атмосфера, в которую хочется возвращаться. Анна сделала идеальную стрижку — впервые осталась в полном восторге!', author: 'Ольга К.', rating: 5 },
  { text: 'Лучший колорист города. Мария подобрала оттенок, и теперь мне все делают комплименты.', author: 'Виктория М.', rating: 5 },
  { text: 'Спокойствие, чистота и внимание к деталям. Здесь чувствуешь заботу с порога.', author: 'Ирина Л.', rating: 5 },
];

const tabs = [
  { id: 'home', label: 'Главная', icon: 'Home' },
  { id: 'services', label: 'Услуги', icon: 'Scissors' },
  { id: 'about', label: 'О салоне', icon: 'Heart' },
  { id: 'masters', label: 'Мастера', icon: 'Users' },
  { id: 'reviews', label: 'Отзывы', icon: 'Star' },
  { id: 'booking', label: 'Запись', icon: 'CalendarDays' },
  { id: 'contacts', label: 'Контакты', icon: 'MapPin' },
];

const timeSlots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];

const SectionTitle = ({ kicker, title, center = false }: { kicker: string; title: string; center?: boolean }) => (
  <div className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}>
    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
      {kicker}
    </span>
    <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">{title}</h2>
  </div>
);

const Index = () => {
  const [tab, setTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState({ service: '', master: '', time: '', name: '', phone: '' });

  const go = (id: string) => {
    setTab(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ─── Header ─── */}
      <header className="fixed top-0 z-50 w-full bg-background shadow-sm">
        <div className="container flex h-16 items-center justify-between md:h-20">
          <button onClick={() => go('home')} className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-md">
              <Icon name="Sparkles" size={18} />
            </div>
            <span className="font-display text-xl font-semibold md:text-2xl">Анюта</span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-xl hover:bg-secondary"
            aria-label="Меню"
          >
            <span className={`block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${menuOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${menuOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="absolute left-0 top-full w-full bg-white shadow-xl">
            <div className="container py-6">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {tabs.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => go(n.id)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                      tab === n.id
                        ? 'bg-primary text-white shadow-md'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                  >
                    <Icon name={n.icon} size={16} fallback="Circle" />
                    {n.label}
                  </button>
                ))}
              </div>
              <div className="mt-5 border-t border-border pt-5">
                <Button
                  onClick={() => go('booking')}
                  className="w-full rounded-xl py-5 text-sm font-semibold sm:w-auto sm:px-10"
                >
                  <Icon name="CalendarDays" size={16} />
                  Записаться онлайн
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ─── Content ─── */}
      <main className="pt-16 md:pt-20" key={tab}>

        {/* HOME */}
        {tab === 'home' && (
          <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
            {/* Декоративный градиент */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            </div>

            <div className="container relative grid items-center gap-10 py-12 md:grid-cols-2 md:gap-16 md:py-20">
              <div className="reveal order-2 md:order-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                  <Icon name="Sparkles" size={13} /> Салон красоты в Орске
                </span>
                <h1 className="mt-5 font-display text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
                  Красота,{' '}
                  <span className="text-primary">которую</span>{' '}
                  вы заслуживаете
                </h1>
                <p className="mt-5 max-w-md text-base text-muted-foreground">
                  Уютный салон с опытными мастерами. Запишитесь онлайн и
                  приходите за лучшей версией себя.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={() => go('booking')}
                    size="lg"
                    className="rounded-xl px-8 py-6 text-sm font-semibold shadow-lg shadow-primary/25"
                  >
                    <Icon name="CalendarDays" size={17} />
                    Записаться онлайн
                  </Button>
                  <Button
                    onClick={() => go('services')}
                    variant="outline"
                    size="lg"
                    className="rounded-xl px-8 py-6 text-sm font-semibold"
                  >
                    Наши услуги
                  </Button>
                </div>
                {/* Stats strip */}
                <div className="mt-10 flex gap-6 border-t border-border pt-8">
                  {[
                    { n: '12+', l: 'лет опыта' },
                    { n: '8 000+', l: 'клиентов' },
                    { n: '⭐ 4.8', l: 'рейтинг' },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="font-display text-2xl font-bold text-primary">{s.n}</p>
                      <p className="text-xs text-muted-foreground">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal order-1 md:order-2" style={{ animationDelay: '0.15s' }}>
                <div className="relative mx-auto max-w-sm md:max-w-none">
                  <div className="overflow-hidden rounded-3xl shadow-2xl">
                    <img src={HERO_IMG} alt="Салон Анюта" className="aspect-[4/5] w-full object-cover" />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl">
                    <p className="text-xs text-muted-foreground">Ближайшее время</p>
                    <p className="mt-0.5 font-semibold text-foreground">Сегодня, 14:30</p>
                    <Button size="sm" className="mt-2 w-full rounded-lg text-xs" onClick={() => go('booking')}>
                      Занять
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SERVICES */}
        {tab === 'services' && (
          <section className="reveal min-h-[calc(100vh-4rem)] py-12 md:py-20">
            <div className="container">
              <SectionTitle kicker="Услуги" title="Что мы предлагаем" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => (
                  <div
                    key={s.name}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                      i % 3 === 0 ? 'bg-primary/10 text-primary' :
                      i % 3 === 1 ? 'bg-accent/10 text-accent' :
                      'bg-secondary text-muted-foreground'
                    }`}>
                      <Icon name={s.icon} size={22} fallback="Star" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    <p className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      {s.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button onClick={() => go('booking')} size="lg" className="rounded-xl px-10 py-6 shadow-lg shadow-primary/20">
                  <Icon name="CalendarDays" size={17} /> Записаться на услугу
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* ABOUT */}
        {tab === 'about' && (
          <section className="reveal min-h-[calc(100vh-4rem)] py-12 md:py-20">
            <div className="container">
              <SectionTitle kicker="О нас" title="Тихая роскошь ухода" />
              <div className="grid gap-8 md:grid-cols-2">
                <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-primary p-8 text-white shadow-xl md:p-10">
                  <p className="font-display text-2xl font-semibold leading-snug md:text-3xl">
                    «Анюта» — пространство, где каждый гость чувствует заботу с первого шага.
                  </p>
                  <p className="mt-5 text-white/80">
                    Мы создали камерный салон без суеты: мягкий свет, натуральные
                    материалы и команда, влюблённая в своё дело.
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
                    {[{ n: '12', l: 'лет' }, { n: '8K+', l: 'гостей' }, { n: '15', l: 'мастеров' }].map((s) => (
                      <div key={s.l}>
                        <p className="font-display text-3xl font-bold">{s.n}</p>
                        <p className="text-xs text-white/70">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { icon: 'Leaf', t: 'Натуральная косметика', d: 'Работаем только с проверенными брендами премиум-класса.', color: 'bg-green-50 text-green-600' },
                    { icon: 'Heart', t: 'Индивидуальный подход', d: 'Каждый образ создаётся под вас и ваш стиль жизни.', color: 'bg-pink-50 text-pink-600' },
                    { icon: 'ShieldCheck', t: 'Стерильность', d: 'Полная дезинфекция инструментов после каждого гостя.', color: 'bg-blue-50 text-blue-600' },
                    { icon: 'Award', t: 'Сертифицированные мастера', d: 'Регулярное обучение и участие в профессиональных конкурсах.', color: 'bg-amber-50 text-amber-600' },
                  ].map((f) => (
                    <div key={f.t} className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${f.color}`}>
                        <Icon name={f.icon} size={20} fallback="Star" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{f.t}</h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* MASTERS */}
        {tab === 'masters' && (
          <section className="reveal min-h-[calc(100vh-4rem)] py-12 md:py-20">
            <div className="container">
              <SectionTitle kicker="Команда" title="Наши мастера" center />
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
                {masters.map((m) => (
                  <div key={m.name} className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-secondary to-muted text-5xl md:text-6xl">
                      {m.emoji}
                    </div>
                    <div className="p-4 md:p-5">
                      <h3 className="font-display text-base font-semibold md:text-lg">{m.name}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">{m.role}</p>
                      <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Опыт {m.exp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button onClick={() => go('booking')} size="lg" className="rounded-xl px-10 py-6 shadow-lg shadow-primary/20">
                  <Icon name="CalendarDays" size={17} /> Выбрать мастера
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* REVIEWS */}
        {tab === 'reviews' && (
          <section className="reveal min-h-[calc(100vh-4rem)] py-12 md:py-20">
            <div className="container">
              <SectionTitle kicker="Отзывы" title="Что говорят наши гости" center />
              <div className="grid gap-4 md:grid-cols-3">
                {reviews.map((r) => (
                  <div key={r.author} className="flex flex-col justify-between rounded-2xl border border-border bg-white p-7 shadow-sm">
                    <div>
                      <div className="flex gap-1">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <span key={i} className="text-amber-400">★</span>
                        ))}
                      </div>
                      <p className="mt-4 font-display text-lg leading-relaxed text-foreground">
                        «{r.text}»
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {r.author[0]}
                      </div>
                      <p className="font-semibold text-sm">{r.author}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
                <p className="font-display text-2xl font-semibold">Тоже хотите поделиться впечатлением?</p>
                <p className="mt-2 text-muted-foreground">Оставьте отзыв в Google или Яндекс Картах</p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <Button variant="outline" className="rounded-xl">Яндекс Карты</Button>
                  <Button variant="outline" className="rounded-xl">Google Maps</Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* BOOKING */}
        {tab === 'booking' && (
          <section className="reveal min-h-[calc(100vh-4rem)] py-12 md:py-20">
            <div className="container max-w-4xl">
              <SectionTitle kicker="Онлайн-запись" title="Выберите удобное время" center />

              <div className="rounded-3xl border border-border bg-white p-6 shadow-lg md:p-10">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Услуга</label>
                    <Select value={booking.service} onValueChange={(v) => setBooking({ ...booking, service: v })}>
                      <SelectTrigger className="rounded-xl border-border">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.name} value={s.name}>{s.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Мастер</label>
                    <Select value={booking.master} onValueChange={(v) => setBooking({ ...booking, master: v })}>
                      <SelectTrigger className="rounded-xl border-border">
                        <SelectValue placeholder="Выберите мастера" />
                      </SelectTrigger>
                      <SelectContent>
                        {masters.map((m) => (
                          <SelectItem key={m.name} value={m.name}>
                            {m.emoji} {m.name} — {m.role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-3 block text-sm font-semibold text-foreground">Время</label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setBooking({ ...booking, time: t })}
                        className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                          booking.time === t
                            ? 'border-primary bg-primary text-white shadow-md shadow-primary/25'
                            : 'border-border bg-secondary/50 hover:border-primary hover:text-primary'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Ваше имя</label>
                    <Input
                      placeholder="Например, Анна"
                      value={booking.name}
                      onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      className="rounded-xl border-border"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Телефон</label>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      value={booking.phone}
                      onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      className="rounded-xl border-border"
                    />
                  </div>
                </div>

                <Button className="mt-8 w-full rounded-xl py-6 text-sm font-semibold shadow-lg shadow-primary/20">
                  <Icon name="CalendarCheck" size={18} fallback="Check" />
                  Подтвердить запись
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Мы перезвоним для подтверждения в течение 15 минут
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CONTACTS */}
        {tab === 'contacts' && (
          <section className="reveal min-h-[calc(100vh-4rem)] py-12 md:py-20">
            <div className="container">
              <SectionTitle kicker="Контакты" title="Будем рады видеть вас" center />
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { icon: 'MapPin', t: 'Адрес', d: 'г. Орск, ул. Багратиона, 6а', color: 'bg-rose-50 text-rose-500' },
                  { icon: 'Phone', t: 'Телефон', d: '8 (905) 899-18-17', color: 'bg-blue-50 text-blue-500' },
                  { icon: 'Clock', t: 'Часы работы', d: 'Ежедневно 9:00 — 21:00', color: 'bg-amber-50 text-amber-500' },
                ].map((c) => (
                  <div key={c.t} className="rounded-2xl border border-border bg-white p-7 text-center shadow-sm">
                    <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${c.color}`}>
                      <Icon name={c.icon} size={26} fallback="Star" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                    <p className="mt-2 text-muted-foreground">{c.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
                <h3 className="font-display text-xl font-semibold">Мы в соцсетях</h3>
                <p className="mt-1 text-sm text-muted-foreground">Следите за новостями и акциями</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    { icon: 'Instagram', label: 'Instagram', color: 'bg-gradient-to-br from-pink-500 to-purple-600' },
                    { icon: 'Send', label: 'Telegram', color: 'bg-blue-500' },
                    { icon: 'MessageCircle', label: 'WhatsApp', color: 'bg-green-500' },
                  ].map((s) => (
                    <button
                      key={s.label}
                      className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 ${s.color}`}
                    >
                      <Icon name={s.icon} size={16} fallback="Share" />
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button onClick={() => go('booking')} size="lg" className="rounded-xl px-10 py-6 shadow-lg shadow-primary/20">
                  <Icon name="CalendarDays" size={17} /> Записаться онлайн
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-foreground text-background">
        <div className="container grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Icon name="Sparkles" size={15} />
              </div>
              <span className="font-display text-xl font-semibold">Анюта</span>
            </div>
            <p className="mt-3 text-sm text-background/60">Салон красоты, где о вас заботятся.</p>
          </div>
          <div className="space-y-2 text-sm text-background/70">
            <p>г. Орск, ул. Багратиона, 6а</p>
            <p>8 (905) 899-18-17</p>
            <p>Ежедневно 9:00 — 21:00</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {tabs.slice(1).map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="rounded-lg px-3 py-1.5 text-xs text-background/60 hover:bg-background/10 hover:text-background"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-background/10 py-5 text-center text-xs text-background/40">
          © 2026 Салон красоты «Анюта»
        </div>
      </footer>
    </div>
  );
};

export default Index;