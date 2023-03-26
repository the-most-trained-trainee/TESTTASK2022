import { useState, useEffect, useRef } from "react";
import smoothScroll from "../../helpers/smoothScroll";
import { getUsers } from "../../helpers/crud-operations";
import UserCard from "../UserCard/UserCard";
import styles from "./Users.module.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [maxpPage, setMaxpage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const userIdList = useRef(new Set());

  const makeList = async () => {
    const list = await getUsers(1);
    setUsers(list.users);
    setPage(list.page);
    setMaxpage(list.total_pages);
    list.users.map((user) => userIdList.current.add(user.id));
  };

  const showMore = async () => setPage((page) => page + 1);

  const addingUsers = async () => {
    setIsLoaded(true);
    const newUsers = await getUsers(page);
    setMaxpage(newUsers.total_pages);
    const usersToAdd = newUsers.users.filter((user) => !userIdList.current.has(user.id));
    newUsers.users.map((user) => userIdList.current.add(user.id));
    setUsers((users) => [...users, ...usersToAdd]);
    setIsLoaded(false);
    setTimeout(() => {
      smoothScroll("form-submit", -500);
    }, 250);
  };

  useEffect(() => {
    if (page !== 1) {
      addingUsers();
    }
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    makeList();
  }, []);

  return (
    <div className={styles.users_container} name="users_section">
      <h2 className={styles.users_heading}>Working with GET request</h2>
      <ul className={styles.users_list}>{users && users.map((user) => <UserCard details={user} key={user.id} />)}</ul>
      {isLoaded && <span className={styles.loader}></span>}
      {page !== maxpPage && (
        <button onClick={showMore} className={styles.standard_button}>
          <span>Show More</span>
        </button>
      )}
    </div>
  );
};

export default Users;
