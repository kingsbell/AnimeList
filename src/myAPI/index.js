import axios from "axios";

const baseUrl = process.env.NEXT_ANIME_TOP_API_URL;
const myAPI = async (endpoint) => {
  try {
    const response = await fetch(baseUrl + endpoint);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error :", error);
  }
};

export default myAPI;

export const coba = async (endpoint) => {
  const link = "https://api.jikan.moe/v4";
  try {
    const response = await axios.get(link + endpoint);
    const data = response.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error :", error.response?.data || error.message || error);
  }
};

export const getProducers = async (anime) => {
  const response = await anime;
  const producers = response.data.producers;

  const firstProducer = producers.find((producer, index) => index === 0);

  if (firstProducer) {
    const firstProducerName = firstProducer.name;
    return firstProducerName;
  } else {
    return "Undefined";
  }
};

export const getAllProducersData = async (anime) => {
  const response = await anime;
  const producers = response.data.producers;

  let getAllDatasProducers;

  if (producers.length > 0) {
    const producerData = producers.map((producer) => producer.name);
    getAllDatasProducers = producerData.join(", ");
  } else {
    getAllDatasProducers = "Undefined";
  }
  return getAllDatasProducers;
};

export const getAllLicensorsData = async (anime) => {
  const response = await anime;
  const licensors = response.data.licensors;

  let licensorsName;

  if (licensors.length > 0) {
    const licenses = licensors.map((licensor) => licensor.name);
    licensorsName = licenses.join(", ");
  } else {
    licensorsName = "Undefined";
  }

  return licensorsName;
};

export const getAllStudiosData = async (anime) => {
  const response = await anime;
  const studios = response.data.studios;

  let getAllDatasStudios;

  if (studios.length > 0) {
    const dataStudio = studios.map((studios) => studios.name);
    getAllDatasStudios = dataStudio.join(", ");
  } else {
    getAllDatasStudios = "Undefined";
  }
  return getAllDatasStudios;
};

export const getAllGenresData = async (anime) => {
  const response = await anime;
  const genres = response.data.genres;

  let getAllDatasGenres;

  if (genres.length > 0) {
    const dataGenres = genres.map((genres) => genres.name);
    getAllDatasGenres = dataGenres.join(", ");
  } else {
    getAllDatasGenres = "Undefined";
  }
  return getAllDatasGenres;
};

export const getAllThemeData = async (anime) => {
  const response = await anime;
  const themes = response.data.themes;

  let themesName;

  if (themes.length > 0) {
    const theme = themes.map((themeData) => themeData.name);
    themesName = theme.join(", ");
  } else {
    themesName = "Undefined";
  }
  return themesName;
};

export const getAllDemographicsData = async (anime) => {
  const response = await anime;
  const demographics = response.data.demographics;

  let getAllDatasDemographics;

  if (demographics.length > 0) {
    const datasDemographics = demographics.map((demographics) => demographics.name);
    getAllDatasDemographics = datasDemographics.join(", ");
  } else {
    getAllDatasDemographics = "Undefined";
  }
  return getAllDatasDemographics;
};
