import React, { useState, useEffect } from "react";
import getUsers from "../crud-operations/getUsers";
import UserCard from "./UserCard/UserCard";

const WorkingGet = () => {
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
    <div>
      <h2>Working with GET request</h2>
      {users.map((user) => (
        <UserCard details={user} key={user.id} />
      ))}

      {page !== maxpPage && <button onClick={showMore}>Show More</button>}
    </div>
  );
};

export default WorkingGet;
