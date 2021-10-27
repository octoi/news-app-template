import { pageTitle, pageDescription, companyName } from './data.json';
import { mainNews, otherNews } from './data.json';
import { editorial } from './data.json';
import { Content } from './types';

// trademarks
export const title = pageTitle;
export const description = pageDescription;
export const company = companyName;

// editorial
export const editorialContent: Content = editorial;

// main news
export const mainNewsContent: Content[] = mainNews.news;
export const mainNewsTitle: string = mainNews.title;

// others news
export const OtherNewsContent: Content[] = otherNews.news;
export const OtherNewsTitle: string = otherNews.title;

// all
export const allContent = [
  editorialContent,
  ...mainNewsContent,
  ...OtherNewsContent,
];

export const findOneContent = (id: string) => {
  return new Promise((resolve, reject) => {
    const content = allContent.find((content) => content.id === id);

    if (!content) {
      reject('No such id');
      return;
    }

    resolve(content);
  });
};
