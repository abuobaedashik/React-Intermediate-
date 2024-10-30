import { Link, Outlet } from "react-router-dom";

const NAvbar = () => {
  return (
    <div className="mx-auto w-11/12">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className=" navbar-center">
          <ul className="menu menu-horizontal  px-1">
            <div className="hidden md:flex gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/card">Card</Link>
            </li>
            <li>
              <Link to="/Chart1">PChart</Link>
            </li>
            <li>
              <Link to="/Chart2">BarChart</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            </div>

            <li className="md:hidden block">
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 p-2">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Menu</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
           <button className="btn-ghost">Btn</button>
        </div>
      </div>
    </div>
  );
};

export default NAvbar;
