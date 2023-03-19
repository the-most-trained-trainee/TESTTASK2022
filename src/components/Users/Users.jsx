import React, { useState, useEffect } from "react";
import getUsers from "../../crud-operations/getUsers";
import UserCard from "../UserCard/UserCard";
import styles from "./Users.module.scss";
import scroller from "react-scroll/modules/mixins/scroller";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [maxpPage, setMaxpage] = useState(1);

  const makeList = async () => {
    const list = await getUsers(1);
    setUsers(list.users);
    setPage(list.page);
    setMaxpage(list.total_pages);
  };

  const showMore = async () => {
    setPage((page) => page + 1);
    setTimeout(() => {
      goToUsersEnd();
    }, 300);
  };

  const addingUsers = async () => {
    const newUsers = await getUsers(page);
    setUsers((users) => [...users, ...newUsers.users]);
  };

  const goToUsersEnd = () => {
    scroller.scrollTo("show_more", {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuint",
      offset: -300,
    });
  };

  useEffect(() => {
    if (page !== 1) {
      addingUsers();
    }
  }, [page]);

  useEffect(() => {
    makeList();
  }, []);

  return (
    <div className={styles.users_container} name="users_section">
      <h2 className={styles.users_heading}>Working with GET request</h2>
      <ul className={styles.users_list}>
        {users &&
          users.map((user) => <UserCard details={user} key={user.id} />)}
      </ul>

      {page !== maxpPage && (
        <button
          onClick={showMore}
          className={styles.standard_button}
          name="show_more">
          <span>Show More</span>
        </button>
      )}
    </div>
  );
};

export default Users;
