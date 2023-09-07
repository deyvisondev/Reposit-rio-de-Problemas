import Button from "../components/Button";
import Modal from "./Modal";

export default function SugestionFormPopup({setShow}) {
  return (
    <Modal setShow={setShow} title={'Faça uma sugestão'}>
      <form className="p-8">
              <label className="block mt-4 mb-1 text-slate-700">Título</label>
              <input
                className="w-full border"
                type="text"
                placeholder="Uma breve descrição do problema"
              />
              <label className="block mt-4 mb-1 text-slate-700">Detalhes</label>
              <textarea
                className="w-full border p-2 rounded-md"
                placeholder="Indique detalhes do problema"
              ></textarea>
              <div className="flex gap-2 mt-2 justify-end">
                <Button>Incluir anexos</Button>
                <Button primary>Criar post</Button>
              </div>
            </form>
    </Modal>
  );
}
