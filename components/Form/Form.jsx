import { createRef } from "react";
import { Input } from "@/components/Input";

import styles from "./Form.module.css";

export default function Form() {
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const messageInputRef = createRef();

  const formHandler = (e) => {
    e.preventDefault();

    alert("Submitted.");
  };

  return (
    <form className={styles.root} onSubmit={formHandler}>
      <Input type="text" placeholder="Your name" required ref={nameInputRef} />
      <Input type="email" placeholder="E-mail" required ref={emailInputRef} />
      <Input textarea placeholder="Message" required ref={messageInputRef} />

      <button>Send message!</button>
    </form>
  );
}
