"use client";

import AdminCompetitiveProgrammingView from "@/components/admin-view/competitive-programming";
import AdminEducationView from "@/components/admin-view/education";
import AdminHomeView from "@/components/admin-view/home";
import Login from "@/components/admin-view/login";
import AdminHPassionsView from "@/components/admin-view/passions";
import AdminResearchView from "@/components/admin-view/research";
import AdminSoftwareEngineeringView from "@/components/admin-view/software-engineering";
import AdminTeachingView from "@/components/admin-view/teaching";
import {
  addData,
  getData,
  login,
  updateData,
  resetPassword,
  deleteData,
} from "@/services";
import { useEffect, useState } from "react";

const initialHomeFormData = { name: "", title: "" };
const initialEducationFormData = { degree: "", years: "", college: "" };
const initialCompetitiveProgrammingFormData = { title: "", description: "" };
const initialResearchFormData = {
  publication: "",
  years: "",
  authors: "",
  link: "",
};
const initialLoginFormData = { email: "", password: "" };
const initialResetFormData = {
  email: "",
  password: "",
  confirmPassword: "",
};
const initialTeachingFormData = { course: "", link: "" };
const initialPassionsFormData = { title: "", description: "", photo: "" };
const initialSoftwareEngineeringFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
};

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [educationViewFormData, setEducationViewFormData] = useState(
    initialEducationFormData
  );
  const [
    competitiveProgrammingViewFormData,
    setCompetitiveProgrammingViewFormData,
  ] = useState(initialCompetitiveProgrammingFormData);
  const [researchViewFormData, setResearchViewFormData] = useState(
    initialResearchFormData
  );
  const [teachingViewFormData, setTeachingViewFormData] = useState(
    initialTeachingFormData
  );
  const [passionsViewFormData, setPassionsViewFormData] = useState(
    initialPassionsFormData
  );
  const [softwareEngineeringViewFormData, setSoftwareEngineeringViewFormData] =
    useState(initialSoftwareEngineeringFormData);

  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);
  const [resetPasswordFormData, setResetPasswordFormData] =
    useState(initialResetFormData);

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      const response = await deleteData(currentSelectedTab, id);
      if (response.success) {
        extractAllDatas(); // Actualizează datele după ștergere
      }
    }
  };

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
          handleDelete={handleDelete} // Transmite handleDelete ca prop
        />
      ),
    },
    {
      id: "software-engineering",
      label: "Software Engineering",
      component: (
        <AdminSoftwareEngineeringView
          formData={softwareEngineeringViewFormData}
          setFormData={setSoftwareEngineeringViewFormData}
          handleSaveData={handleSaveData}
          data={allData["software-engineering"]}
          handleDelete={handleDelete} // Transmite handleDelete ca prop
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.education}
          handleDelete={handleDelete} // Transmite handleDelete ca prop
        />
      ),
    },
    {
      id: "research",
      label: "Research",
      component: (
        <AdminResearchView
          formData={researchViewFormData}
          setFormData={setResearchViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.research}
          handleDelete={handleDelete} // Transmite handleDelete ca prop
        />
      ),
    },
    {
      id: "teaching",
      label: "Teaching",
      component: (
        <AdminTeachingView
          formData={teachingViewFormData}
          setFormData={setTeachingViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.teaching}
          handleDelete={handleDelete} // Transmite handleDelete ca prop
        />
      ),
    },
    {
      id: "competitive-programming",
      label: "Competitive programming",
      component: (
        <AdminCompetitiveProgrammingView
          formData={competitiveProgrammingViewFormData}
          setFormData={setCompetitiveProgrammingViewFormData}
          handleSaveData={handleSaveData}
          data={allData["competitive-programming"]}
          handleDelete={handleDelete} // Transmite handleDelete ca prop
        />
      ),
    },
    {
      id: "passions",
      label: "Passions",
      component: (
        <AdminHPassionsView
          formData={passionsViewFormData}
          setFormData={setPassionsViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.passions}
          handleDelete={handleDelete}
        />
      ),
    },
  ];

  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);
    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response && response.data[0]);
      setUpdate(true);
    }
    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }
  }

  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      education: educationViewFormData,
      research: researchViewFormData,
      teaching: teachingViewFormData,
      "competitive-programming": competitiveProgrammingViewFormData,
      passions: passionsViewFormData,
      "software-engineering": softwareEngineeringViewFormData,
    };
    const response = update
      ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
      : await addData(currentSelectedTab, dataMap[currentSelectedTab]);
    console.log(response, "response");

    if (response.success) {
      resetFormDatas();
      extractAllDatas();
    }
  }

  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);

  function resetFormDatas() {
    setHomeViewFormData(initialHomeFormData);
    setEducationViewFormData(initialEducationFormData);
    setCompetitiveProgrammingViewFormData(
      initialCompetitiveProgrammingFormData
    );
    setResearchViewFormData(initialResearchFormData);
    setTeachingViewFormData(initialTeachingFormData);
    setPassionsViewFormData(initialPassionsFormData);
    setSoftwareEngineeringViewFormData(initialSoftwareEngineeringFormData);
  }

  console.log(allData, homeViewFormData, "homeViewFormData");

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")));
  }, []);

  async function handleLogin() {
    const res = await login(loginFormData);
    console.log(res, "login");
    if (res?.success) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    } else {
      alert("Invalid credentials");
    }
  }

  async function handleResetPassword() {
    const res = await resetPassword(resetPasswordFormData);
    console.log(res, "resetPassword");
    if (res?.success) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    }
  }

  if (!authUser) {
    return (
      <Login
        formData={loginFormData}
        handleLogin={handleLogin}
        setFormData={setLoginFormData}
      />
    );
  }

  return (
    <div className="flex h-screen">
      <nav
        className="flex flex-col items-center border-r border-blue-700 w-1/4 p-6 h-full space-y-6"
        role="tablist"
      >
        <img
          className="h-auto w-1/2 m-0"
          src="https://unibuc.ro/wp-content/uploads/2019/02/Logo-UB-vertical-COLOR.jpg"
        />
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`space-y-3 w-full font-semibold text-sm p-1 hover:bg-gray-100 hover:text-blue-700 mt-1 ${
              item.id === currentSelectedTab
                ? "text-blue-700 border-l-4 border-blue-700"
                : ""
            }`}
            onClick={() => {
              setCurrentSelectedTab(item.id);
              resetFormDatas();
              setUpdate(false);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="w-3/4 p-10 overflow-y-auto">
        {menuItems.map((item) => {
          return (
            item.id === currentSelectedTab && (
              <div key={item.id}>{item.component}</div>
            )
          );
        })}
      </div>
      <button
        onClick={() => {
          setAuthUser(false);
          sessionStorage.removeItem("authUser");
        }}
        className="fixed bottom-4 bg-orange-500 text-white-300 opacity-85 right-5 p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        Logout
      </button>
    </div>
  );
}
