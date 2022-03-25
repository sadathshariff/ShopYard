import { useAuth } from "../../contexts";

export const Wishlist = () => {
  const { checkUserLogin } = useAuth();
  checkUserLogin();
  return (
    <>
      <h1>Wishlist Page</h1>
    </>
  );
};
