const getUsers = async (page) => {
  console.log(page)
  const data = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);
  const response = await data.json();
  return response;
}

export const getToken = async () => {
  const data = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token`);
  const response = await data.json();
  return response.token;
}

export const formSubmit = async (formData) => {
  // for (let pair of formData.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }
  const registrationToken = await getToken();
  const res = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
    method: "POST", body: formData, headers: {
      Token: registrationToken
    }
  });
  const data = await res.json();
  console.log(data);
}

export default getUsers;