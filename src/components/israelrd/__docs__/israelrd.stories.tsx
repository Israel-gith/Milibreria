import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example";

const meta: Meta<typeof Example> = {
  title: "IsraelRD",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    avatar: "../avatar04.png",
    altAvatar: "Avatar",
    title: "Mario y su grandeza en nintendo",
    date: "28 de Octubre, 2024",
    image: "../mario.jpg",
    altImage: "Imagen de la Noticia",
    description: "Desde su primera aparición, Mario se ha convertido en el símbolo de Nintendo y en un ícono global. Con juegos como Super Mario Bros. y Super Mario Odyssey, el personaje ha revolucionado el mundo de los videojuegos y marcado generaciones. Su sencillez y carisma reflejan el espíritu de Nintendo: diversión e innovación para todos. Mario no es solo un héroe de juegos, sino una leyenda cultural que sigue dejando huella.",
    likes: 10,
  },
};

