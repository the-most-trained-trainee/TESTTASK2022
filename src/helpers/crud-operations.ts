export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
  photo: string;
}

interface UsersResponse {
  success: boolean;
  total_pages: number;
  total_users: number;
  count: number;
  page: number;
  links: {
    next_url: string;
    prev_url: string | null;
  };
  users: User[];
}

interface SubmitResponse {
  success: boolean;
  user_id: number;
  message: string;
}

export const getUsers = async (page: number): Promise<UsersResponse> => {
  const data = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);
  const response = await data.json();
  return response;
};

export const getToken = async (): Promise<string> => {
  const data = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token`);
  const response = await data.json();
  return response.token;
};

export const formSubmit = async (formData: FormData): Promise<SubmitResponse> => {
  const registrationToken = await getToken();
  const res = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
    method: "POST",
    body: formData,
    headers: {
      Token: registrationToken,
    },
  });
  const data = await res.json();
  return data;
};
