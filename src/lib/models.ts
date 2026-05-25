export type Model = {
  slug: string;
  name: string;
  gender: "women" | "men";
  bio: string;
  cover: string;
  images: string[];
  stats: {
    height: string;
    bust?: string;
    chest?: string;
    waist: string;
    hips: string;
    shoe: string;
    hair: string;
    eyes: string;
  };
};

const W = "https://firstcentmodels.com/wp-content/uploads/2025/07";

export const models: Model[] = [
  {
    slug: "amara",
    name: "Amara Okonkwo",
    gender: "women",
    bio: "Amara brings a quiet intensity to every frame, blending heritage with a refined modern edge. Discovered in Lagos, she has quickly become one of the faces defining First Cent's editorial point of view.",
    cover: `${W}/FIRSTCENTMODELS017-682x1024.jpg`,
    images: [`${W}/FIRSTCENTMODELS017-682x1024.jpg`, `${W}/FIRSTCENTMODELS015-682x1024.jpg`],
    stats: { height: "5'10\"", bust: "32", waist: "24", hips: "35", shoe: "9", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "ngozi",
    name: "Ngozi Eze",
    gender: "women",
    bio: "A natural in front of the lens, Ngozi pairs striking presence with a versatility that moves easily between high fashion and commercial campaigns.",
    cover: `${W}/FIRSTCENTMODELS015-682x1024.jpg`,
    images: [`${W}/FIRSTCENTMODELS015-682x1024.jpg`, `${W}/FIRSTCENTMODELS022-731x1024.jpg`],
    stats: { height: "5'11\"", bust: "33", waist: "24", hips: "35", shoe: "9.5", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "zainab",
    name: "Zainab Bello",
    gender: "women",
    bio: "Zainab's elegance and command of movement make her a favourite for runway and luxury campaigns alike.",
    cover: `${W}/FIRSTCENTMODELS022-731x1024.jpg`,
    images: [`${W}/FIRSTCENTMODELS022-731x1024.jpg`, `${W}/FIRSTCENTMODELS021-731x1024.jpg`],
    stats: { height: "5'10\"", bust: "32", waist: "24", hips: "34", shoe: "9", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "ifeoma",
    name: "Ifeoma Adichie",
    gender: "women",
    bio: "Ifeoma's expressive features and confident stride make her one of the most requested new faces on First Cent's roster.",
    cover: `${W}/FIRSTCENTMODELS021-731x1024.jpg`,
    images: [`${W}/FIRSTCENTMODELS021-731x1024.jpg`, `${W}/FIRSTCENTMODELS008-731x1024.jpg`],
    stats: { height: "5'9\"", bust: "32", waist: "24", hips: "35", shoe: "8.5", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "adaeze",
    name: "Adaeze Nwosu",
    gender: "women",
    bio: "Adaeze brings warmth and depth to editorial work, with a portfolio spanning beauty, lifestyle and runway.",
    cover: `${W}/FIRSTCENTMODELS008-731x1024.jpg`,
    images: [`${W}/FIRSTCENTMODELS008-731x1024.jpg`, `${W}/FIRSTCENTMODELS014-819x1024.jpg`],
    stats: { height: "5'10\"", bust: "32", waist: "23", hips: "34", shoe: "9", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "chiamaka",
    name: "Chiamaka Obi",
    gender: "women",
    bio: "Chiamaka's quiet poise reads beautifully in print, with a striking ability to transform between looks.",
    cover: `${W}/FIRSTCENTMODELS014-819x1024.jpg`,
    images: [`${W}/FIRSTCENTMODELS014-819x1024.jpg`, `${W}/FIRSTCENTMODELS016.jpg`],
    stats: { height: "5'11\"", bust: "33", waist: "24", hips: "35", shoe: "9.5", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "folake",
    name: "Folake Adeyemi",
    gender: "women",
    bio: "Folake's high-fashion sensibility and editorial intelligence make her a long-term face for the agency.",
    cover: `${W}/FIRSTCENTMODELS016.jpg`,
    images: [`${W}/FIRSTCENTMODELS016.jpg`, `${W}/FIRSTCENTMODELS017-682x1024.jpg`],
    stats: { height: "5'10\"", bust: "32", waist: "24", hips: "34", shoe: "9", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "kelechi",
    name: "Kelechi Umeh",
    gender: "men",
    bio: "Kelechi pairs an architectural frame with an effortless presence, equally at home on runway and in tailoring campaigns.",
    cover: `${W}/FIRSTCENTMODELS020-682x1024.jpg`,
    images: [`${W}/FIRSTCENTMODELS020-682x1024.jpg`, `${W}/FIRSTCENTMODELS007-731x1024.jpg`],
    stats: { height: "6'2\"", chest: "39", waist: "31", hips: "37", shoe: "11", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "tunde",
    name: "Tunde Bakare",
    gender: "men",
    bio: "Tunde's confident charisma and modern menswear sensibility have made him a standout new face for the season.",
    cover: `${W}/FIRSTCENTMODELS007-731x1024.jpg`,
    images: [`${W}/FIRSTCENTMODELS007-731x1024.jpg`, `${W}/FIRSTCENTMODELS018.jpg`],
    stats: { height: "6'1\"", chest: "39", waist: "31", hips: "37", shoe: "11", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "emeka",
    name: "Emeka Chukwu",
    gender: "men",
    bio: "Emeka's quiet intensity translates seamlessly between editorial portraiture and commercial campaign work.",
    cover: `${W}/FIRSTCENTMODELS018.jpg`,
    images: [`${W}/FIRSTCENTMODELS018.jpg`, `${W}/FIRSTCENTMODELS019.jpg`],
    stats: { height: "6'2\"", chest: "40", waist: "31", hips: "37", shoe: "11.5", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "ade",
    name: "Ade Johnson",
    gender: "men",
    bio: "Ade is a versatile presence with strong runway craft, equally comfortable in tailoring or sportswear.",
    cover: `${W}/FIRSTCENTMODELS019.jpg`,
    images: [`${W}/FIRSTCENTMODELS019.jpg`, `${W}/FIRSTCENTMODELS007-1.jpg`],
    stats: { height: "6'0\"", chest: "39", waist: "31", hips: "37", shoe: "11", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "jide",
    name: "Jide Ogun",
    gender: "men",
    bio: "Jide's sculptural features and easy charisma have quickly placed him on First Cent's most requested list.",
    cover: `${W}/FIRSTCENTMODELS007-1.jpg`,
    images: [`${W}/FIRSTCENTMODELS007-1.jpg`, `${W}/FIRSTCENTMODELS020-682x1024.jpg`],
    stats: { height: "6'1\"", chest: "39", waist: "31", hips: "37", shoe: "11", hair: "Black", eyes: "Brown" },
  },
];

export const womenModels = models.filter((m) => m.gender === "women");
export const menModels = models.filter((m) => m.gender === "men");

export const womenImages = womenModels.map((m) => m.cover);
export const menImages = menModels.map((m) => m.cover);
export const allImages = Array.from(new Set(models.flatMap((m) => m.images)));

export const getModel = (slug: string) => models.find((m) => m.slug === slug);