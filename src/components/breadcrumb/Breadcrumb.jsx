import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.scss";

function Breadcrumb() {
  const { pathname } = useLocation();

  if (pathname === "/") return;

  const pathList = pathname.split("/").slice(1);
  return (
    <ol className={styles.breadcrumb}>
      {pathList.map((path, i, arr) => (
        <li
          className={`${styles.breadcrumbItem}${
            i === arr.length - 1 ? ` ${styles.active}` : ""
          }`}
          key={i}
        >
          {console.log(arr)}
          {/* {i === 0 ? (
            <Link to="/">Home</Link>
          ) : ( */}
          <Link to={`/${pathList.slice(0, i + 1).join("/")}`}>{path}</Link>
          {i === arr.length - 1 ? null : <span>/</span>}
          {/* )} */}
        </li>
      ))}
    </ol>
  );
}

export default Breadcrumb;
