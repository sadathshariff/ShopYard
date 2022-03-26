import { useAuth } from "../../contexts";
export const Cart = () => {
  const { checkUserLogin } = useAuth();
  checkUserLogin();
  return (
    <>
      <h1>Cart Page</h1>
    </>
  );
};
