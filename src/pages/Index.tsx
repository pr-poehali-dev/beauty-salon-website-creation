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

const Index = () => {
  const [tab, setTab] = useState('home');
  const [booking, setBooking] = useState({
    service: '',
    master: '',
    time: '',
    name: '',
    phone: '',
  });

  const go = (id: string) => {
    setTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SectionTitle = ({ kicker, title }: { kicker: string; title: string }) => (
    <div className="mb-16 max-w-xl">
      <p className="mb-4 text-xs tracking-luxe uppercase text-accent">{kicker}</p>
      <h2 className="font-display text-5xl font-light md:text-6xl">{title}</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <button
            onClick={() => go('home')}
            className="font-display text-2xl font-medium tracking-wide"
          >
            Анюта
          </button>
          <nav className="hidden gap-7 lg:flex">
            {tabs.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`relative text-sm transition-colors ${
                  tab === n.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {n.label}
                {tab === n.id && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-accent" />
                )}
              </button>
            ))}
          </nav>
          <Button
            onClick={() => go('booking')}
            variant="outline"
            className="rounded-none border-foreground/30 text-xs tracking-[0.15em] uppercase"
          >
            Запись
          </Button>
        </div>
        {/* Mobile tabs */}
        <div className="flex gap-5 overflow-x-auto border-t border-border/60 px-6 py-3 lg:hidden">
          {tabs.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`whitespace-nowrap text-sm ${
                tab === n.id ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>
      </header>

      <main className="pt-20 lg:pt-20">
        <div className="pt-14 lg:pt-0" key={tab}>
          {/* Home */}
          {tab === 'home' && (
            <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
              <div className="container grid items-center gap-12 py-16 md:grid-cols-2">
                <div className="reveal">
                  <p className="mb-6 text-xs tracking-luxe uppercase text-accent">
                    Салон красоты
                  </p>
                  <h1 className="font-display text-6xl font-light leading-[0.95] md:text-8xl">
                    Красота
                    <br />
                    в каждой
                    <br />
                    <span className="italic text-primary">детали</span>
                  </h1>
                  <p className="mt-8 max-w-md text-muted-foreground">
                    Пространство тишины и заботы, где о вас позаботятся настоящие
                    мастера своего дела.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button
                      onClick={() => go('booking')}
                      className="rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase"
                    >
                      Записаться онлайн
                    </Button>
                    <Button
                      onClick={() => go('services')}
                      variant="ghost"
                      className="rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase"
                    >
                      Услуги
                    </Button>
                  </div>
                </div>
                <div className="reveal" style={{ animationDelay: '0.2s' }}>
                  <div className="relative aspect-[4/5] overflow-hidden">
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

          {/* Services */}
          {tab === 'services' && (
            <section className="reveal py-28">
              <div className="container">
                <SectionTitle kicker="Услуги" title="Что мы предлагаем" />
                <div className="grid gap-px border border-border/60 bg-border/60 md:grid-cols-3">
                  {services.map((s) => (
                    <div
                      key={s.name}
                      className="group bg-background p-10 transition-colors hover:bg-secondary"
                    >
                      <Icon
                        name={s.icon}
                        size={28}
                        className="text-accent transition-transform group-hover:scale-110"
                      />
                      <h3 className="mt-8 font-display text-2xl font-medium">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* About */}
          {tab === 'about' && (
            <section className="reveal bg-secondary/40 py-28">
              <div className="container grid items-center gap-16 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-xs tracking-luxe uppercase text-accent">
                    О салоне
                  </p>
                  <h2 className="font-display text-5xl font-light md:text-6xl">
                    Тихая роскошь
                    <br />
                    ухода за собой
                  </h2>
                  <p className="mt-8 text-muted-foreground">
                    «Анюта» — это камерный салон, где нет суеты. Мы создали
                    пространство, в котором каждая деталь продумана ради вашего
                    комфорта: мягкий свет, натуральные материалы и команда,
                    влюблённая в своё дело.
                  </p>
                  <div className="mt-12 grid grid-cols-3 gap-8">
                    {[
                      { n: '12', l: 'лет на рынке' },
                      { n: '8 000+', l: 'довольных гостей' },
                      { n: '15', l: 'мастеров' },
                    ].map((stat) => (
                      <div key={stat.l}>
                        <p className="font-display text-4xl font-medium text-primary">
                          {stat.n}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                          {stat.l}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: 'Leaf', t: 'Натуральная косметика', d: 'Работаем только с проверенными брендами премиум-класса.' },
                    { icon: 'Heart', t: 'Индивидуальный подход', d: 'Каждый образ создаётся под вас и ваш стиль жизни.' },
                    { icon: 'ShieldCheck', t: 'Стерильность', d: 'Полная дезинфекция инструментов после каждого гостя.' },
                  ].map((f) => (
                    <div key={f.t} className="flex gap-5 border-b border-border/60 pb-6">
                      <Icon name={f.icon} size={24} className="mt-1 shrink-0 text-accent" />
                      <div>
                        <h3 className="font-display text-xl font-medium">{f.t}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Masters */}
          {tab === 'masters' && (
            <section className="reveal py-28">
              <div className="container">
                <SectionTitle kicker="Команда" title="Наши мастера" />
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                  {masters.map((m) => (
                    <div key={m.name} className="group">
                      <div className="flex aspect-[3/4] items-center justify-center bg-secondary transition-colors group-hover:bg-accent/20">
                        <Icon
                          name="User"
                          size={56}
                          className="text-accent/60 transition-transform group-hover:scale-110"
                        />
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-medium">{m.name}</h3>
                      <p className="text-sm text-muted-foreground">{m.role}</p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-accent">
                        Опыт {m.exp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Reviews */}
          {tab === 'reviews' && (
            <section className="reveal bg-secondary/40 py-28">
              <div className="container">
                <SectionTitle kicker="Отзывы" title="Что говорят гости" />
                <div className="grid gap-px border border-border/60 bg-border/60 md:grid-cols-3">
                  {reviews.map((r) => (
                    <div key={r.author} className="bg-background p-10">
                      <Icon name="Quote" size={28} className="text-accent" />
                      <p className="mt-6 font-display text-xl font-light italic leading-relaxed">
                        {r.text}
                      </p>
                      <p className="mt-8 text-xs uppercase tracking-wider text-muted-foreground">
                        — {r.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Booking */}
          {tab === 'booking' && (
            <section className="reveal py-28">
              <div className="container grid gap-16 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-xs tracking-luxe uppercase text-accent">
                    Онлайн-запись
                  </p>
                  <h2 className="font-display text-5xl font-light md:text-6xl">
                    Запишитесь
                    <br />
                    на удобное время
                  </h2>
                  <p className="mt-8 max-w-md text-muted-foreground">
                    Выберите услугу, мастера и время — мы подтвердим вашу запись по
                    телефону в течение 15 минут.
                  </p>
                </div>

                <div className="border border-border/60 bg-card p-8 md:p-10">
                  <div className="space-y-6">
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
                            className={`border px-4 py-2 text-sm transition-colors ${
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

                    <div className="grid gap-4 sm:grid-cols-2">
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

                    <Button className="w-full rounded-none py-6 text-xs tracking-[0.2em] uppercase">
                      Подтвердить запись
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Contacts */}
          {tab === 'contacts' && (
            <section className="reveal py-28">
              <div className="container">
                <SectionTitle kicker="Контакты" title="Будем рады видеть вас" />
                <div className="grid gap-px border border-border/60 bg-border/60 md:grid-cols-3">
                  {[
                    { icon: 'MapPin', t: 'Адрес', d: 'Москва, ул. Цветочная, 12' },
                    { icon: 'Phone', t: 'Телефон', d: '+7 (495) 123-45-67' },
                    { icon: 'Clock', t: 'Часы работы', d: 'Ежедневно 9:00 — 21:00' },
                  ].map((c) => (
                    <div key={c.t} className="bg-background p-10">
                      <Icon name={c.icon} size={26} className="text-accent" />
                      <h3 className="mt-6 font-display text-2xl font-medium">{c.t}</h3>
                      <p className="mt-2 text-muted-foreground">{c.d}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex gap-4">
                  {['Instagram', 'Send', 'Phone'].map((s) => (
                    <button
                      key={s}
                      className="flex h-12 w-12 items-center justify-center border border-border/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <Icon name={s} size={18} />
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center gap-4 py-10 text-center">
          <p className="font-display text-2xl font-medium">Анюта</p>
          <p className="text-xs text-primary-foreground/50">
            © 2026 Салон красоты «Анюта». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
