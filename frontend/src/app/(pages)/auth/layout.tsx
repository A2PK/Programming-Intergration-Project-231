import "./layout.css";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="decorator"></div>
      <div className="authBody">{children}</div>
      <div className="decorator"></div>
    </>
  );
}
