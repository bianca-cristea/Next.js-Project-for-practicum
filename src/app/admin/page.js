"use client";

import AdminCompetitiveProgrammingView from "@/components/admin-view/competitive-programming";
import AdminEducationView from "@/components/admin-view/education";
import AdminHomeView from "@/components/admin-view/home";
import Login from "@/components/admin-view/login";
import AdminHPassionsView from "@/components/admin-view/passions";
import AdminResearchView from "@/components/admin-view/research";
import AdminSoftwareEngineeringView from "@/components/admin-view/software-engineering";
import AdminTeachingView from "@/components/admin-view/teaching";
import { addData, getData, login, updateData } from "@/services";
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

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
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
  console.log(allData, "allData");
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
  async function handleLogin() {
    const res = await login(loginFormData);
    console.log(res, "login");
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
        className="flex flex-col justify-center border-r border-blue-700 space-y-4 w-1/4  h-full"
        role="tablist"
      >
        <img
          className="h-auto w-1/3 m-auto border-b border-blue-700"
          src="https://unibuc.ro/wp-content/uploads/2019/02/Logo-UB-vertical-COLOR.jpg"
        />
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-3 hover:bg-blue-700 hover:text-white font-bold text-l text-black transition-colors duration-300 ease-in-out"
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
    </div>
  );
}
