import axios, { AxiosRequestConfig } from 'axios';
import { mergeDeep } from 'immutable';
import { APIResponse, APIResponseCollection } from '../../strapi-types/types';

export interface Project {
  projectId: string;
  title: string;
  subtitle: string;
  thumbnail: StrapiBase<StrapiImage>;
  about: string;
  gallery: StrapiBase<StrapiImage[]>;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  photo: StrapiBase<StrapiImage>;
  email: string;
  instagram?: string;
  pinterest?: string;
  twitter?: string;
}

export interface ContentTypeBase<T> {
  id: null;
  attributes: T;
}

interface StrapiBase<T> {
  data: T;
  meta: unknown;
}

export interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    url: string;
    width: number;
    height: number;
  };
}

export interface HomePageST {
  carousel: StrapiBase<StrapiImage[]>;
}

export const cms = async <T>(url: string, config: Partial<AxiosRequestConfig> = {}) => {
  const baseConfig = {
    url,
    baseURL: `${process.env.NEXT_PUBLIC_CMS_URL}/api`,
    params: { populate: 'deep' },
    headers: {
      Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  } satisfies AxiosRequestConfig;

  const r = await axios<T>(mergeDeep(baseConfig, config));
  return r.data;
};

export const getCMSProjects = async () => {
  return cms<APIResponseCollection<'api::project.project'>>('/projects', { params: { 'sort[0]': 'createdAt:asc' } });
};

export const getCMSProject = async (projectId: string) => {
  const r = await cms<StrapiBase<ContentTypeBase<Project>[]>>('/projects', {
    params: { '[projectId][$eq]': projectId },
  });

  return r.data.find((project) => project.attributes.projectId === projectId);
};

export const getCMSTeamMembers = async () => {
  return cms<StrapiBase<ContentTypeBase<TeamMember>[]>>('/team-members', { params: { 'sort[0]': 'createdAt:asc' } });
};

export const getCMSHomePage = async () => {
  return cms<StrapiBase<ContentTypeBase<HomePageST>>>('/home-page');
};

export const getCMSAboutUsPage = async () => {
  return cms<APIResponse<'api::about-us-page.about-us-page'>>('/about-us-page');
};

export const getCMSProjectsPage = async () => {
  return cms<APIResponse<'api::projects-page.projects-page'>>('/projects-page');
};

export const getCMSContactUsPage = async () => {
  return cms<APIResponse<'api::contact-us-page.contact-us-page'>>('/contact-us-page');
};

export const getCMSWhatWeDoPage = async () => {
  return cms<APIResponse<'api::what-we-do-page.what-we-do-page'>>('/what-we-do-page');
};
