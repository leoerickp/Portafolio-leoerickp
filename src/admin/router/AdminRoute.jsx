import { Route, Routes } from "react-router-dom";
import { FormProvider } from "../context/form/FormProvider";
import { NavBarAdmin } from "../layouts/NavBarAdmin";
import { SideBarAdmin } from "../layouts/SideBarAdmin";
import { Albums, Experiences, ProfileForm, Projects, Roles, Users, Skills, Positions } from "../pages";
import { Photos } from "../pages/photos/Photos";


export const AdminRoute = () => {
  return (
    <FormProvider>
      <NavBarAdmin />
      <div id="layoutSidenav">
        <SideBarAdmin />
        <div id="layoutSidenav_content" className="main-container-admin p-3 overflow-auto">
          <main >
            <Routes>
              <Route path="/" element={<ProfileForm />} />
              <Route path="/profile" element={<ProfileForm />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/users" element={<Users />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/positions/:id" element={<Positions />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/photos/:id" element={<Photos />} />
              <Route path="/*" element={<ProfileForm />} />
            </Routes>
          </main>
        </div>
      </div>
    </FormProvider>
  );
};
