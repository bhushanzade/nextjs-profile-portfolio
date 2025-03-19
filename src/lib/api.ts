import { TCertificate } from '@type/Certificate';
import { TWorkExperience } from '@type/Company';
import { TEducation } from '@type/Eduction';
import { TProject } from '@type/Project';
import axios, { AxiosHeaders } from 'axios';

const headers = new AxiosHeaders();
headers.set("X-Master-Key", process.env.JSONBIN_MASTER_KEY);
headers.set("X-Access-Key", process.env.JSONBIN_ACCESS_KEY);
headers.set("X-Bin-Meta", "false");

const BASE_URL = process.env.JSONBIN_BASE_URL;

export async function getAllProjects(): Promise<TProject[]> {
  try {
    const { data } = await axios.get(`${BASE_URL}/${process.env.JSONBIN_ALL_PROJECTS_ID}`, { "headers": headers });
    return data && Array.isArray(data) ? data : [];
  } catch (err) {
    console.error(err);
    return [];
  }
}
export async function getWorkExperiences(): Promise<TWorkExperience[]> {
  try {
    const { data } = await axios.get(`${BASE_URL}/${process.env.JSONBIN_ALL_EXPERIENCES_ID}`, { "headers": headers });
    return data && Array.isArray(data) ? data : [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getEducations(): Promise<TEducation[]> {
  try {
    const { data } = await axios.get(`${BASE_URL}/${process.env.JSONBIN_ALL_EDUCATIONS_ID}`, { "headers": headers });
    return data && Array.isArray(data) ? data : [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getCertifications(): Promise<TCertificate[]> {
  try {
    const { data } = await axios.get(`${BASE_URL}/${process.env.JSONBIN_ALL_CERTS_ID}`, { "headers": headers });
    return data && Array.isArray(data) ? data : [];
  } catch (err) {
    console.error(err);
    return [];
  }
}