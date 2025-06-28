const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
    : process.env.NEXT_PUBLIC_API_URL;

function getFullUrl(path) {
  if (typeof window === "undefined") {
    return `${baseUrl}${path}`;
  } else {
    return path;
  }
}

export async function addData(currentTab, formData) {
  try {
    const url = getFullUrl(`/api/${currentTab}/add`);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getData(currentTab) {
  try {
    const url =
      typeof window === "undefined"
        ? `${baseUrl}${currentTab}/get`
        : `/api/${currentTab}/get`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function updateData(currentTab, formData) {
  try {
    const url = getFullUrl(`/api/${currentTab}/update`);
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteData(currentTab, id) {
  try {
    const url = getFullUrl(`/api/${currentTab}/delete`);
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function login(formData) {
  try {
    const url = getFullUrl(`/api/login`);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function resetPassword(formData) {
  try {
    const url = getFullUrl(`/api/reset-password`);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
