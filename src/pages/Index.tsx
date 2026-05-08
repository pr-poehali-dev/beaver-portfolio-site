import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [openFactId, setOpenFactId] = useState<number | null>(null);

  const facts = [
    {
      id: 1,
      icon: 'Hammer',
      title: 'Мастера строительства',
      shortDesc: 'Бобры — природные инженеры',
      fullDesc: 'Бобры способны строить плотины длиной до 850 метров! Их инженерные навыки позволяют изменять целые экосистемы, создавая пруды и водоёмы.'
    },
    {
      id: 2,
      icon: 'Trees',
      title: 'Зубы-резцы',
      shortDesc: 'Невероятная сила укуса',
      fullDesc: 'Зубы бобра растут всю жизнь и покрыты эмалью оранжевого цвета. Они могут перегрызть дерево диаметром 15 см всего за 15 минут!'
    },
    {
      id: 3,
      icon: 'Waves',
      title: 'Водные эксперты',
      shortDesc: 'Подводное плавание',
      fullDesc: 'Бобры могут задерживать дыхание под водой до 15 минут. Их хвост служит рулём при плавании, а перепонки между пальцами делают их отличными пловцами.'
    },
    {
      id: 4,
      icon: 'Users',
      title: 'Семейные ценности',
      shortDesc: 'Социальные животные',
      fullDesc: 'Бобры живут семейными группами до 12 особей. Они моногамны и создают пару на всю жизнь, вместе воспитывая потомство.'
    },
    {
      id: 5,
      icon: 'Shield',
      title: 'Защитники экосистемы',
      shortDesc: 'Ключевой вид природы',
      fullDesc: 'Бобровые плотины создают водно-болотные угодья, которые поддерживают биоразнообразие. Их деятельность помогает предотвращать наводнения и очищать воду.'
    },
    {
      id: 6,
      icon: 'Leaf',
      title: 'Вегетарианцы',
      shortDesc: 'Растительная диета',
      fullDesc: 'Бобры питаются корой деревьев, водными растениями и листьями. Их любимые деревья — осина, ива и тополь.'
    }
  ];

  const achievements = [
    { value: '850м', label: 'Максимальная длина плотины' },
    { value: '15 мин', label: 'Время под водой' },
    { value: '20 кг', label: 'Средний вес' },
    { value: '10+ лет', label: 'Продолжительность жизни' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/ceccd244-0742-44eb-8dc2-c451c41d2e90/files/fc46c587-4b7c-4e0e-86dd-b6f7735915ff.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            Бобры
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Природные инженеры и хранители экосистем
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl"
            onClick={() => {
              document.getElementById('facts')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Узнать больше
            <Icon name="ChevronDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto" id="facts">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Удивительные факты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Нажмите на карточку, чтобы узнать больше о невероятных способностях бобров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <Card
              key={fact.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setOpenFactId(openFactId === fact.id ? null : fact.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name={fact.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{fact.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{fact.shortDesc}</CardDescription>
              </CardHeader>
              
              {openFactId === fact.id && (
                <CardContent className="animate-accordion-down">
                  <p className="text-foreground leading-relaxed">{fact.fullDesc}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
            Впечатляющие достижения
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto">
        <Card className="animate-fade-in shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl mb-3">
              Почему бобры важны?
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              Эти удивительные животные играют ключевую роль в экосистеме
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg h-fit">
                <Icon name="Droplets" className="text-secondary" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Управление водными ресурсами</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Бобровые плотины регулируют водотоки, предотвращают эрозию почвы и создают водно-болотные угодья, которые служат домом для множества видов.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 bg-accent/10 rounded-lg h-fit">
                <Icon name="Sparkles" className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Фильтрация воды</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Водоёмы, созданные бобрами, естественным образом очищают воду, задерживая осадки и фильтруя загрязнения.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 bg-primary/10 rounded-lg h-fit">
                <Icon name="Heart" className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Сохранение биоразнообразия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Бобровые пруды поддерживают жизнь рыб, птиц, земноводных и растений, увеличивая биологическое разнообразие на 50-80%.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Узнайте больше о бобрах
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up">
            Хотите получить больше информации? Свяжитесь с нами!
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground animate-scale-in"
          >
            <Icon name="Mail" className="mr-2" size={20} />
            Связаться
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Портфолио Бобров. Природные инженеры.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
