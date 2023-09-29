import { Input } from "@nextui-org/react";

export const InputField = ({
    type,
    label,
    value,
    onChange,
    name,
    id,
    placeholder,
    isRequired,
    isInvalid,
    color,
    errorMessage
  }) => {
    return (
      <Input
        type={type}
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        placeholder={placeholder}
        isRequired={isRequired}
        isInvalid={isInvalid}
        color={color}
        errorMessage={errorMessage}
        variant="underlined"
        size="lg"
        classNames={{
          label: "text-greenBlue text-md tracking-wide font-semibold",
        }}
      />
    );
  };