export const getUsers = async (page) => {
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
  const registrationToken = await getToken();
  const res = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
    method: "POST", body: formData, headers: {
      Token: registrationToken
    }
  });
  const data = await res.json();
  return data;
}

