import { TCertificate } from '@type/Certificate';
import { TWorkExperience } from '@type/Company';
import { TEducation } from '@type/Eduction';
import { TProject } from '@type/Project';
import axios from 'axios';

export const BASE_URL = `${process.env.BASE_URL}/json`;

export async function getAllProjects(): Promise<TProject[]> {
  try {
    const { data } = await axios.get(`${BASE_URL}/projects.json`);
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
export async function getWorkExperiences(): Promise<TWorkExperience[]> {
  try {
    const { data } = await axios.get(`${BASE_URL}/work-experiences.json`);
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getEducations(): Promise<TEducation[]> {
  try {
    const { data } = await axios.get(`${BASE_URL}/educations.json`);
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getCertifications(): Promise<TCertificate[]> {
  try {
    const { data } = await axios.get(`${BASE_URL}/certifications.json`);
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}