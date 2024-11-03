const Home = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 50px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontWeight: 500,
          fontSize: "48px",
          textAlign: "center",
        }}
      >
        Welcome to PhoneBook
      </h1>
    </div>
  );
};

export default Home;
