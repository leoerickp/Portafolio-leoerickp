import { configureStore } from "@reduxjs/toolkit";
import { albumsSlice } from "../admin/slices/album/albums.Slice";
import { authSlice } from "../admin/slices/AuthSlice/AuthSlice";
import { experiencesSlice } from "../admin/slices/experience/experiencesSlice";
import { photosSlice } from "../admin/slices/photos/photosSlice";
import { positionsSlice } from "../admin/slices/position/positionsSlice";
import { profileSlice } from "../admin/slices/profile/profileSlice";
import { projectsSlice } from "../admin/slices/projects/projectsSlice";
import { rolesSlice } from "../admin/slices/roles/rolesSlice";
import { skillsSlice } from "../admin/slices/skills/skillsSlice";
import { usersSlice } from "../admin/slices/users/usersSlice";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    roles: rolesSlice.reducer,
    skills: skillsSlice.reducer,
    users: usersSlice.reducer,
    projects: projectsSlice.reducer,
    experiences: experiencesSlice.reducer,
    positions: positionsSlice.reducer,
    albums: albumsSlice.reducer,
    photos: photosSlice.reducer,
    profile: profileSlice.reducer,
  },
});
