import "./signform.css";
import Image from "next/image";
import logo from "public/Logo_BK.png";

export default function SignForm({
  text,
}: {
  text: string;
}): React.JSX.Element {
  return (
    <div className="h-100 text-center d-flex justify-content-center align-items-center">
      <span id="form" className="border rounded-3 p-4 shadow bg-white">
        <form>
          <h1>
            <strong>{text}</strong>
          </h1>
          <h2>The Future Library</h2>
          Your online sanctuary for book lovers
          <br />
          <Image src={logo} width={120} alt="BK logo" />
          <div className="my-3">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Student ID"
            ></input>
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
            ></input>
          </div>
          <div className="d-grid gap-2">
            <button id="signButton" type="submit" className="btn mx-4">
              <strong>{text}</strong>
            </button>
          </div>
        </form>
      </span>
    </div>
  );
}
