import { useState } from "react";

const LoginForm = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEntry, setUserEntry] = useState([]);

  const submitForm = () => {
    const newUser = {
      userEmail: email,
      userPassword: password
    };
    setUserEntry([...userEntry, newUser]);
    console.log(userEntry);
  }

  return (
    <div className="fixed right-0 top-0 z-30 border-orange-700 bg-slate-500 border-2 h-screen w-screen opacity-75">
      <div className=" bg-fuchsia-300 opacity-10 h-screen flex flex-col justify-center w-1/3 float-right">
        <form action="" onSubmit={submitForm}>
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              className=""
              name="email"
              id="email"
              autoComplete="off"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
