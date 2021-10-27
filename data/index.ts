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
export const otherNewsContent: Content[] = otherNews.news;
export const otherNewsTitle: string = otherNews.title;

// all news
export const allNews = [...mainNewsContent, ...otherNewsContent];

// all
export const allContent = [editorialContent, ...allNews];

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
