import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("all");

  const portraits = [
    {
      id: 1,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/cd0798bb-cdf3-445b-9902-51dd205db626.jpg",
      category: "portrait",
      title: "Элегантный портрет"
    },
    {
      id: 2,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/42980d8a-0cbe-4341-85e7-0eadf18ce666.jpg",
      category: "portrait",
      title: "Художественный портрет"
    },
    {
      id: 3,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/cd0798bb-cdf3-445b-9902-51dd205db626.jpg",
      category: "portrait",
      title: "Студийная съёмка"
    }
  ];

  const family = [
    {
      id: 4,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/fb7f9636-ffed-499a-90b7-1410851a7f34.jpg",
      category: "family",
      title: "Семейное счастье"
    },
    {
      id: 5,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/fb7f9636-ffed-499a-90b7-1410851a7f34.jpg",
      category: "family",
      title: "Радость момента"
    },
    {
      id: 6,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/fb7f9636-ffed-499a-90b7-1410851a7f34.jpg",
      category: "family",
      title: "Тёплые воспоминания"
    }
  ];

  const children = [
    {
      id: 7,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/3c1e9758-1d81-4bf0-bcc7-52f320f28d98.jpg",
      category: "children",
      title: "Детская радость"
    },
    {
      id: 8,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/3c1e9758-1d81-4bf0-bcc7-52f320f28d98.jpg",
      category: "children",
      title: "Игривые моменты"
    },
    {
      id: 9,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/3c1e9758-1d81-4bf0-bcc7-52f320f28d98.jpg",
      category: "children",
      title: "Искренние улыбки"
    }
  ];

  const lovestory = [
    {
      id: 10,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/e40e2c1f-1ab5-4e45-af69-d6dae2a662c7.jpg",
      category: "lovestory",
      title: "История любви"
    },
    {
      id: 11,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/e40e2c1f-1ab5-4e45-af69-d6dae2a662c7.jpg",
      category: "lovestory",
      title: "Нежность"
    },
    {
      id: 12,
      src: "https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/e40e2c1f-1ab5-4e45-af69-d6dae2a662c7.jpg",
      category: "lovestory",
      title: "Романтика"
    }
  ];

  const allPhotos = [...portraits, ...family, ...children, ...lovestory];

  const filteredPhotos =
    activeSection === "all"
      ? allPhotos
      : activeSection === "portrait"
      ? portraits
      : activeSection === "family"
      ? family
      : activeSection === "children"
      ? children
      : lovestory;

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">ФОТОГРАФ</h1>
            <div className="flex gap-6 flex-wrap">
              <button
                onClick={() => setActiveSection("all")}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === "all" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Все работы
              </button>
              <button
                onClick={() => setActiveSection("portrait")}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === "portrait" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Портреты
              </button>
              <button
                onClick={() => setActiveSection("family")}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === "family" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Семейные
              </button>
              <button
                onClick={() => setActiveSection("children")}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === "children" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Детские
              </button>
              <button
                onClick={() => setActiveSection("lovestory")}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === "lovestory" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Лавстори
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Портфолио
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Создаю образы, которые рассказывают истории. Каждый кадр — это момент,
              застывший во времени.
            </p>
          </div>

          <div className="mb-20 bg-card rounded-lg overflow-hidden animate-fade-in">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/5] md:aspect-auto">
                <img
                  src="https://cdn.poehali.dev/projects/1559115a-f59a-48a9-b38f-1b37285cc5df/files/b9020186-c3ec-4899-80b7-e24960327c6b.jpg"
                  alt="О фотографе"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4 inline-flex items-center gap-2">
                  <Icon name="User" size={20} className="text-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    О фотографе
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Привет! Я создаю вечные воспоминания
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Более 7 лет я занимаюсь фотографией, превращая мгновения в искусство.
                    Моя специализация — портретная, семейная и свадебная съёмка.
                  </p>
                  <p>
                    Каждая фотосессия для меня — это уникальная история. Я помогаю
                    раскрыться перед камерой, создаю комфортную атмосферу и ловлю самые
                    искренние эмоции.
                  </p>
                  <p>
                    Работаю с профессиональным оборудованием Canon и студийным светом.
                    Провела более 500 фотосессий и каждый раз влюбляюсь в свою работу заново.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">7+</div>
                    <div className="text-sm text-muted-foreground">лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">фотосессий</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">любви к делу</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <Dialog key={photo.id}>
                <DialogTrigger asChild>
                  <Card
                    className="group relative overflow-hidden cursor-pointer border-0 bg-card animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="Camera" size={16} />
                            <span>
                              {photo.category === "portrait"
                                ? "Портрет"
                                : photo.category === "family"
                                ? "Семейная"
                                : photo.category === "children"
                                ? "Детская"
                                : "Лавстори"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Свяжитесь со мной</h3>
              <p className="text-muted-foreground">Создадим что-то прекрасное вместе</p>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Mail" size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;