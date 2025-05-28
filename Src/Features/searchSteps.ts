console.log('Loading searchSteps.ts...');

import { Given, When, Then } from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';


Given('I navigate to the Direct Ferries homepage', async function (this: any) {
  console.log('Executing: I navigate to the Direct Ferries homepage');
  const searchPage = new SearchPage(this.page as Page);
  await searchPage.navigate();
});

When('I select the Dover route', async function (this: any) {
  console.log('Executing: I select the Dover route');
  const searchPage = new SearchPage(this.page as Page);
  await searchPage.selectDoverRoute();
});

When('I select 1 child', async function (this: any) {
  console.log('Executing: I select 1 child');
  const searchPage = new SearchPage(this.page as Page);
  await searchPage.selectOneChild();
});

When('I select a vehicle', async function (this: any) {
  console.log('Executing: I select a vehicle');
  const searchPage = new SearchPage(this.page as Page);
  await searchPage.selectVehicle();
});

When('I click the Search button', async function (this: any) {
  console.log('Executing: I click the Search button');
  const searchPage = new SearchPage(this.page as Page);
  await searchPage.clickSearchButton();
});

Then('I should see the search results', async function (this: any) {
  console.log('Executing: I should see the search results');
  const searchPage = new SearchPage(this.page as Page);
  await searchPage.verifySearchResults();
});