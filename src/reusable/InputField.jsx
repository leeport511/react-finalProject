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
        variant="underlined"
        size="lg"
        classNames={{
          label: "text-greenBlue text-md tracking-wide font-semibold",
        }}
      />
    );
  };