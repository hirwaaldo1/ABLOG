import Header from "../layout/Header";
type Props = React.PropsWithChildren<{
  as: "div" | "section" | "aside";
}>;

const PageWrapper = ({
  as: Component = "section",
  children,
}: Props): React.ReactElement => {
  return (
    <Component className="max-w-screen-xl w-11/12 mx-auto">
      <Header />
      {children}
    </Component>
  );
};

export default PageWrapper;
