import React, { useState, useEffect } from "react";
import getUsers from "../../crud-operations/getUsers";
import UserCard from "../UserCard/UserCard";
import styles from "./Users.module.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [maxpPage, setMaxpage] = useState(1);

  const makeList = async () => {
    const list = await getUsers();
    setUsers(list.users);
    setPage(list.page);
    setMaxpage(list.total_pages);
  };

  const showMore = async () => {
    setPage((page) => page + 1);
    const newUsers = await getUsers(page);
    setUsers((users) => [...users, ...newUsers.users]);
  };

  useEffect(() => {
    makeList();
  }, []);

  return (
    <div className={styles.users_container}>
      <h2 className={styles.users_heading}>Working with GET request</h2>
      <ul className={styles.users_list}>
        {users.map((user) => (
          <UserCard details={user} key={user.id} />
        ))}
      </ul>

      {page !== maxpPage && (
        <button onClick={showMore} className={styles.standard_button}>
          <span>Show More</span>
        </button>
      )}
    </div>
  );
};

export default Users;
