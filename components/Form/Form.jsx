import { Input } from "@/components/Input";
import { Button } from "@/components/ui";
import { useTheme } from "store/theme-context";
import { nameAndEmailValidator, emailValidator } from "helpers/functions";
import useInput from "hooks/use-input";
import useHttp from "hooks/use-http";

import styles from "./Form.module.css";

const Form = ({ isEnglish }) => {
  const { isDark } = useTheme();
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
  const { error, isLoading, sendRequest } = useHttp();
  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  const formHandler = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    await sendRequest("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        name: nameValue,
        email: emailValue,
        message: messageValue,
      },
    });

    resetName();
    resetEmail();
    resetMessage();
  };

  const setVisibility = (hasError) => (hasError ? "visible" : "hidden");
  const errorMessageColor = isDark ? "#EFFD5F" : "#7A6B00";

  return (
    <form className={`formSelector ${styles.root}`} onSubmit={formHandler}>
      {error && (
        <p
          style={{
            color: errorMessageColor,
            position: "absolute",
            top: "10%",
            right: "50%",
            transform: "translate(50,-50)",
            // width: "100%",
            backgroundColor: "red",
          }}
        >
          {error}
        </p>
      )}
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
        {isEnglish ? "May I know your name?" : "Posso saber seu nome?"}
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
        {isLoading
          ? isEnglish
            ? "Sending..."
            : "Enviando..."
          : isEnglish
          ? "Send message!"
          : "Enviar mensagem!"}
      </Button>
    </form>
  );
};

Form.displayName = "Form";

export default Form;
