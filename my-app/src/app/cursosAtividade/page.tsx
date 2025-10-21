type ParamsPage = {
    params: {
        id: string;
    }
}

type Curso = {
    id: number;
    nome: string;
    descricao: string;
};

export default async function CursoAtividadePage({params}: ParamsPage) {
    const response = await fetch(`https://api.origamid.online/cursos`);
    const data = await response.json() as Curso;
  return (
    <main>
      <h1>Cursos</h1>
    </main>
  );
}