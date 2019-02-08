import faker from 'faker';
import puppeteer from 'puppeteer';

let page;
let browser;
const width = 1440;
const height = 767;

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google');
  });
});

// describe('Login', () => {
//   beforeEach(async () => {
//     jest.
//     await page.goto('http://localhost:3000');
//     await page.
//   }, 10000);
//   it('should just work', async () => {
//     const pathName = await page.evaluate(() => window.location.pathname);
//     expect(pathName).toEqual('/login');
//   });
//   // beforeAll(async () => {
//   //   browser = await puppeteer.launch({
//   //     headless: true,
//   //     slowMo: 80,
//   //     args: [`--window-size=${width},${height}`],
//   //   });
//   //   page = await browser.newPage();
//   //   await page.deleteCookie({ name: 'MEETUP_TRACK', domain: '.meetup.com' });
//   //   await page.deleteCookie({ name: 'token', domain: 'localhost' });
//   //   await page.setViewport({ width, height });
//   // });
//   //
//   // afterAll(async () => {
//   //   await page.deleteCookie({ name: 'MEETUP_TRACK', domain: '.meetup.com' });
//   //   await page.deleteCookie({ name: 'token', domain: 'localhost' });
//   //   browser.close();
//   // });
//   /*it('should redirect to login page', async () => {
//     const pathName = await page.evaluate(() => window.location.pathname);
//     expect(pathName).toEqual('/login');
//   }, 16000);
//   it('should redirect to meetup.com to login', async () => {
//     await page.goto(`${APP}/login`);
//
//     await page.waitForSelector('button[type=button]');
//     await page.click('button[type=button]');
//     const path = await page.evaluate(() => {
//       const { origin, pathname } = window.location;
//       return { origin, pathname };
//     });
//     expect(`${path.origin}${path.pathname}`).toEqual('https://secure.meetup.com/login/');
//   }, 16000);
//   it('should authenticate meetup user', async () => {
//     await page.goto(`${APP}/login`);
//
//     await page.waitForSelector('button[type=button]');
//     await page.click('button[type=button]');
//
//     await page.waitForSelector('div[id=paneLogin]');
//     await page.click('input[name=email]');
//     await page.type('input[name=email]', 'aubobq7@wbdev.tech');
//     await page.click('input[name=password]');
//     await page.type('input[name=password]', '123456');
//     await page.click('input[name=submitButton]');
//     await page.waitFor(8000);
//     const path = await page.evaluate(() => {
//       const { origin, pathname } = window.location;
//       return { origin, pathname };
//     });
//     expect(`${path.origin}${path.pathname}`).toEqual('http://localhost:3000/');
//   }, 30000);*/
// });

/*describe('Logout', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`],
    });
    page = await browser.newPage();
    await page.deleteCookie({ name: 'MEETUP_TRACK', domain: '.meetup.com' });
    await page.deleteCookie({ name: 'token', domain: 'localhost' });
    await page.setViewport({ width, height });
  });

  afterAll(async () => {
    await page.deleteCookie({ name: 'MEETUP_TRACK', domain: '.meetup.com' });
    await page.deleteCookie({ name: 'token', domain: 'localhost' });
    browser.close();
  });
  it('should log out a user', async () => {
    await page.goto(`${APP}/login`);

    await page.waitForSelector('button[type=button]');
    await page.click('button[type=button]');

    await page.waitForSelector('div[id=paneLogin]');
    await page.click('input[name=email]');
    await page.type('input[name=email]', 'aubobq7@wbdev.tech');
    await page.click('input[name=password]');
    await page.type('input[name=password]', '123456');
    await page.click('input[name=submitButton]');
    await page.waitFor(8000);

    await page.click('svg[title=Logout]');
    await page.waitFor(8000);
    const path = await page.evaluate(() => {
      const { origin, pathname } = window.location;
      return { origin, pathname };
    });
    expect(`${path.origin}${path.pathname}`).toEqual('http://localhost:3000/login');
  }, 30000);
});*/
