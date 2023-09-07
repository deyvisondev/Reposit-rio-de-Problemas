"use client";

import SituacionItens from "./components/SituationsItens";
import { useState } from "react";
import SugestionFormPopup from "./components/SugestionFormPopup";
import Button from "./components/Button";
import SugestionItemModal from "./components/SugestionItemModal";

export default function Home() {
  const [showSugestionModalForm, setShowSugestionModalForm] = useState(false);
  const [showSugestionModalItem, setShowSugestionModalItem] = useState(null);
  function openSugestionModalForm() {
    setShowSugestionModalForm(true);
  }

  function openSugestionModalItem(sugestion) {
    setShowSugestionModalItem(sugestion);
  }

  const sugestions = [
    {
      title: "Please make a sugestion",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged',
      votesCount:80
      
    },
    {
      title: "Please make a sugestion2",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged',
      votesCount:33
      
    },
    {
      title: "Please make a sugestion3",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged',
      votesCount:44
      
    },
  ];

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
          <Button primary onClick={openSugestionModalForm}>
            Nos dê sua sugestão.
          </Button>
        </div>
      </div>
      {/* SITUAÇOES */}
      <div className="px-8">
        {sugestions.map(sugestion => (
          <SituacionItens {...sugestion} 
          onOpen={() => openSugestionModalItem(sugestion)} />
        ))}

      </div>
      {showSugestionModalForm && (
        <SugestionFormPopup setShow={setShowSugestionModalForm} />
      )}
      {showSugestionModalItem && (
        <SugestionItemModal 
        {...showSugestionModalItem} 
        setShow={setShowSugestionModalItem} />
      )}
    </main>
  );
}
