import { createRef } from "react";
import { Input } from "@/components/Input";

import styles from "./Form.module.css";

export default function Form({ isEnglish }) {
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const messageInputRef = createRef();

  const formHandler = (e) => {
    e.preventDefault();

    alert("Submitted.");
  };

  return (
    <form className={styles.root} onSubmit={formHandler}>
      <Input
        type="text"
        placeholder={isEnglish ? "Your name" : "Seu nome"}
        required
        ref={nameInputRef}
      />
      <Input type="email" placeholder="E-mail" required ref={emailInputRef} />
      <Input
        textarea
        placeholder={isEnglish ? "Message" : "Mensagem"}
        required
        ref={messageInputRef}
      />

      <button>{isEnglish ? "Send message!" : "Enviar mensagem!"}</button>
    </form>
  );
}
