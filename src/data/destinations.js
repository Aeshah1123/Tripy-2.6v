/**
 * ملف destinations.js - بيانات الوجهات السياحية
 * يحتوي على قائمة بجميع الوجهات المتاحة مع تفاصيلها
 */

// دالة للحصول على الوجهات المترجمة
export const getDestinations = (t) => [
  {
    name: t("destinations.london.name"),
    description: t("destinations.london.description"),
    duration: t("destinations.london.duration"),
    price: "18,500 ريال",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    key: "london",
  },
  {
    name: t("destinations.paris.name"),
    description: t("destinations.paris.description"),
    duration: t("destinations.paris.duration"),
    price: "22,800 ريال",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
    key: "paris",
  },
  {
    name: t("destinations.cairo.name"),
    description: t("destinations.cairo.description"),
    duration: t("destinations.cairo.duration"),
    price: "6,800 ريال",
    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80",
    key: "cairo",
  },
  {
    name: t("destinations.istanbul.name"),
    description: t("destinations.istanbul.description"),
    duration: t("destinations.istanbul.duration"),
    price: "9,500 ريال",
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80",
    key: "istanbul",
  },
  {
    name: t("destinations.dubai.name"),
    description: t("destinations.dubai.description"),
    duration: t("destinations.dubai.duration"),
    price: "12,200 ريال",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    key: "dubai",
  },
];

// للتوافق مع الكود القديم - نصدر نسخة افتراضية بالعربية
export const destinations = [
  {
    name: "لندن - المملكة المتحدة",
    description:
      "نبض الفن والثقافة الأوروبية مع برنامج متنوع بين الأعمال والترفيه.",
    duration: "7 أيام • ميزانية متوسطة",
    price: "18,500 ريال",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    key: "london",
  },
  {
    name: "باريس - فرنسا",
    description: "جولة فاخرة في عاصمة النور تشمل روائع الفن والمطاعم الراقية.",
    duration: "6 أيام • ميزانية فاخرة",
    price: "22,800 ريال",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
    key: "paris",
  },
  {
    name: "القاهرة - مصر",
    description:
      "رحلة تاريخية حول أهرامات الجيزة مع ورشات لبناء فرق العمل المتميزة.",
    duration: "5 أيام • ميزانية اقتصادية",
    price: "6,800 ريال",
    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80",
    key: "cairo",
  },
  {
    name: "إسطنبول - تركيا",
    description:
      "ملتقى الشرق والغرب مع جولات في الأسواق العثمانية ورحلات بحرية.",
    duration: "6 أيام • ميزانية متوسطة",
    price: "9,500 ريال",
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80",
    key: "istanbul",
  },
  {
    name: "دبي - الإمارات العربية المتحدة",
    description:
      "وجهة مستقبلية تجمع بين الأعمال والرفاهية مع تجارب صحراوية مثيرة.",
    duration: "4 أيام • ميزانية فاخرة",
    price: "12,200 ريال",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    key: "dubai",
  },
];
