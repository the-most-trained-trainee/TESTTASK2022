const getUsers = async (page = 1) => {
  const data = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);
  const response = await data.json();
  return response;
}

export default getUsers;