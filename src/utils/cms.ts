import axios, { AxiosRequestConfig } from 'axios';
import { mergeDeep } from 'immutable';
export interface Project {
  projectId: string;
  title: string;
  subtitle: string;
  thumbnail: StrapiBase<StrapiImage>;
  about: string;
  gallery: StrapiBase<StrapiImage[]>;
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

export const cms = async <T>(url: string, config: Partial<AxiosRequestConfig> = {}) => {
  const baseConfig = {
    url,
    baseURL: `${process.env.NEXT_PUBLIC_CMS_URL}/api`,
    params: { populate: '*' },
    headers: {
      Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  } satisfies AxiosRequestConfig;

  const r = await axios<T>(mergeDeep(baseConfig, config));
  return r.data;
};

export const getCMSProjects = async () => {
  return cms<StrapiBase<ContentTypeBase<Project>[]>>('/projects');
};

export const getCMSProject = async (projectId: string) => {
  const r = await cms<StrapiBase<ContentTypeBase<Project>[]>>('/projects', {
    params: { populate: '*', '[projectId][$eq]': projectId },
  });

  return r.data.find((project) => project.attributes.projectId === projectId);
};
