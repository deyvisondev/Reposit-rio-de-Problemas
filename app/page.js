import SituacionItens from "./components/SituationsItens";

export default function Home() {
  return (
    <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
      {" "}
      {/*  max-w-2x1 controla do tamanho lateral */}
      {/*  Cabeçalho pricipal   */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-8">
        <h1 className="font-bold text-xl">Coding with Deyvison</h1>
        <p className="text-op-90 text-slate-700">Teste</p>
      </div>
      {/* Botão para registar uma situação */}
      <div className="bg-gray-100 px-8 py-4 flex border-b">
        <div className="grow"></div>
        <div>
          <button className="bg-blue-500 py-1 px-4 rounded-md text-white text-opacity-90">
            Nos dê sua sugestão.
          </button>
        </div>
      </div>
      {/* SITUAÇOES */}
      <div className="px-8">
        <SituacionItens />
        <SituacionItens />
        <SituacionItens />
        <SituacionItens />
        <SituacionItens />
      </div>
    </main>
  );
}
