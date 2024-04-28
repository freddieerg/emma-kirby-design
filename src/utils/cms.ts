import axios, { AxiosRequestConfig } from "axios";
import { mergeDeep } from "immutable";
import { APIResponse, APIResponseCollection } from "../../strapi-types/types";

export const cms = async <T>(url: string, config: Partial<AxiosRequestConfig> = {}) => {
  const baseConfig = {
    url,
    baseURL: `${process.env.NEXT_PUBLIC_CMS_URL}/api`,
    params: { populate: "deep" },
    headers: {
      Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  } satisfies AxiosRequestConfig;

  const r = await axios<T>(mergeDeep(baseConfig, config));
  return r.data;
};

export const getCMSProjects = async () => {
  return cms<APIResponseCollection<"api::project.project">>("/projects", { params: { "sort[0]": "createdAt:asc" } });
};

export const getCMSProject = async (projectId: string) => {
  const r = await cms<APIResponseCollection<"api::project.project">>("/projects", {
    params: { "[projectId][$eq]": projectId },
  });

  return r.data.find((project) => project.attributes.projectId === projectId);
};

export const getCMSTeamMembers = async () => {
  return cms<APIResponseCollection<"api::team-member.team-member">>("/team-members", {
    params: { "sort[0]": "createdAt:asc" },
  });
};

export const getCMSHomePage = async () => {
  return cms<APIResponse<"api::home-page.home-page">>("/home-page");
};

export const getCMSAboutUsPage = async () => {
  return cms<APIResponse<"api::about-us-page.about-us-page">>("/about-us-page");
};

export const getCMSProjectsPage = async () => {
  return cms<APIResponse<"api::projects-page.projects-page">>("/projects-page");
};

export const getCMSContactUsPage = async () => {
  return cms<APIResponse<"api::contact-us-page.contact-us-page">>("/contact-us-page");
};

export const getCMSWhatWeDoPage = async () => {
  return cms<APIResponse<"api::what-we-do-page.what-we-do-page">>("/what-we-do-page");
};
