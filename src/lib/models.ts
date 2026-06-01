import woman1 from "@/assets/uploads/firstcent-set/fc-woman-01.jpg";
import woman2 from "@/assets/uploads/firstcent-set/fc-woman-02.jpg";
import woman3 from "@/assets/uploads/firstcent-set/fc-woman-03.jpg";
import woman4 from "@/assets/uploads/firstcent-set/fc-woman-04.jpg";
import woman5 from "@/assets/uploads/firstcent-set/fc-woman-05.jpg";
import woman6 from "@/assets/uploads/firstcent-set/fc-woman-06.jpg";
import man1 from "@/assets/uploads/firstcent-set/fc-man-01.jpg";
import man2 from "@/assets/uploads/firstcent-set/fc-man-02.jpg";
import man3 from "@/assets/uploads/firstcent-set/fc-man-03.jpg";
import man4 from "@/assets/uploads/firstcent-set/fc-man-04.jpg";
import duo1 from "@/assets/uploads/firstcent-set/fc-duo-01.jpg";
import duo2 from "@/assets/uploads/firstcent-set/fc-duo-02.jpg";

export type Model = {
  slug: string;
  name: string;
  gender: "women" | "men";
  bio: string;
  cover: string;
  images: string[];
  instagram?: string;
  placements?: { city: string; agency: string }[];
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

export const models: Model[] = [
  {
    slug: "amara",
    name: "Amara Okonkwo",
    gender: "women",
    bio: "Amara brings a quiet intensity to every frame, blending heritage with a refined modern edge. Discovered in Lagos at nineteen, she has walked for emerging West African designers and fronted beauty campaigns across the continent. Off set she studies photography, an instinct that shows up in how precisely she shapes light around her own features.",
    cover: woman1,
    images: [woman1, woman3, woman5],
    stats: { height: "5'10\"", bust: "32", waist: "24", hips: "35", shoe: "9", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "ngozi",
    name: "Ngozi Eze",
    gender: "women",
    bio: "A natural in front of the lens, Ngozi pairs striking presence with the versatility to move between high fashion editorial and warmer commercial work. Originally from Enugu, she trained as a dancer, which lends her movement an unusual fluency on runway. Clients return for her ability to hold a single look for hours without losing energy.",
    cover: woman2,
    images: [woman2, woman4, duo1],
    stats: { height: "5'11\"", bust: "33", waist: "24", hips: "35", shoe: "9.5", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "zainab",
    name: "Zainab Bello",
    gender: "women",
    bio: "Zainab carries an elegance and command of movement that have made her a favourite for runway and luxury campaigns alike. Raised between Abuja and Kano, she brings a layered cultural fluency to every shoot, equally comfortable in couture and tailored menswear-inspired editorial. She is currently building a personal archive of Northern Nigerian textile photography.",
    cover: woman3,
    images: [woman3, woman1, duo2],
    stats: { height: "5'10\"", bust: "32", waist: "24", hips: "34", shoe: "9", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "ifeoma",
    name: "Ifeoma Adichie",
    gender: "women",
    bio: "Ifeoma's expressive features and confident stride have made her one of the most requested new faces on the First Cent roster this season. A literature graduate, she approaches each campaign as a small narrative, asking sharp questions about character and intent. Her debut runway season included openings for two emerging Lagos houses.",
    cover: woman4,
    images: [woman4, woman6, duo1],
    stats: { height: "5'9\"", bust: "32", waist: "24", hips: "35", shoe: "8.5", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "adaeze",
    name: "Adaeze Nwosu",
    gender: "women",
    bio: "Adaeze brings warmth and depth to editorial work, with a portfolio spanning beauty, lifestyle and runway. She started in Port Harcourt as a pageant winner before transitioning into full-time modelling, and that stage discipline still shows in her composure under pressure. Photographers describe her presence as quietly cinematic.",
    cover: woman5,
    images: [woman5, woman2, woman6],
    stats: { height: "5'10\"", bust: "32", waist: "23", hips: "34", shoe: "9", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "chiamaka",
    name: "Chiamaka Obi",
    gender: "women",
    bio: "Chiamaka's quiet poise reads beautifully in print, with a striking ability to transform between looks across a single shoot day. She trained briefly in classical drawing, which informs the way she sculpts her body for the camera. Her recent editorial work explores the meeting point of architecture and the female form.",
    cover: woman6,
    images: [woman6, woman3, duo2],
    stats: { height: "5'11\"", bust: "33", waist: "24", hips: "35", shoe: "9.5", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "folake",
    name: "Folake Adeyemi",
    gender: "women",
    bio: "Folake's high-fashion sensibility and editorial intelligence have made her a long-term face for the agency. Yoruba by heritage and Lagos-raised, she pairs an exacting eye for styling with the kind of restraint that flatters minimalist designers. She regularly collaborates with stylists on mood and reference before a shoot begins.",
    cover: duo2,
    images: [duo2, woman1, woman4],
    stats: { height: "5'10\"", bust: "32", waist: "24", hips: "34", shoe: "9", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "kelechi",
    name: "Kelechi Umeh",
    gender: "men",
    bio: "Kelechi pairs an architectural frame with an effortless presence, equally at home on the runway and in tailoring campaigns. Originally trained as a footballer, he carries that athletic posture into every walk. Off duty he mentors younger men entering the industry, with a particular focus on financial literacy.",
    cover: man1,
    images: [man1, man3, duo1],
    stats: { height: "6'2\"", chest: "39", waist: "31", hips: "37", shoe: "11", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "tunde",
    name: "Tunde Bakare",
    gender: "men",
    bio: "Tunde's confident charisma and modern menswear sensibility have made him a standout new face for the season. A graphic designer by training, he treats each shoot as a layered composition and is unusually attentive to wardrobe detail. His campaigns this year have spanned streetwear, fragrance and luxury watchmaking.",
    cover: man2,
    images: [man2, man4, duo2],
    stats: { height: "6'1\"", chest: "39", waist: "31", hips: "37", shoe: "11", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "emeka",
    name: "Emeka Chukwu",
    gender: "men",
    bio: "Emeka's quiet intensity translates seamlessly between editorial portraiture and commercial campaign work. Raised in Onitsha, he came to modelling through theatre and brings a trained sense of stillness to the camera. Directors regularly note how few frames he needs to land a look.",
    cover: man3,
    images: [man3, man1, duo1],
    stats: { height: "6'2\"", chest: "40", waist: "31", hips: "37", shoe: "11.5", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "ade",
    name: "Ade Johnson",
    gender: "men",
    bio: "Ade is a versatile presence with strong runway craft, equally comfortable in tailoring or sportswear. Born in Ibadan and based in Lagos, he balances modelling with a small carpentry studio that builds bespoke furniture for set design. That hands-on background sharpens his eye for material and silhouette.",
    cover: man4,
    images: [man4, man2, duo2],
    stats: { height: "6'0\"", chest: "39", waist: "31", hips: "37", shoe: "11", hair: "Black", eyes: "Brown" },
  },
  {
    slug: "jide",
    name: "Jide Ogun",
    gender: "men",
    bio: "Jide's sculptural features and easy charisma have quickly placed him on the most requested list at First Cent. A former university sprinter, he turned to modelling after being scouted at a track meet in Lagos. His portfolio leans toward strong editorial work with a confident, slightly rebellious edge.",
    cover: duo1,
    images: [duo1, man2, man4],
    stats: { height: "6'1\"", chest: "39", waist: "31", hips: "37", shoe: "11", hair: "Black", eyes: "Brown" },
  },
];

export const womenModels = models.filter((m) => m.gender === "women");
export const menModels = models.filter((m) => m.gender === "men");

export const womenImages = womenModels.map((m) => m.cover);
export const menImages = menModels.map((m) => m.cover);
export const allImages = Array.from(new Set([
  woman1,
  woman2,
  woman3,
  woman4,
  woman5,
  woman6,
  man1,
  man2,
  man3,
  man4,
  duo1,
  duo2,
  ...models.flatMap((m) => m.images),
]));

export const getModel = (slug: string) => models.find((m) => m.slug === slug);