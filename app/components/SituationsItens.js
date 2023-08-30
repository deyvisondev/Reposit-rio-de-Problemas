export default function SituacionItens () {
    return (
        <div className="my-8 flex gap-8 items-center">
          <div>
            <h2 className="font-bold">Postar mais vídeos</h2>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          {/* Botão para avaliar resposta */}
          <div>
            <button className="shadow-sm shadow-gray-200 border rounded-md py-1 px-4 flex items-center gap-1 text-gray-600">
            <span className="triangle-vote-up"></span>
              80
            </button>
          </div>
        </div>
    );
}