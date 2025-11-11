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

  const allPhotos = [...portraits, ...family];

  const filteredPhotos =
    activeSection === "all"
      ? allPhotos
      : activeSection === "portrait"
      ? portraits
      : family;

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">ФОТОГРАФ</h1>
            <div className="flex gap-8">
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
                              {photo.category === "portrait" ? "Портрет" : "Семейная"}
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
