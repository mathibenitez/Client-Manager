import { useState, useEffect } from "react";
import UserCard from "../card/UserCard";
import style from "./Grid.module.css";

const Grid = () => {
  const [users, setUsers] = useState({
    data: [],
    error: false,
    loading: true,
  });

  useEffect(() => {
    const controller = new AbortController();

    loadUsers(setUsers, controller);

    return () => controller.abort();
  }, []);

  if (users.loading) return <p>Cargando...</p>;
  if (users.error) return <p>Error al traer usuarios</p>;

  return (
    <div className={style.grid}>
      {users.data.map((u) => (
        <UserCard key={u.id} type={u.role} status="inactive" />
      ))}
    </div>
  );
};

const loadUsers = async (setUsers, { signal }) => {
  const { users, error, aborted } = await getUsers(signal);

  if (aborted) return;
  if (users)
    return setUsers({
      data: users,
      error,
      loading: false,
      aborted,
    });
  if (error)
    return setUsers({
      data: [],
      error,
      loading: false,
      aborted,
    });
};

const getUsers = async (signal) => {
  let users = [];

  try {
    const res = await fetch("http://localhost:3333/users", {
      signal,
    });

    if (res.ok) users = await res.json();
    return {
      users,
      error: !users,
      aborted: false,
    };
  } catch (err) {
    const isAbortError = err.name === "AbortError";

    return {
      users,
      error: !isAbortError,
      aborted: isAbortError,
    };
  }
};

export default Grid;
