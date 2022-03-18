export const Button = ({ name, btnClass }) => {
  const btnClassName = "btn " + btnClass;
  return (
    <>
      <button className={btnClassName}>{name}</button>
    </>
  );
};
