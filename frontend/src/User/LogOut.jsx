const LogOut = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");

  return (
    <>
      <h1>{localStorage.getItem("accessToken")}</h1>
    </>
  );
};
export default LogOut;
