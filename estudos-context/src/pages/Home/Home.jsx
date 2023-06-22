import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";

export function Home() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return (
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <div className="box-p">
        <h1 className="title-home">Home</h1>
        <p className="p-home">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          similique aspernatur doloribus fugiat est adipisci eum reiciendis vel
          dolore maxime obcaecati quo tempora voluptatum, mollitia illo recusandae
          deleniti debitis accusantium officiis officia inventore natus id
          dignissimos itaque. Illum quaerat rem dignissimos amet quisquam vero
          suscipit a quis sunt nobis reprehenderit itaque accusamus, est obcaecati
          deleniti qui eaque corporis. Eveniet ullam ut adipisci quas, ipsum
          tempora voluptates itaque in soluta nihil. Natus doloribus quae, dolores
          fugiat aperiam libero exercitationem. Dolores sint, quo quisquam
          voluptatum animi, ut maiores saepe atque ullam dolor sunt dolorum
          consectetur ad illum cumque ipsam tempore! Illo fuga temporibus, aliquam
          ea quidem vel aperiam sint quas autem nesciunt recusandae cupiditate
          dignissimos voluptates quam necessitatibus aliquid ipsam odio voluptas
          deleniti quisquam alias omnis sapiente eum? Amet, tenetur ab! Quasi rem
          pariatur tenetur corrupti aperiam dicta laudantium vero eos iste, esse
          possimus quo culpa temporibus, praesentium autem a beatae suscipit.
          Autem tempore facilis alias assumenda suscipit incidunt rem, doloribus
          cumque sequi quae ex, molestiae quisquam dolorum vero cupiditate amet,
          quam maxime. Molestiae quasi expedita delectus magnam laudantium quis
          nihil quod illum maxime minima. Minus sit vitae, consectetur debitis
          sequi illum minima? Dolor repellendus laborum aliquid! Assumenda fuga
          harum nobis dolore, temporibus accusantium laboriosam deserunt, tempore
          architecto et quisquam vel aspernatur nihil autem ratione voluptatem ea
          recusandae sit officia nam dignissimos perspiciatis cumque? Quidem culpa
          quam porro officia minima autem, alias earum assumenda vel tenetur eius
          labore exercitationem modi velit perspiciatis, vero animi nostrum rerum
          excepturi nemo. Adipisci deserunt est cum? Cumque mollitia natus
          officiis, nemo voluptatibus labore quibusdam quod neque nulla, animi
          culpa dignissimos placeat tenetur ullam minus ratione! Doloribus
          repellendus asperiores quod voluptas. Amet, eveniet ut? Suscipit
          voluptas earum ad mollitia vel harum labore laborum nulla eius
          dignissimos aliquid vitae, dolore eligendi! Dolores id ipsa veniam
          possimus molestias eum.
        </p>
      </div>
    </div>
  );
}
