function Input({
  title,
  required = false,
  type,
  value,
  name,
  onChange,
}: {
  title: string;
  required?: boolean;
  type: "textarea" | "text";
  value: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <>
      <p>
        {title}
        {required ? "*" : ""}
      </p>
      {type === "text" ? (
        <input
          className="w-full outline-none px-2 pt-4 pb-2"
          type="text"
          onChange={onChange}
          value={value}
          name={name}
        />
      ) : (
        <textarea
          className="w-full outline-none px-2 pt-4 pb-2 resize-none"
          onChange={onChange}
          value={value}
          name={name}
        />
      )}
      <div className="w-full border border-b-black" />
    </>
  );
}

export default Input;
