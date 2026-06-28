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
  { name: 'Стрижка и укладка', price: 'от 2 500 ₽', icon: 'Scissors' },
  { name: 'Окрашивание', price: 'от 4 800 ₽', icon: 'Palette' },
  { name: 'Маникюр и педикюр', price: 'от 1 900 ₽', icon: 'Hand' },
  { name: 'Уход за лицом', price: 'от 3 200 ₽', icon: 'Sparkles' },
  { name: 'Брови и ресницы', price: 'от 1 400 ₽', icon: 'Eye' },
  { name: 'Массаж', price: 'от 2 800 ₽', icon: 'Flower2' },
];

const masters = [
  { name: 'Анна Соколова', role: 'Топ-стилист', exp: '12 лет' },
  { name: 'Мария Левина', role: 'Колорист', exp: '8 лет' },
  { name: 'Елена Громова', role: 'Мастер ногтевого сервиса', exp: '10 лет' },
  { name: 'Дарья Орлова', role: 'Косметолог-эстетист', exp: '6 лет' },
];

const reviews = [
  {
    text: 'Атмосфера, в которую хочется возвращаться. Анна сделала идеальную стрижку — впервые осталась в полном восторге.',
    author: 'Ольга К.',
  },
  {
    text: 'Лучший колорист города. Мария подобрала оттенок, и теперь мне все делают комплименты.',
    author: 'Виктория М.',
  },
  {
    text: 'Спокойствие, чистота и внимание к деталям. Здесь чувствуешь заботу с порога.',
    author: 'Ирина Л.',
  },
];

const tabs = [
  { id: 'home', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'about', label: 'О салоне' },
  { id: 'masters', label: 'Мастера' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'booking', label: 'Запись' },
  { id: 'contacts', label: 'Контакты' },
];

const timeSlots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];

const SectionTitle = ({ kicker, title }: { kicker: string; title: string }) => (
  <div className="mb-10 md:mb-16">
    <p className="mb-3 text-xs tracking-luxe uppercase text-accent">{kicker}</p>
    <h2 className="font-display text-4xl font-light md:text-5xl lg:text-6xl">{title}</h2>
  </div>
);

const Index = () => {
  const [tab, setTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState({
    service: '',
    master: '',
    time: '',
    name: '',
    phone: '',
  });

  const go = (id: string) => {
    setTab(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ─── Header ─── */}
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between md:h-20">

          {/* Logo */}
          <button
            onClick={() => go('home')}
            className="font-display text-xl font-medium tracking-wide md:text-2xl"
          >
            Анюта
          </button>

          {/* Burger — всегда виден */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
            aria-label="Меню"
          >
            <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Выпадающее меню */}
        {menuOpen && (
          <div className="absolute left-0 top-full w-full border-b border-border/60 bg-background/98 shadow-lg backdrop-blur-md">
            <div className="container py-5">
              <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
                {tabs.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => go(n.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-left text-sm transition-colors ${
                      tab === n.id
                        ? 'bg-secondary font-medium text-foreground'
                        : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                    }`}
                  >
                    {tab === n.id && <span className="h-1 w-1 rounded-full bg-accent" />}
                    {n.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 border-t border-border/60 pt-4">
                <Button
                  onClick={() => go('booking')}
                  className="w-full rounded-none py-5 text-xs tracking-[0.2em] uppercase sm:w-auto sm:px-10"
                >
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
          <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden md:min-h-[calc(100vh-5rem)]">
            <div className="container grid items-center gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-16">
              {/* Text */}
              <div className="reveal order-2 md:order-1">
                <p className="mb-4 text-xs tracking-luxe uppercase text-accent md:mb-6">
                  Салон красоты
                </p>
                <h1 className="font-display text-5xl font-light leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
                  Красота
                  <br />
                  в каждой
                  <br />
                  <span className="italic text-primary">детали</span>
                </h1>
                <p className="mt-6 max-w-md text-sm text-muted-foreground md:mt-8 md:text-base">
                  Пространство тишины и заботы, где о вас позаботятся настоящие
                  мастера своего дела.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
                  <Button
                    onClick={() => go('booking')}
                    className="rounded-none px-6 py-5 text-xs tracking-[0.2em] uppercase md:px-8 md:py-6"
                  >
                    Записаться онлайн
                  </Button>
                  <Button
                    onClick={() => go('services')}
                    variant="ghost"
                    className="rounded-none px-6 py-5 text-xs tracking-[0.2em] uppercase md:px-8 md:py-6"
                  >
                    Услуги
                  </Button>
                </div>
              </div>
              {/* Image */}
              <div className="reveal order-1 md:order-2" style={{ animationDelay: '0.15s' }}>
                <div className="relative mx-auto aspect-[4/3] max-w-sm overflow-hidden sm:aspect-[4/4] md:mx-0 md:aspect-[4/5] md:max-w-none">
                  <img
                    src={HERO_IMG}
                    alt="Интерьер салона Анюта"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SERVICES */}
        {tab === 'services' && (
          <section className="reveal min-h-[calc(100vh-4rem)] py-12 md:py-20 lg:py-28">
            <div className="container">
              <SectionTitle kicker="Услуги" title="Что мы предлагаем" />
              <div className="grid gap-px border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <div
                    key={s.name}
                    className="group bg-background p-7 transition-colors hover:bg-secondary md:p-10"
                  >
                    <Icon
                      name={s.icon}
                      size={26}
                      className="text-accent transition-transform group-hover:scale-110"
                    />
                    <h3 className="mt-6 font-display text-xl font-medium md:mt-8 md:text-2xl">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ABOUT */}
        {tab === 'about' && (
          <section className="reveal min-h-[calc(100vh-4rem)] bg-secondary/40 py-12 md:py-20 lg:py-28">
            <div className="container grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <p className="mb-3 text-xs tracking-luxe uppercase text-accent md:mb-4">
                  О салоне
                </p>
                <h2 className="font-display text-4xl font-light md:text-5xl lg:text-6xl">
                  Тихая роскошь
                  <br />
                  ухода за собой
                </h2>
                <p className="mt-6 text-sm text-muted-foreground md:mt-8 md:text-base">
                  «Анюта» — это камерный салон, где нет суеты. Мы создали
                  пространство, в котором каждая деталь продумана ради вашего
                  комфорта: мягкий свет, натуральные материалы и команда,
                  влюблённая в своё дело.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4 md:mt-12 md:gap-8">
                  {[
                    { n: '12', l: 'лет на рынке' },
                    { n: '8 000+', l: 'довольных гостей' },
                    { n: '15', l: 'мастеров' },
                  ].map((stat) => (
                    <div key={stat.l}>
                      <p className="font-display text-3xl font-medium text-primary md:text-4xl">
                        {stat.n}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                        {stat.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5 md:space-y-6">
                {[
                  { icon: 'Leaf', t: 'Натуральная косметика', d: 'Работаем только с проверенными брендами премиум-класса.' },
                  { icon: 'Heart', t: 'Индивидуальный подход', d: 'Каждый образ создаётся под вас и ваш стиль жизни.' },
                  { icon: 'ShieldCheck', t: 'Стерильность', d: 'Полная дезинфекция инструментов после каждого гостя.' },
                ].map((f) => (
                  <div key={f.t} className="flex gap-4 border-b border-border/60 pb-5 md:gap-5 md:pb-6">
                    <Icon name={f.icon} size={22} className="mt-1 shrink-0 text-accent" />
                    <div>
                      <h3 className="font-display text-lg font-medium md:text-xl">{f.t}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* MASTERS */}
        {tab === 'masters' && (
          <section className="reveal min-h-[calc(100vh-4rem)] py-12 md:py-20 lg:py-28">
            <div className="container">
              <SectionTitle kicker="Команда" title="Наши мастера" />
              <div className="grid grid-cols-2 gap-6 md:gap-10 lg:grid-cols-4">
                {masters.map((m) => (
                  <div key={m.name} className="group">
                    <div className="flex aspect-square items-center justify-center bg-secondary transition-colors group-hover:bg-accent/20 sm:aspect-[3/4]">
                      <Icon
                        name="User"
                        size={40}
                        className="text-accent/60 transition-transform group-hover:scale-110 md:h-14 md:w-14"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-medium md:mt-5 md:text-2xl">
                      {m.name}
                    </h3>
                    <p className="text-xs text-muted-foreground md:text-sm">{m.role}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-accent">
                      Опыт {m.exp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* REVIEWS */}
        {tab === 'reviews' && (
          <section className="reveal min-h-[calc(100vh-4rem)] bg-secondary/40 py-12 md:py-20 lg:py-28">
            <div className="container">
              <SectionTitle kicker="Отзывы" title="Что говорят гости" />
              <div className="grid gap-px border border-border/60 bg-border/60 md:grid-cols-3">
                {reviews.map((r) => (
                  <div key={r.author} className="bg-background p-7 md:p-10">
                    <Icon name="Quote" size={24} className="text-accent" />
                    <p className="mt-5 font-display text-lg font-light italic leading-relaxed md:mt-6 md:text-xl">
                      {r.text}
                    </p>
                    <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground md:mt-8">
                      — {r.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BOOKING */}
        {tab === 'booking' && (
          <section className="reveal min-h-[calc(100vh-4rem)] py-12 md:py-20 lg:py-28">
            <div className="container grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <p className="mb-3 text-xs tracking-luxe uppercase text-accent md:mb-4">
                  Онлайн-запись
                </p>
                <h2 className="font-display text-4xl font-light md:text-5xl lg:text-6xl">
                  Запишитесь
                  <br />
                  на удобное время
                </h2>
                <p className="mt-6 text-sm text-muted-foreground md:mt-8 md:text-base">
                  Выберите услугу, мастера и время — мы подтвердим вашу запись по
                  телефону в течение 15 минут.
                </p>
              </div>

              <div className="border border-border/60 bg-card p-6 md:p-10">
                <div className="space-y-5 md:space-y-6">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                      Услуга
                    </label>
                    <Select
                      value={booking.service}
                      onValueChange={(v) => setBooking({ ...booking, service: v })}
                    >
                      <SelectTrigger className="rounded-none border-border/80">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.name} value={s.name}>
                            {s.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                      Мастер
                    </label>
                    <Select
                      value={booking.master}
                      onValueChange={(v) => setBooking({ ...booking, master: v })}
                    >
                      <SelectTrigger className="rounded-none border-border/80">
                        <SelectValue placeholder="Выберите мастера" />
                      </SelectTrigger>
                      <SelectContent>
                        {masters.map((m) => (
                          <SelectItem key={m.name} value={m.name}>
                            {m.name} — {m.role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                      Время
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setBooking({ ...booking, time: t })}
                          className={`border px-3 py-2 text-sm transition-colors md:px-4 ${
                            booking.time === t
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border/80 hover:border-primary'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                    <Input
                      placeholder="Ваше имя"
                      value={booking.name}
                      onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      className="rounded-none border-border/80"
                    />
                    <Input
                      placeholder="Телефон"
                      value={booking.phone}
                      onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      className="rounded-none border-border/80"
                    />
                  </div>

                  <Button className="w-full rounded-none py-5 text-xs tracking-[0.2em] uppercase md:py-6">
                    Подтвердить запись
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CONTACTS */}
        {tab === 'contacts' && (
          <section className="reveal min-h-[calc(100vh-4rem)] py-12 md:py-20 lg:py-28">
            <div className="container">
              <SectionTitle kicker="Контакты" title="Будем рады видеть вас" />
              <div className="grid gap-px border border-border/60 bg-border/60 sm:grid-cols-3">
                {[
                  { icon: 'MapPin', t: 'Адрес', d: 'Москва, ул. Цветочная, 12' },
                  { icon: 'Phone', t: 'Телефон', d: '+7 (495) 123-45-67' },
                  { icon: 'Clock', t: 'Часы работы', d: 'Ежедневно 9:00 — 21:00' },
                ].map((c) => (
                  <div key={c.t} className="bg-background p-7 md:p-10">
                    <Icon name={c.icon} size={24} className="text-accent" />
                    <h3 className="mt-5 font-display text-xl font-medium md:mt-6 md:text-2xl">{c.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground md:text-base">{c.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3 md:mt-12">
                {['Instagram', 'Send', 'Phone'].map((s) => (
                  <button
                    key={s}
                    className="flex h-11 w-11 items-center justify-center border border-border/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon name={s} size={18} />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border/60 bg-primary text-primary-foreground">
        <div className="container grid grid-cols-1 gap-6 py-10 sm:grid-cols-3 sm:gap-8 md:py-14">
          <div>
            <p className="font-display text-2xl font-medium">Анюта</p>
            <p className="mt-3 text-sm text-primary-foreground/60">
              Салон красоты, где о вас заботятся как о близком человеке.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-primary-foreground/60">Москва, ул. Цветочная, 12</p>
            <p className="text-primary-foreground/60">+7 (495) 123-45-67</p>
            <p className="text-primary-foreground/60">Ежедневно 9:00 — 21:00</p>
          </div>
          <div className="flex gap-3 sm:justify-end">
            {tabs.slice(1).map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-xs text-primary-foreground/50 underline-offset-2 hover:text-primary-foreground hover:underline"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/40">
          © 2026 Салон красоты «Анюта»
        </div>
      </footer>


    </div>
  );
};

export default Index;