import { Input } from "@/components/Input";
import { Button } from "@/components/ui";
import { useTheme } from "store/theme-context";
import useInput from "hooks/use-input";

import styles from "./Form.module.css";

const Form = ({ isEnglish }) => {
  const { isDark } = useTheme();
  const nameAndEmailValidator = (value) => value.trim() !== "";
  const emailValidator = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const {
    value: nameValue,
    onBlur: onNameBlur,
    onChange: onNameChange,
    reset: resetName,
    isValid: isNameValid,
    hasError: nameHasError,
  } = useInput(nameAndEmailValidator);
  const {
    value: emailValue,
    onBlur: onEmailBlur,
    onChange: onEmailChange,
    reset: resetEmail,
    isValid: isEmailValid,
    hasError: emailHasError,
  } = useInput(emailValidator);
  const {
    value: messageValue,
    onBlur: onMessageBlur,
    onChange: onMessageChange,
    reset: resetMessage,
    isValid: isMessageValid,
    hasError: messageHasError,
  } = useInput(nameAndEmailValidator);
  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  const formHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    resetName();
    resetEmail();
    resetMessage();
  };
  const setVisibility = (hasError) => (hasError ? "visible" : "hidden");
  const errorMessageColor = isDark ? "#EFFD5F" : "#7A6B00";

  return (
    <form className={`formSelector ${styles.root}`} onSubmit={formHandler}>
      <Input
        type="text"
        placeholder={isEnglish ? "Your name" : "Seu nome"}
        value={nameValue}
        onBlur={onNameBlur}
        onChange={onNameChange}
        required
      />
      <p
        className={styles.errorMessage}
        style={{
          visibility: setVisibility(nameHasError),
          color: errorMessageColor,
        }}
      >
        {isEnglish ? "Can I please know your name?" : "Posso saber seu nome?"}
      </p>
      <Input
        type="email"
        placeholder="E-mail"
        value={emailValue}
        onBlur={onEmailBlur}
        onChange={onEmailChange}
        required
      />
      <p
        className={styles.errorMessage}
        style={{
          visibility: setVisibility(emailHasError),
          color: errorMessageColor,
        }}
      >
        {isEnglish
          ? "Come on, I can't reply you back without a valid e-mail!"
          : "Vamos lá, sem saber seu e-mail não terei como te responder!"}
      </p>
      <Input
        textarea
        placeholder={isEnglish ? "Message" : "Mensagem"}
        value={messageValue}
        onBlur={onMessageBlur}
        onChange={onMessageChange}
        required
      />
      <p
        className={styles.errorMessage}
        style={{
          visibility: setVisibility(messageHasError),
          color: errorMessageColor,
        }}
      >
        {isEnglish ? "Tell me something!" : "Fale-me algo!"}
      </p>

      <Button isDisabled={!isFormValid}>
        {isEnglish ? "Send message!" : "Enviar mensagem!"}
      </Button>
    </form>
  );
};

Form.displayName = "Form";

export default Form;
