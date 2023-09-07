import Avatar from "./Avatar";
import Button from "./Button";
import { useState } from "react";

export default function SugestionItemModalComments() {
    const [commentText, setCommentText] = useState('');
    return (
        <div className="p-8">
            <div className="flex gap-4 mb-8">
                <Avatar />
                <div>
                    <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged</p>
                    <div className="text-gray-400 mt-2 text-sm">Anonymous &middot; a few seconds ago</div>
                </div>
            </div>
            <form>
                <textarea 
                    className="border rounded-md w-full p-2" placeholder="Deixe aqui o seu comentário..." 
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}   
                />
                <div className="flex justify-end gap-2 mt-2">
                    <Button>Anexar Arquivos</Button>
                    <Button primary disabled={commentText === ''}>Comentário</Button>
                </div>
            </form>
        </div>
    );
}