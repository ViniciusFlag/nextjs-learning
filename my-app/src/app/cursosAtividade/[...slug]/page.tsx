import Link from "next/link";

type PageParams = {
    params: {
        slug: string[];
    }
}

type Aula = {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    curso_id: number;
    tempo: number;
    ordem: number;
};

type Curso = {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    total_aulas: string;
    total_horas: string;
    aulas: Aula[];
};

export default async function SlugCursoPage({params}: PageParams) {
    const response = await fetch(`https://api.origamid.online/cursos/${params.slug.join('/')}`);
    const data = await response.json() as Curso;
  
  return (
    <main>
      <h1>{data.nome}</h1>
      <h3>{data.descricao}</h3>
      <p>Aulas: {data.total_aulas} | Horas: {data.total_horas}</p>
      <ul>
        {data.aulas.map((aula) => (
          <li key={aula.id}><Link href={`/cursosAtividade/${params.slug.join('/')}/${aula.slug}`}>{aula.nome}</Link></li>
        ))}
      </ul>
    </main>
  );
}