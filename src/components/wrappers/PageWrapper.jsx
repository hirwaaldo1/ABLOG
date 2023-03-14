import Header from "../layout/Header";

const PageWrapper = ({ children }) => {
  return (
    <section className="max-w-screen-2xl w-11/12 mx-auto">
      <Header />
      {children}
    </section>
  );
};

export default PageWrapper;
