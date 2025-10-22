import Link from "next/link";

type ParamsPage = {
    params: {
        id: string;
    }
}

type Curso = {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    total_aulas: string;
    total_horas: string;
};

export default async function CursoAtividadePage({params}: ParamsPage) {
    const response = await fetch(`https://api.origamid.online/cursos`);
    const data = await response.json() as Curso[];

  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {data.map((curso) => (
          <li key={curso.id}> <Link href={`/cursosAtividade/${curso.slug}`}>{curso.nome}</Link></li>
        ))}
      </ul>
    </main>
  );
}